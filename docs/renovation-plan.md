# Renovation plan

Next-session plan for turning the first-pass KKL Stories scaffold into a small, maintainable public codebase.

## Why renovate now

The site has crossed from prototype to public surface:

- `stories.knacklabs.co` is configured as the canonical site URL.
- GitHub Pages deploy is wired through Actions.
- The homepage has the first square-grid visual language and a playable tic-tac-toe hero grid.
- The first story draft and Buttondown placeholder exist.

The next pass should harden conventions before adding more content or mailing-list behavior.

## Fold guidance read before this plan

- `fold/notes/creating-a-codebase.md` — plan before hardening, adapt existing art, declare dependencies, test what matters.
- `fold/notes/mise-conventions.md` and `fold/notes/mise-gotchas.md` — prefer `mise.toml`, intentional pins/settings, avoid ambient-agent env traps.
- `fold/notes/github-actions-ci.md` — workflows should be lintable and self-contained; prefer Node 24-compatible Actions where available.
- `fold/notes/readme-writing.md` — lead with what is interesting, state facts, avoid generic README boilerplate.
- `fold/notes/bats-tool-testing.md` and `fold/notes/bash-macos-compat.md` — relevant if we add shell tasks or tests during renovation.

## Current state

- Framework: Astro + Sass + Bun.
- Content: Astro content collection under `src/content/stories`.
- CI: `.github/workflows/check.yml` runs `bun install --frozen-lockfile` and `bun run check`.
- Deploy: `.github/workflows/deploy.yml` builds `dist` and deploys to GitHub Pages.
- Domain: `public/CNAME` contains `stories.knacklabs.co`; DNS still needs/needed a Porkbun CNAME to `knickknacklabs.github.io`.
- Mailing list: `src/components/SubscribeForm.astro` is intentionally disabled until Buttondown is configured.

## Renovation goals

1. **Make the repo self-explanatory.** README should describe the public site, development flow, deploy flow, content workflow, and why the hero grid is playful.
2. **Harden CI/deploy.** Remove avoidable duplication, make workflows lintable, address GitHub's Node 20 action warnings where feasible, and verify Pages/HTTPS state after DNS is live.
3. **Clarify project conventions.** Decide whether this Astro site should stay package-script-first or add thin mise tasks for `check`, `dev`, and `deploy` diagnostics.
4. **Add lightweight smoke coverage.** At minimum, document and/or script the visual smoke path used here: build, local serve, screenshot key widths. Consider a proper Playwright smoke test only if it stays low-maintenance.
5. **Prepare Buttondown integration.** Turn the existing placeholder into a concrete decision packet: needed account/list facts, form action, domain/sender setup, privacy copy, and future API-sync option.
6. **Keep content workflow polished.** Draft/published states should be clear, and story metadata/schema should support the next few stories without overbuilding.

## Suggested next-session order

1. **Orient.** Read this plan, `README.md`, `docs/buttondown.md`, `docs/editorial.md`, `src/content.config.ts`, both workflows, and the latest GitHub Pages state.
2. **Verify live deploy.** Check GitHub Pages config, DNS/HTTPS state, and load `https://stories.knacklabs.co` once DNS resolves. If DNS is not live yet, keep verification explicitly degraded.
3. **Renovate README.** Rewrite it around the actual public surface instead of first-pass scaffold notes.
4. **Renovate workflow/config.** Review `mise.toml`, package scripts, and Actions versions. Add only small conventions that pay for themselves.
5. **Add a reproducible smoke path.** Prefer file-first scripts. If adding Playwright, keep it targeted to homepage render + hero grid presence at a few widths.
6. **Run checks and commit.** Use `bun run check`, any added smoke check, `git pre-commit`, `git pre-push`, then push and watch Actions.
7. **Then discuss Buttondown.** Start from `docs/buttondown.md`; do not wire a real form until list/action/domain facts are known.

## Non-goals for the renovation pass

- Do not turn this into a full KKL marketing site yet.
- Do not build Buttondown API sync before the manual form/send path exists.
- Do not over-test the tic-tac-toe minimax unless we extract it into a module; build/smoke is enough while it remains a tiny hero affordance.
- Do not migrate away from GitHub Pages during the renovation pass. Cloudflare Pages, Workers, analytics, or Fly.io can stay a later infrastructure discussion.

## First command next session

```bash
cd /Users/rikonor/agents/rho/stories
git status --short --branch
git log --oneline -5
bun run check 2>&1 | tee /tmp/stories-next-check.log | tail -40
```
