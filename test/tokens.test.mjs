import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('design-system tokens: every colour has both themes and a usage note', () => {
  const t = JSON.parse(readFileSync(new URL('../design-system/tokens/tokens.json', import.meta.url)));
  assert.deepEqual(t.color.themes.map((x) => x.id), ['dark', 'light']);
  for (const c of t.color.tokens) {
    assert.ok(c.usage, `${c.name} has a usage note`);
    if (typeof c.value === 'object') assert.ok(c.value.dark && c.value.light, `${c.name} has dark and light`);
  }
  const css = readFileSync(new URL('../design-system/tokens/tokens.css', import.meta.url), 'utf8');
  assert.match(css, /--harmony: #68E78E;/);
  assert.match(css, /\[data-theme="light"\]/);
});
