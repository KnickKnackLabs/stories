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

One thing we keep testing at Knick Knack Labs: when an interface idea seems useful, can it move?

If an idea only works in the first demo we built for it, maybe it was just a local trick. If it keeps helping us think in a few different settings — developer tooling, care-practice operations, and a kid-friendly game — then it may be worth another look.

This is a short field note about one of those ideas: dense systems as grids of tiny, stateful squares.

## A cockpit made of squares

The first version was practical. We sketched a GitHub organization as an operational cockpit.

Repositories, teams, members, workflow runs, issues, pull requests, releases, and tags all showed up as compact square grids. Color carried status. Hover gave a preview. Click opened a deeper workspace. Dragging a square meant something like “compare this,” “carry this with me,” or “make these two things relate.”

The appeal was not that squares are magical. In our own use, the appeal was that a messy system became easier to scan: we could look across a field of small objects, notice the weird color or the missing marker, and decide where to inspect next.

That made the grid feel less like decoration and more like a working surface.

## Then the domain changed

Next we tried the same interaction language in a mocked care-practice operations explorer.

The nouns changed: therapists, clients, sessions, recordings, transcripts, notes, tasks, and groups. This was not deployed with a practice, and it did not use real client data; it was a prototype for thinking about shape, attention, and navigation.

The stakes still felt different. A repository cockpit wants to surface build status and review queues. A practice cockpit wants to surface attention, follow-up, and context without pretending that a square can contain the whole story.

But the grid still helped us think. The surrounding surfaces changed — dossiers, timelines, notes, meters, forms — but the square-grid layer still had a job.

That was interesting. But it was still very “operations cockpit.”

So we asked a smaller and weirder question: could the same square-grid idea become a toy?

## The tiny toy test

We built Weird Grid Games, a tiny kid-friendly puzzle suite:

- 8 Puzzle: a 3×3 sliding puzzle.
- 15 Puzzle: a 4×4 sliding puzzle.
- Checkers: a local two-player board game.

The games use the same basic language as the cockpit prototypes: important objects are squares, their state is visible, and the user learns the system by poking at it.

A valid tile move lights differently from a stuck one. A legal slide makes a little blip. A stuck click makes a small bonk. Drag mode lets a kid ignore the strict puzzle rule and do a bit of “moon magic” by swapping any tile into the blank square.

That last bit matters. The goal was not to make a museum-quality 15 Puzzle. The goal was to see whether a field of squares could start feeling playful without much machinery.

In our hands, it did.

## What survived the trip

The square-grid pattern is blunt, but useful:

- It can make some collections feel finite and graspable.
- It gives color, shape, and position a place to do early status work.
- It invites direct manipulation: click, drag, compare, carry, sort, swap.
- It gives us a low-cost way to mock a domain before over-designing it.
- So far, it has shown up in both toy-sized and operations-sized sketches.

The limits are just as important. A grid is not a whole product. It is usually the map, the launcher, the status field, or the toy board. Detail views still need richer surfaces: timelines, transcripts, dossiers, forms, meters, long-form text, and whatever else the domain actually requires.

## What we learned, for now

We use prototypes as probes. A good prototype should answer a question, but it should also create better questions.

The GitHub cockpit asked whether a dense developer system could become more scannable. The care-practice explorer asked whether the same shape could carry attention and context in a more human domain. Weird Grid Games asked whether that shape could feel playful instead of merely useful.

The answer was not a grand theory of squares. It was simpler than that: the path from cockpit to toy was short, and the toy still felt like part of the family.

That gives us two next questions. Could this become an educational toy direction: pattern copying, number bonds, shape sorting, phonics tiles, or word-building? Could the same lesson feed back into a tooling direction: a cleaner KKL website, a better product demo, a richer care-practice intake surface, or a more general square-grid explorer kit?

We do not know yet. For now, this is enough: a pattern worth trying again moved across three small experiments and made us want to keep testing it.

Knick Knack Labs is a small independent studio making useful things out of prototypes, agents, tools, and weird little interfaces. If you want to follow along while the work is still forming, subscribe below; we’ll send occasional stories as we go.

Related prototypes:

- [GitHub Grid Explorer](https://rho-ricon.github.io/github-grid-explorer-poc/)
- [Grow Heal Love practice explorer](https://rho-ricon.github.io/grow-heal-love-practice-explorer-poc/)
- [Weird Grid Games](https://rho-ricon.github.io/weird-grid-games-poc/)

Source: [rho-ricon/weird-grid-games-poc](https://github.com/rho-ricon/weird-grid-games-poc)
