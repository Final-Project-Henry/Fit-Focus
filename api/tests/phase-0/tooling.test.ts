import { execSync } from 'child_process';
import path from 'path';
import { API_VERSION } from '../../src/version';

const apiRoot = path.resolve(__dirname, '../..');

describe('Phase 0 — TypeScript tooling', () => {
  it('exports a TypeScript module that Jest can import', () => {
    expect(API_VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('passes tsc --noEmit typecheck', () => {
    expect(() => {
      execSync('npx tsc --noEmit', { cwd: apiRoot, stdio: 'pipe' });
    }).not.toThrow();
  });

  it('defines cumulative phase test scripts in package.json', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkg = require('../../package.json') as {
      scripts: Record<string, string>;
    };

    expect(pkg.scripts['test:phase0']).toContain('tests/phase-0');
    expect(pkg.scripts['test:phase1']).toContain('tests/phase-1');
    expect(pkg.scripts['test:phase2']).toContain('tests/phase-2');
    expect(pkg.scripts['test:phase3']).toContain('tests/phase-3');
    expect(pkg.scripts.test).toContain('jest');
  });
});
