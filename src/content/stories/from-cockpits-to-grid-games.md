---
title: From Cockpits to Grid Games
description: How a square-grid UI pattern moved from operational dashboards into a tiny kid-friendly game suite.
pubDate: 2026-05-28
draft: true
tags:
  - prototypes
  - interface-design
  - square-grids
  - games
---

We have been playing with a small UI idea at Knick Knack Labs: what if dense systems could be explored as grids of tiny, stateful squares?

The first version was practical. A GitHub organization became a cockpit: repositories, teams, members, workflow runs, issues, pull requests, releases, and tags all showed up as compact square grids. Color carried status. Hover gave a preview. Click opened a deeper workspace. Dragging a square meant “compare this” or “carry this with me.”

Then we tried the same interaction language in a very different domain: a mocked group-practice operations explorer. Therapists, clients, sessions, recordings, transcripts, notes, tasks, and groups became square-grid collections. The UI pattern mostly survived the domain jump. The details changed, but the feeling did not: scan a field of squares, notice an odd color or marker, open the thing, act or compare.

That was interesting. But it was still very “operations cockpit.”

So we asked a smaller and weirder question: can the same square-grid idea become a toy?

## The tiny experiment

We built Weird Grid Games, a tiny kid-friendly puzzle suite:

- 8 Puzzle: a 3×3 sliding puzzle.
- 15 Puzzle: a 4×4 sliding puzzle.
- Checkers: a local two-player board game.

The puzzles use the same core interaction as the cockpit prototypes: the important objects are squares, their state is visible, and the user learns the system by poking at it. A valid tile lights differently from a stuck tile. A stuck click makes a small “bonk.” A legal slide makes a little blip. Drag mode lets a kid ignore the strict puzzle rule and do moon magic by swapping any tile into the blank square.

That last bit is important. The goal was not to make a perfect museum-quality 15 Puzzle. The goal was to see whether a grid of squares could feel playful quickly.

It did.

## Why this pattern keeps coming back

Square grids are blunt, but useful:

- They make collections feel finite and graspable.
- They let color and shape do early status work.
- They support direct manipulation: click, drag, compare, carry, sort, swap.
- They make it easy to mock a domain before over-designing it.
- They scale down to toys and up to operational dashboards.

The pattern also has limits. Detail views still need more expressive surfaces: dossiers, timelines, meters, transcripts, forms, and long-form text. The square grid is not the whole product. It is the map, the launcher, the status field, the toy board.

## What we learned

A reusable interaction pattern is most interesting when it crosses domains.

If it only works for GitHub, it is a GitHub UI. If it also works for care-practice operations, it might be a product primitive. If it also works for a kid’s sliding puzzle, it might be a small interaction language.

That does not mean every app should be made of squares. It means a good prototype pattern should be cheap to move. When the pattern moves, you learn which parts were real and which parts were domain-specific decoration.

For us, the real parts seem to be:

- dense collections as small stateful objects,
- immediate previews or feedback,
- full-screen/detail workspaces when a square is selected,
- drag as a low-ceremony way to express intent,
- playful styling that makes exploration feel safe.

## Where this might go

Weird Grid Games is intentionally small. It is not a product yet. It is a question with a URL.

Next experiments could be more educational:

- pattern copying,
- number bonds,
- shape sorting,
- phonics tiles,
- word-building,
- little two-player logic games.

Or we might take the lesson back into more serious software: a cleaner KKL website, a better product demo, a richer care-practice intake surface, or a more general square-grid explorer kit.

For now, the useful thing is that the path from cockpit to toy was short. That is a sign we may have found a durable little UI idea.

Live prototype: [Weird Grid Games](https://rho-ricon.github.io/weird-grid-games-poc/)

Source: [rho-ricon/weird-grid-games-poc](https://github.com/rho-ricon/weird-grid-games-poc)
