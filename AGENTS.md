# AGENTS.md

## Purpose
This file tells AI coding agents exactly what to update when bumping the extension version.

## When A Version Bump Is Required
Do a version bump whenever code changes are intended for a new release.
Use SemVer for `package.json`:
- patch: bugfix or internal behavior adjustment (x.y.Z)
- minor: backward-compatible feature (x.Y.z)
- major: breaking change (X.y.z)

## Required Files To Update
1. `package.json`
- Update the `version` field.
- This is the source of truth for extension release version.

2. `README.md`
- Update the version badge URL text, e.g. `version-1.9.53-blue`.
- Keep it in sync with `package.json`.

3. `CHANGELOG.md`
- Add a new top section for the new version.
- Format: `## [<version>] - <YYYY-MM-DD>`.
- Add short release notes (zh/en style used by this repository).

## Do Not Change For Extension Version Bumps
- `data/mod-info.json` version fields: these are game/mod data versions, not VS Code extension release version.

## Verification Checklist (Run Before Commit)
1. Confirm version consistency:
   - `package.json` version equals README badge version
   - `CHANGELOG.md` has a new top entry for that same version
2. Suggested check command:
   - `grep -n "1\\.9\\.[0-9]+" package.json README.md CHANGELOG.md`
3. Build check:
   - `bun run build`

## Commit Guidance
Use a clear commit message such as:
- `chore(release): bump version to <version>`

If code changes and version bump are both included, prefer:
- `fix(format): ...`
- `chore(release): bump version to <version>`
