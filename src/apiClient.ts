const API_BASE = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_BASE || !API_KEY) {
  throw new Error(
    "Missing required environment variables: VITE_API_BASE_URL and VITE_API_KEY must be defined."
  );
}

export async function apiBase<T>(
  endpoint: string,
  params?: Record<string, string | number | undefined>,
  signal?: AbortSignal
): Promise<T> {
  const query = new URLSearchParams({ key: API_KEY });
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== "") query.append(k, String(v));
  });

  const response = await fetch(`${API_BASE}${endpoint}?${query.toString()}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }

  return response.json();
}