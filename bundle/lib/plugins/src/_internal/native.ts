import {
    callNativeMethod,
    callNativeMethodSync,
} from '@valenced/modules/native'
import { PluginErrorCodes, PluginSystemError } from './errors'
import type {
    MethodArgs,
    MethodName,
    MethodResult,
} from '@valenced/modules/native'
import type { PluginSystemErrorPayload } from './errors'

type PluginMethodEnvelope<T> =
    | { result: T }
    | { error: PluginSystemErrorPayload | string }

function unwrap<T>(raw: unknown): T {
    const envelope = raw as PluginMethodEnvelope<T>

    if (envelope && typeof envelope === 'object') {
        if ('error' in envelope) {
            // Some iOS bridge handlers return a plain error message.
            const error = envelope.error
            throw new PluginSystemError(
                typeof error === 'string'
                    ? { code: PluginErrorCodes.Unknown, message: error }
                    : error,
            )
        }
        if ('result' in envelope) return envelope.result
    }

    throw new PluginSystemError({
        code: 'UNKNOWN',
        message: `Malformed plugin system response: ${String(raw)}`,
    })
}

export async function callPluginSystemMethod<N extends MethodName>(
    name: N,
    args: MethodArgs<N>,
): Promise<MethodResult<N>> {
    return unwrap<MethodResult<N>>(
        await (
            callNativeMethod as (n: N, a: MethodArgs<N>) => Promise<unknown>
        )(name, args),
    )
}

export function callPluginSystemMethodSync<N extends MethodName>(
    name: N,
    args: MethodArgs<N>,
): MethodResult<N> {
    return unwrap<MethodResult<N>>(
        (callNativeMethodSync as (n: N, a: MethodArgs<N>) => unknown)(
            name,
            args,
        ),
    )
}
