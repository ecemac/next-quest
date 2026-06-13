const API_BASE = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function apiBase<T>(endpoint: string, params?: Record<string, string | number | undefined>): Promise<T> {
  const query = new URLSearchParams({ key: API_KEY});
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== "") query.append(k, String(v));
  });
  const res = await fetch(`${API_BASE}${endpoint}?${query.toString()}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}