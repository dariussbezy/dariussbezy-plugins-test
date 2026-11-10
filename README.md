# dariussbezy's Plugins (Test)

dariussbezy's Valenced plugins and themes.

## Install

Add this single URL in **Valenced Settings → Plugins → Advanced → Repository URL**:

```text
https://raw.githubusercontent.com/dariussbezy/dariussbezy-plugins-test/main/index.json
```

Choose the plugins you want from the **beta** channel. Existing plugin IDs and versions are preserved. You can remove the old individual repository entries from Valenced after adding this repository; installed plugin settings remain associated with their existing IDs. Restart Discord after updates when requested.

## iOS install diagnostics

Refresh the test repository, then install **Install Check** first. It runs no code beyond an empty startup callback and has no native files or version constraints. Next, try **Quick Translate**. In this test catalog only, Quick Translate keeps its Valenced API requirement but drops its Discord version constraint so you can isolate an install failure. Its features may still be incompatible with the Discord build.

The [Valenced diagnostics branch](https://github.com/dariussbezy/dariussbezy-plugins-test/tree/valenced-ios-diagnostics) preserves plain-text errors returned by the iOS installer. The catalog works with an existing Valenced installation. To see the newly exposed message, test the catalog using an iOS Valenced build made from that branch.

## Plugins and theme

| Name | Description | Source |
| --- | --- | --- |
| [Quick Translate](plugins/QT/README.md) | Translate messages and drafts with Google or DeepL. | [`plugins/QT`](plugins/QT) |
| [Jump to Ping](plugins/JTP/README.md) | Find unread mentions, replies and DMs, then jump straight to the message from the YOUBAR. | [`plugins/JTP`](plugins/JTP) |
| [Show Hidden Channels](plugins/SHC/README.md) | Show hidden channel metadata with lock indicators and an information card. | [`plugins/SHC`](plugins/SHC) |
| [Voice Messages To Text](plugins/VMTT/README.md) | Transcribe voice messages below the audio, with a free server or Groq. | [`plugins/VMTT`](plugins/VMTT) |
| [Midnight Mobile](themes/MT/README.md) | Midnight for Discord mobile: navy panels, blue accents, Figtree and the moon icon. | [`themes/MT`](themes/MT) |

All current versions are **1.0.0-beta**. Only the beta channel is published.

Midnight's colors, Figtree font and moon icon are selected separately under **Valenced Settings → Themes**. Font and icon changes require a restart.

## Credits

Plugin adaptations by dariuss with Codex. Midnight was originally created by [refact0r](https://github.com/refact0r/midnight-discord), with Figtree by Erik Kennedy and the Font Awesome moon icon. Required third-party notices are included with Midnight's assets.

The individual repositories host test builds. [Liquid Glass YOUBAR](https://github.com/dariussbezy/Liquid-Glass-YOUBAR) is developed and tested in its own repository.
