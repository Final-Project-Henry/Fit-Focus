import axios from 'axios';

export const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getStoredToken(): string | null {
  try {
    const raw = window.localStorage.getItem('Login_userFit_Focus');
    if (!raw || raw.length <= 3) return null;
    const parsed = JSON.parse(raw) as { token?: string };
    return parsed.token ?? null;
  } catch {
    return null;
  }
}

http.interceptors.request.use((config) => {
  const token = getStoredToken();
  if (token && !config.headers?.Authorization) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
