import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiBase } from "../apiClient";
import type { IGamesResponse } from "../types";

export const useGameSearch = (searchQuery: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);

  // Debounce search query by 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch games based on debounced query
  const result = useQuery({
    queryKey: ["gameSearch", debouncedQuery],
    queryFn: async () => {
      // Cancel previous request if still pending
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller for this request
      abortControllerRef.current = new AbortController();

      const data: IGamesResponse = await apiBase<IGamesResponse>(
        "games",
        {
          search: debouncedQuery,
          page_size: 10,
        },
        abortControllerRef.current.signal
      );
      return data;
    },
    enabled: debouncedQuery.length > 0, // Only fetch when query is not empty
    staleTime: 1000 * 60, // 1 minute
    refetchOnWindowFocus: false,
  });

  return result;
};
