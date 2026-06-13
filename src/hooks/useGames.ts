import { useInfiniteQuery } from "@tanstack/react-query";
import { apiBase } from "../apiClient";
import type { IGamesResponse, IGamesQuery } from "../types";

export const useGames = (query?: Omit<IGamesQuery, "page">) => {
  return useInfiniteQuery({
    queryKey: [
      "games",
      query,
    ],
    queryFn: async ({pageParam = 1}) => {
      const data: IGamesResponse = await apiBase<IGamesResponse>("games", {
        ...query,
        page: pageParam,
        page_size: 10,
      });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) return allPages.length + 1;
      return undefined;
    },
    initialPageParam: 1,
  });
};
