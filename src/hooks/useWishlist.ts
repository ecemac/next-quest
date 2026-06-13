import { useCallback, useMemo } from "react";
import type { IGame } from "../types";
import { useLocalStorage } from "./useLocalStorage";

const STORAGE_KEY = "next-quest-wishlist";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useLocalStorage<IGame[]>(STORAGE_KEY, []);

  const wishlistIds = useMemo(
    () => new Set(wishlist.map((game) => game.id)),
    [wishlist],
  );

  const isInWishlist = useCallback(
    (id: number) => wishlistIds.has(id),
    [wishlistIds],
  );

  const toggleWishlist = useCallback(
    (game: IGame) => {
      setWishlist((currentWishlist) => {
        const alreadyAdded = currentWishlist.some((item) => item.id === game.id);
        if (alreadyAdded) {
          return currentWishlist.filter((item) => item.id !== game.id);
        }
        return [...currentWishlist, game];
      });
    },
    [setWishlist],
  );

  return { wishlist, isInWishlist, toggleWishlist };
};
