import { useQuery } from "@tanstack/react-query";
import { apiBase } from "../apiClient";
import type { IPlatformsResponse } from "../types";

export const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: async () => {
      const data: IPlatformsResponse = await apiBase<IPlatformsResponse>(
        "platforms",
        {
          page_size: 40,
        }
      );
      return data.results;
    },
  });
};
