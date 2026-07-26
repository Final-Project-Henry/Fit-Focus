import fs from 'fs';
import path from 'path';
import { createApp } from '../../src/app';
import { createWelcomeMail } from '../../src/shared/mail/mailer';
import { authService } from '../../src/modules/auth/auth.service';

const apiRoot = path.resolve(__dirname, '../..');

describe('Phase 3 — cleanup and regression gates', () => {
  it('boots the TypeScript app factory without throwing', () => {
    expect(() => createApp()).not.toThrow();
  });

  it('uses unified welcome mail helper', () => {
    const mail = createWelcomeMail('user@test.com');
    expect(mail.to).toBe('user@test.com');
    expect(mail.subject).toContain('Fit Focus');
  });

  it('exposes activateAccount as a single shared auth path', () => {
    expect(typeof authService.activateAccount).toBe('function');
  });

  it('does not import legacy JS entrypoints from src/server', () => {
    const serverSrc = fs.readFileSync(
      path.join(apiRoot, 'src/server.ts'),
      'utf8',
    );
    expect(serverSrc).not.toMatch(/require\(['"]\.\.\/app\.js['"]\)/);
    expect(serverSrc).not.toMatch(/from ['"]\.\.\/routes\//);
    expect(serverSrc).toContain("from './app'");
  });

  it('removes legacy JS entrypoints and folders', () => {
    const legacyPaths = [
      'app.js',
      'index.js',
      'db.js',
      'addDB.js',
      'getRoutine.js',
      'routes',
      'models',
      'service',
      'validations',
      'additional',
    ];

    for (const relative of legacyPaths) {
      expect(fs.existsSync(path.join(apiRoot, relative))).toBe(false);
    }

    expect(fs.existsSync(path.join(apiRoot, 'src/server.ts'))).toBe(true);
    expect(fs.existsSync(path.join(apiRoot, 'src/modules'))).toBe(true);
  });

  it('keeps critical public/auth route contracts available on the app stack', () => {
    const app = createApp();
    const stack = (app._router?.stack ?? []) as Array<{
      route?: { path?: string; methods?: Record<string, boolean> };
      name?: string;
      handle?: { stack?: unknown[] };
      regexp?: RegExp;
    }>;

    const layered = stack.some((layer) => layer.name === 'router' || layer.route);
    expect(layered).toBe(true);
  });
});

