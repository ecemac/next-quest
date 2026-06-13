import { useCallback, useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const readValue = <T>(key: string, initialValue: T): T => {
  if (!isBrowser) return initialValue;

  try {
    const storedItem = window.localStorage.getItem(key);
    return storedItem ? (JSON.parse(storedItem) as T) : initialValue;
  } catch {
    return initialValue;
  }
};

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => readValue(key, initialValue));

  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        if (isBrowser) {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch {
        // Ignore write errors for localStorage.
      }
    },
    [key, storedValue],
  );

  useEffect(() => {
    setStoredValue(readValue(key, initialValue));
  }, [key, initialValue]);

  useEffect(() => {
    if (!isBrowser) return;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== key) return;
      if (event.newValue === null) {
        setStoredValue(initialValue);
      } else {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch {
          setStoredValue(initialValue);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [initialValue, key]);

  return [storedValue, setValue] as const;
};
