import { CIcon } from "@coreui/icons-react";
import { cilStar } from "@coreui/icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import type { IGame } from "../types";
import { normalizePlatform } from "../helpers/helpers";
import { platformIcons } from "../helpers/icons";

interface CardProps {
  game: IGame;
  isWishlisted?: boolean;
  onToggleWishlist?: (game: IGame) => void;
}

export const Card = ({ game, isWishlisted = false, onToggleWishlist }: CardProps) => {
  const { name, rating, platforms, background_image } = game;
  const imageSrc = background_image ?? "../../assets/react.svg";
  const uniquePlatforms = Array.from(
    new Set(platforms.map((p) => normalizePlatform(p.platform.slug))),
  );

  const buttonLabel = isWishlisted ? "Remove from wishlist" : "Add to wishlist";

  return (
    <div className="mb-4 rounded-lg bg-zinc-800 overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full">
        <img
          src={imageSrc}
          alt={`Cover image for ${name}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h4 className="mb-4">{name}</h4>
        <div className="flex items-center space-x-3 mb-4">
          {uniquePlatforms.map((platform) => {
            const icon = platformIcons[platform];
            return icon ? (
              <span key={platform} className="inline-flex" aria-hidden="true">
                {icon}
              </span>
            ) : null;
          })}
        </div>
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="flex items-center space-x-2">
            <CIcon
              icon={cilStar}
              width={16}
              height={16}
              className="fill-current text-yellow-300"
              aria-hidden="true"
            />
            <span className="text-xs">{rating}</span>
          </div>
          {onToggleWishlist ? (
            <button
              type="button"
              className={isWishlisted ? "text-red-500" : "text-red-400"}
              onClick={() => onToggleWishlist(game)}
              aria-pressed={isWishlisted}
              aria-label={buttonLabel}
            >
              {isWishlisted ? (
                <AiFillHeart aria-hidden="true" size={20} />
              ) : (
                <AiOutlineHeart aria-hidden="true" size={20} />
              )}
            </button>
          ) : isWishlisted ? (
            <AiFillHeart className="text-red-500" aria-hidden="true" size={20} />
          ) : (
            <AiOutlineHeart className="text-red-400" aria-hidden="true" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};
