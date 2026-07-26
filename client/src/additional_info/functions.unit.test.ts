import { describe, expect, it } from 'vitest';
import functions from './functions';

describe('additional_info/functions (unit)', () => {
  describe('get_message_IMC', () => {
    it('classifies underweight', () => {
      expect(functions.get_message_IMC(17).nivel).toBe('Bajo Peso');
    });

    it('classifies normal weight', () => {
      expect(functions.get_message_IMC(22).nivel).toBe('Normal');
    });

    it('classifies overweight', () => {
      expect(functions.get_message_IMC(27).nivel).toBe('Sobre peso');
    });

    it('classifies obese', () => {
      expect(functions.get_message_IMC(32).nivel).toBe('Obeso');
    });
  });

  describe('caducaToken', () => {
    it('returns false for a recent session timestamp', () => {
      expect(functions.caducaToken(new Date().toISOString())).toBe(false);
    });

    it('returns true when session is older than 12 hours', () => {
      const old = new Date(Date.now() - 13 * 60 * 60 * 1000).toISOString();
      expect(functions.caducaToken(old)).toBe(true);
    });
  });

  describe('random', () => {
    it('returns three unique comments from the catalog', () => {
      const data = {
        a: { id: 1 },
        b: { id: 2 },
        c: { id: 3 },
        d: { id: 4 },
      };
      const picked = functions.random(data);
      expect(picked).toHaveLength(3);
      const ids = picked.map((item: { id: number }) => item.id);
      expect(new Set(ids).size).toBe(3);
    });
  });
});
