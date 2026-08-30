# Contributing

Bug fixes and focused improvements are welcome. Before starting a larger
change, open an issue so the approach can be discussed.

## Guidelines

- Keep each commit focused. Split unrelated changes.
- Review the [design goals](./design-goals.md).
- Follow the [Contributor Covenant](https://www.contributor-covenant.org/).
- If you use a coding agent, have it read [AGENTS.md](../AGENTS.md) and give it
  a focused task.

## Set up the project

With [nvm](https://github.com/nvm-sh/nvm) installed:

```bash
nvm install
npm ci
```

The version in `.nvmrc` is used for development and deployment. Other version
managers can use any release accepted by `engines.node` in `package.json`.

This repository uses a single `main` branch. Use a
[Conventional Commit](https://www.conventionalcommits.org/) prefix such as
`feat:`, `fix:`, `refactor:`, `docs:`, or `chore:` so the history stays clear.

## Validate the change

The deployment gate builds the real static export and validates its generated
routes, links, metadata, and assets. Run the same checks locally with:

```bash
npm run format
npm run og:check
npm run build
npm run verify-export
```

`npm run verify-export` reads the files produced by `npm run build`, so keep
that order. `npm run lint` and `npm run type-check` remain available for focused
code work, but they do not block publishing.

## Review and publish

Before pushing `main`, inspect the complete diff and confirm any validation
results reported by a coding agent. Remove unrelated formatting changes,
debugging code, stale comments, and unused files.
