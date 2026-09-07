/**
 * Minimal fetch wrapper. Point VITE_API_BASE_URL at your backend once one
 * exists; until then, VITE_USE_MOCKS=true (see .env.local) is the signal
 * for pages/components to fall back to static content instead of calling
 * out to a network resource — nothing here forces that decision, it's just
 * the flag other parts of the app can check.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}
