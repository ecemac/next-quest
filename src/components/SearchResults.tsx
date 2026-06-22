import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { IGame } from "../types";

interface SearchResultsProps {
  games: IGame[];
  totalCount: number;
  isLoading: boolean;
  isVisible: boolean;
  hasMore: boolean;
  isFetchingMore: boolean;
  onLoadMore?: () => void;
  onSelectGame?: (game: IGame) => void;
}

export const SearchResults = ({
  games,
  totalCount,
  isLoading,
  isVisible,
  hasMore,
  isFetchingMore,
  onLoadMore,
  onSelectGame,
}: SearchResultsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const handleGameClick = (game: IGame) => {
    if (onSelectGame) {
      onSelectGame(game);
    }
    navigate(`/game/${game.slug}`);
  };

  return (
    <div
      className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-[#333] rounded-md mt-2 max-h-96 overflow-y-auto z-50 shadow-lg"
      onScroll={(event) => {
        const target = event.currentTarget;
        if (!hasMore || isFetchingMore || !onLoadMore) return;

        const threshold = target.scrollHeight - target.clientHeight - 32;
        if (target.scrollTop >= threshold) {
          onLoadMore();
        }
      }}
    >
      {isLoading ? (
        <div className="p-4 text-center text-gray-400">
          <p>Aranıyor...</p>
        </div>
      ) : games.length === 0 ? (
        <div className="p-4 text-center text-gray-400">
          <p>Sonuç bulunamadı</p>
        </div>
      ) : (
        <>
          <div className="px-4 py-3 text-sm font-semibold text-gray-200">
            <h3 className="text-xs font-semibold text-gray-200">
              {totalCount} result(s) found
            </h3>
          </div>
          <ul className="divide-y divide-[#333]">
            {games.map((game) => (
              <li key={game.id}>
                <button
                  onClick={() => handleGameClick(game)}
                  className="w-full text-left px-4 py-3 hover:bg-[#222] transition-colors text-gray-100 focus:outline-none focus:bg-[#222]"
                >
                  <p className="text-sm font-medium">{game.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    ⭐ {game.rating.toFixed(1)}
                  </p>
                </button>
              </li>
            ))}
          </ul>
          {isFetchingMore && (
            <div className="px-4 py-3 text-center text-gray-400">
              <p>Loading more...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
