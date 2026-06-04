import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const shots = [
  {
    slug: 'github-grid-explorer',
    title: 'GitHub Grid Explorer',
    url: 'https://rho-ricon.github.io/github-grid-explorer-poc/',
  },
  {
    slug: 'grow-heal-love',
    title: 'Grow Heal Love practice explorer',
    url: 'https://rho-ricon.github.io/grow-heal-love-practice-explorer-poc/',
  },
  {
    slug: 'weird-grid-games',
    title: 'Weird Grid Games',
    url: 'https://rho-ricon.github.io/weird-grid-games-poc/',
  },
];

export default async function capture({ page, args }) {
  const outDir = args[0];
  if (!outDir) throw new Error('usage: capture-poc-screenshots.mjs <out-dir>');

  mkdirSync(outDir, { recursive: true });
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });

  for (const shot of shots) {
    console.log(`Opening ${shot.title}: ${shot.url}`);
    await page.goto(shot.url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    try {
      await page.waitForLoadState('networkidle', { timeout: 15000 });
    } catch {
      console.log(`Network did not go idle for ${shot.title}; continuing after bounded wait.`);
    }

    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          scroll-behavior: auto !important;
        }
      `,
    });

    await page.waitForTimeout(3000);
    const path = join(outDir, `${shot.slug}.png`);
    await page.screenshot({ path, fullPage: false });
    console.log(`Saved ${path}`);
  }
}
