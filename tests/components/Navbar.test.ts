/** @vitest-environment jsdom */
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { page } from '$app/state';
import Navbar from '../../src/lib/components/Navbar.svelte';

function setPathname(p: string) {
  // SvelteKit's typed-routes layer narrows URL.pathname to a route literal union;
  // the test stub uses a loose URL on purpose.
  (page as { url: URL }).url = new URL(`http://localhost${p}`);
}

describe('Navbar', () => {
  it('smoke: renders the brand logo and all 6 main-nav links', () => {
    setPathname('/');
    const { container } = render(Navbar);

    const logo = container.querySelector('img[alt$="Logo"]');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('src')).toContain('/images/brand/logo.png');

    const expectedLabels = ['Casino', 'Sportsbook', 'Interac Payouts', 'Bonuses', 'Safety', 'FAQ'];
    for (const label of expectedLabels) {
      const matchingLink = Array.from(container.querySelectorAll('a')).find(
        (a) => a.textContent?.trim() === label
      );
      expect(matchingLink, `expected nav link "${label}" to be in the document`).toBeTruthy();
    }
  });

  it('active-link: pathname=/casino marks casino link as aria-current and not sportsbook', () => {
    setPathname('/casino');
    const { container } = render(Navbar);

    const casinoLink = container.querySelector('a[href="/casino"]');
    const sportsbookLink = container.querySelector('a[href="/sportsbook"]');

    expect(casinoLink?.getAttribute('aria-current')).toBe('page');
    expect(sportsbookLink?.getAttribute('aria-current')).toBeNull();
  });

  it('active-link: pathname=/sportsbook marks sportsbook link as aria-current and not casino', () => {
    setPathname('/sportsbook');
    const { container } = render(Navbar);

    const casinoLink = container.querySelector('a[href="/casino"]');
    const sportsbookLink = container.querySelector('a[href="/sportsbook"]');

    expect(sportsbookLink?.getAttribute('aria-current')).toBe('page');
    expect(casinoLink?.getAttribute('aria-current')).toBeNull();
  });
});
