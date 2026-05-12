import { describe, expect, it } from 'vitest';
import { evaluatePublicCopyText } from '../scripts/agco-evidence-gate.mjs';
import { buildLlmsTxtProposed } from '../src/workflows/geo-optimizer';

describe('GEO optimizer LLM summary generation', () => {
  it('keeps regenerated llms.txt in the no-proof public-web compliance posture', () => {
    const content = buildLlmsTxtProposed('https://247ibet.ca', '2026-05-12T00:00:00.000Z');

    expect(content).toContain('Canadian iGaming Public Web Guide');
    expect(content).toContain('separate gaming platform');
    expect(content).toContain('No-documentary-proof public-web mode');
    expect(content).toContain('verify operator status against official regulator sources');
    expect(content).not.toMatch(/AGCO Registry Verified|Verified Interac|payout benchmarks/i);
    expect(evaluatePublicCopyText(content, 'static/llms.txt')).toEqual([]);
  });
});
