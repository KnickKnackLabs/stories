---
title: From Control Boards to Grid Games
description: A story about how a simple grid of squares learned to stop working and start playing.
pubDate: 2026-06-01
draft: false
author:
  name: rho
  url: https://github.com/rho-ricon
tags:
  - prototypes
  - interface-design
  - square-grids
  - games
---

At Knick Knack Labs, we keep returning to one of our most sophisticated research materials: the square.

Not because squares are new, exactly. They have had a pretty good run. But when you put enough tiny, stateful squares in a grid, they start doing useful work: organizing a messy system, holding important information, and sometimes, under the right conditions, learning to play.

This is a short story about that small design habit: taking a grid of squares and giving it different jobs to do.

## A control board made of squares

The first job was serious. We sketched a GitHub organization as an operational control board in [GitHub Grid Explorer](https://rho-ricon.github.io/github-grid-explorer-poc/) ([source](https://github.com/rho-ricon/github-grid-explorer-poc)).

Software projects collect a lot of noisy things: repositories, teams, members, workflow runs, issues, pull requests, releases, and tags. We tried turning that noise into a field of compact squares. Color carried status. Hover gave a preview. Click opened a deeper workspace. Dragging a square meant something like “compare this,” “carry this with me,” or “make these two things relate.”

The squares were not magic. But they did make a tangled system easier to scan. You could look across a field of small objects, notice the weird color or the missing marker, and decide where to inspect next.

That made the grid feel less like decoration and more like a working surface.

[![GitHub Grid Explorer showing a repository cockpit as colored status squares.](https://stories.knacklabs.co/images/stories/from-cockpits-to-grid-games/github-grid-explorer.png)](https://rho-ricon.github.io/github-grid-explorer-poc/)

## A change of scenery

Next we gave the same interaction language a very different job. We tried it in a mocked care-practice operations explorer, the [Grow Heal Love practice explorer](https://rho-ricon.github.io/grow-heal-love-practice-explorer-poc/) ([source](https://github.com/rho-ricon/grow-heal-love-practice-explorer-poc)).

This was not deployed with a practice, and it did not use real client data. It was a prototype for thinking about shape, attention, and navigation.

The nouns changed: therapists, clients, sessions, recordings, transcripts, notes, tasks, and groups. The screen around the grid changed too. There were dossiers, timelines, notes, meters, and forms. But the square-grid layer still had a job: hold a lot of small pieces in a shape that a person could glance across.

The stakes felt different. A repository control board wants to surface build status and review queues. A practice explorer wants to surface attention and follow-up without pretending that a square can contain the whole story.

Still, the little squares survived the trip.

[![Grow Heal Love practice explorer showing therapists, administrators, clients, sessions, work queues, and groups as stateful square grids.](https://stories.knacklabs.co/images/stories/from-cockpits-to-grid-games/grow-heal-love.png)](https://rho-ricon.github.io/grow-heal-love-practice-explorer-poc/)

That was interesting. But it was still very “operations control board.”

So we asked a smaller and weirder question: could these hard-working squares become a toy?

## The tiny toy test

We built [Weird Grid Games](https://rho-ricon.github.io/weird-grid-games-poc/) ([source](https://github.com/rho-ricon/weird-grid-games-poc)), a tiny kid-friendly puzzle suite:

- 8 Puzzle: a 3×3 sliding puzzle.
- 15 Puzzle: a 4×4 sliding puzzle.
- Checkers: a local two-player board game.

We did not build a giant new video game. We took the same basic language from the control boards — important things are squares, their state is visible, and you learn the system by poking at it — and poured puzzle pieces into it.

A valid move lights differently from a stuck one. A legal slide makes a little blip. A stuck click makes a small bonk. Drag mode lets a kid ignore the strict puzzle rule and do a bit of “moon magic” by swapping any tile into the blank square.

That last bit matters. The goal was not to make a museum-quality 15 Puzzle. The goal was to see whether a serious grid of squares could start feeling playful without much machinery.

In our hands, it did.

[![Weird Grid Games showing the 8 Puzzle board with colorful square tiles and small game controls.](https://stories.knacklabs.co/images/stories/from-cockpits-to-grid-games/weird-grid-games.png)](https://rho-ricon.github.io/weird-grid-games-poc/)

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

The GitHub control board asked whether a dense developer system could become more scannable. The care-practice explorer asked whether the same shape could carry attention and context in a more human domain. Weird Grid Games asked whether that shape could feel playful instead of merely useful.

The answer was not a grand theory of squares. It was simpler than that: the path from control board to toy was short, and the toy still felt like part of the family.

That gives us two next questions. Could this become an educational toy direction: pattern copying, number bonds, shape sorting, phonics tiles, or word-building? Could the same lesson feed back into a tooling direction: a cleaner KKL website, a better product demo, a richer care-practice intake surface, or a more general square-grid explorer kit?

We do not know yet. For now, this is enough: a pattern worth trying again moved across three small experiments and made us want to keep testing it.
