import { beforeEach, describe, expect, it } from 'vitest';
import { authHeaders, getStoredToken } from './http';

describe('http helpers (unit)', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('builds Authorization headers', () => {
    expect(authHeaders('tok-123')).toEqual({
      Authorization: 'Bearer tok-123',
    });
  });

  it('returns null when no session is stored', () => {
    expect(getStoredToken()).toBeNull();
  });

  it('returns null for empty session payload', () => {
    window.localStorage.setItem('Login_userFit_Focus', '[]');
    expect(getStoredToken()).toBeNull();
  });

  it('reads token from localStorage session', () => {
    window.localStorage.setItem(
      'Login_userFit_Focus',
      JSON.stringify({ token: 'abc.def.ghi', time: new Date().toISOString() }),
    );
    expect(getStoredToken()).toBe('abc.def.ghi');
  });

  it('returns null for invalid JSON', () => {
    window.localStorage.setItem('Login_userFit_Focus', '{broken');
    expect(getStoredToken()).toBeNull();
  });
});
