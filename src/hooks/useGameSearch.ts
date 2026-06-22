import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
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

  const result = useInfiniteQuery<
    IGamesResponse,
    Error,
    { pages: IGamesResponse[]; pageParams: number[] },
    readonly ["gameSearch", string],
    number
  >({
    queryKey: ["gameSearch", debouncedQuery] as const,
    queryFn: async ({ pageParam = 1 }) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      const data: IGamesResponse = await apiBase<IGamesResponse>(
        "games",
        {
          search: debouncedQuery,
          page: pageParam,
          page_size: 10,
        },
        abortControllerRef.current.signal
      );
      return data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        return Number(url.searchParams.get("page")) || undefined;
      }
      return undefined;
    },
    initialPageParam: 1,
    enabled: debouncedQuery.length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return { ...result, debouncedQuery };
};
