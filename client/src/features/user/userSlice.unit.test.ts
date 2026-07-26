import { describe, expect, it } from 'vitest';
import reducer, {
  DelateDetail,
  Error,
  Estado,
  Exercises,
  Response,
  Rutines,
  Status,
  sigendOut,
} from './userSlice';

const initial = reducer(undefined, { type: 'unknown' });

describe('userSlice reducers (unit)', () => {
  it('has a sane initial state', () => {
    expect(initial.status).toBe('none');
    expect(initial.user).toBeNull();
    expect(initial.exercises).toEqual([]);
  });

  it('handles Status / Estado / Response / Error', () => {
    let state = reducer(initial, Status('loading'));
    expect(state.status).toBe('loading');

    state = reducer(state, Estado('Activar'));
    expect(state.EstadoCuenta).toBe('Activar');

    state = reducer(state, Response());
    expect(state.response).toBe('none');

    state = reducer({ ...state, error: 'boom' }, Error());
    expect(state.error).toBe('');
  });

  it('stores routines and exercises', () => {
    const routine = { difficulty: 'easy', exercises: [] };
    let state = reducer(initial, Rutines(routine));
    expect(state.rutines).toEqual(routine);

    state = reducer(state, Exercises([{ name: 'Push Up' }] as never));
    expect(state.exercises).toHaveLength(1);
  });

  it('clears session on sigendOut', () => {
    const withUser = {
      ...initial,
      user: { email: 'a@b.com' },
      userToken: 'token',
    };
    const state = reducer(withUser, sigendOut(null));
    expect(state.user).toBeNull();
    expect(state.userToken).toBeNull();
  });

  it('clears exercise detail', () => {
    const withDetail = { ...initial, detailEjec: { id: '1' } };
    const state = reducer(withDetail, DelateDetail());
    expect(state.detailEjec).toBeUndefined();
  });
});

