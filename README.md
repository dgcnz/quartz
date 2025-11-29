# Custom setup for Quartz + Obsidian

Extras in this fork:
- Frontmatter support for `authors` (string or array, `[[name]]` unwrapped) and `url`, rendered on content pages.
- `publish` script to sync a reachable subset from your Obsidian vault to `content/` using `wlls` + `rsync`.
  - Dependencies: `wlls`, `yq`, `rsync`
  - Usage: `./publish publish.yaml`
