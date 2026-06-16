import { useNavigate } from "react-router-dom";
import type { IGame } from "../types";

interface SearchResultsProps {
  games: IGame[];
  isLoading: boolean;
  isVisible: boolean;
  onSelectGame?: (game: IGame) => void;
}

export const SearchResults = ({
  games,
  isLoading,
  isVisible,
  onSelectGame,
}: SearchResultsProps) => {
  const navigate = useNavigate();

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
    <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-[#333] rounded-md mt-2 max-h-96 overflow-y-auto z-50 shadow-lg">
      {isLoading ? (
        <div className="p-4 text-center text-gray-400">
          <p>Aranıyor...</p>
        </div>
      ) : games.length === 0 ? (
        <div className="p-4 text-center text-gray-400">
          <p>Sonuç bulunamadı</p>
        </div>
      ) : (
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
      )}
    </div>
  );
};
