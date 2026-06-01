---
title: From Cockpits to Grid Games
description: A field note on how one square-grid interface idea moved from operational dashboards into a tiny kid-friendly game suite.
pubDate: 2026-05-28
draft: true
tags:
  - prototypes
  - interface-design
  - square-grids
  - games
---

One thing we keep learning at Knick Knack Labs: a useful prototype pattern should be easy to move.

If an interface idea only works in the first demo we built for it, maybe it was just a local trick. But if the same idea survives a few domain changes — from developer tooling, to care-practice operations, to a kid-friendly game — then it might be something more durable.

This is a short field note about one of those ideas: dense systems as grids of tiny, stateful squares.

## A cockpit made of squares

The first version was practical. We turned a GitHub organization into an operational cockpit.

Repositories, teams, members, workflow runs, issues, pull requests, releases, and tags all showed up as compact square grids. Color carried status. Hover gave a preview. Click opened a deeper workspace. Dragging a square meant something like “compare this,” “carry this with me,” or “make these two things relate.”

The appeal was not that squares are magical. The appeal was that a messy system became scannable. A person could look across a field of small objects, notice the weird color or the missing marker, and decide where to go next.

That made the grid feel less like decoration and more like a working surface.

## Then the domain changed

Next we tried the same interaction language in a mocked care-practice operations explorer.

The nouns changed: therapists, clients, sessions, recordings, transcripts, notes, tasks, and groups. The stakes felt different too. A repository cockpit wants to surface build status and review queues. A practice cockpit wants to surface attention, follow-up, and context without pretending that a square can contain the whole story.

But the pattern mostly survived the jump.

The grid could still act as a map, a launcher, and a status field. It could still help someone scan a collection before opening the detailed workspace where the real work happens. The surrounding surfaces changed — dossiers, timelines, notes, meters, forms — but the square-grid layer still had a job.

That was interesting. But it was still very “operations cockpit.”

So we asked a smaller and weirder question: could the same square-grid idea become a toy?

## The tiny toy test

We built Weird Grid Games, a tiny kid-friendly puzzle suite:

- 8 Puzzle: a 3×3 sliding puzzle.
- 15 Puzzle: a 4×4 sliding puzzle.
- Checkers: a local two-player board game.

The games use the same basic language as the cockpit prototypes: important objects are squares, their state is visible, and the user learns the system by poking at it.

A valid tile move lights differently from a stuck one. A legal slide makes a little blip. A stuck click makes a small bonk. Drag mode lets a kid ignore the strict puzzle rule and do a bit of “moon magic” by swapping any tile into the blank square.

That last bit matters. The goal was not to make a museum-quality 15 Puzzle. The goal was to see whether a field of squares could become playful quickly.

It did.

## What survived the trip

The square-grid pattern is blunt, but useful:

- It makes collections feel finite and graspable.
- It lets color, shape, and position do early status work.
- It supports direct manipulation: click, drag, compare, carry, sort, swap.
- It gives us a cheap way to mock a domain before over-designing it.
- It can scale down to toys and up to operational dashboards.

The limits are just as important. A grid is not a whole product. Detail views still need richer surfaces: timelines, transcripts, dossiers, forms, meters, long-form text, and whatever else the domain actually requires.

The grid is usually the map, the launcher, the status field, or the toy board. It is not the whole world.

## What we learned, for now

We use prototypes as probes. A good prototype should answer a question, but it should also create better questions.

The GitHub cockpit asked whether a dense developer system could become more scannable. The care-practice explorer asked whether the same shape could carry attention and context in a more human domain. Weird Grid Games asked whether that shape could feel playful instead of merely useful.

The answer was not a grand theory of squares. It was simpler than that: the path from cockpit to toy was short, and the toy still felt like part of the family.

That gives us a few next questions. Could this become an educational toy for pattern copying, number bonds, shape sorting, phonics tiles, or word-building? Could the same lesson feed back into a cleaner KKL website, a better product demo, a richer care-practice intake surface, or a more general square-grid explorer kit?

We do not know yet. For now, this is enough: a reusable pattern moved across three small experiments and kept working.

Knick Knack Labs is a small independent studio trying to make useful things out of prototypes, agents, tools, and weird little interfaces. If that sounds interesting, your attention would mean a lot. Subscribe below and we’ll send occasional stories as we go.

Related prototypes:

- [GitHub Grid Explorer](https://rho-ricon.github.io/github-grid-explorer-poc/)
- [Grow Heal Love practice explorer](https://rho-ricon.github.io/grow-heal-love-practice-explorer-poc/)
- [Weird Grid Games](https://rho-ricon.github.io/weird-grid-games-poc/)

Source: [rho-ricon/weird-grid-games-poc](https://github.com/rho-ricon/weird-grid-games-poc)
