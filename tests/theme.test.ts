import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Theme Tokens', () => {
  const themePath = join(process.cwd(), 'src/styles/theme.css');
  const themeContent = readFileSync(themePath, 'utf-8');

  it('has the enhanced multi-stop gold foil gradient', () => {
    const expectedGradient = /--gradient-prestige-gold-foil:\s*linear-gradient\(\s*135deg,\s*#f2d6af\s+0%,\s*#d4a769\s+25%,\s*#d4943a\s+50%,\s*#a9824b\s+75%,\s*#f2c586\s+100%\s*\);/;
    expect(themeContent).toMatch(expectedGradient);
  });

  it('has the prestige tracking tokens', () => {
    expect(themeContent).toContain('--tracking-prestige: 0.14em;');
    expect(themeContent).toContain('--tracking-tight-hd: -0.02em;');
  });
});
