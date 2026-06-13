import { CIcon } from "@coreui/icons-react";
import { cilStar } from "@coreui/icons";
import { VscHeart } from "react-icons/vsc";
import type { IGame } from "../types";
import { normalizePlatform } from "../helpers/helpers";
import { platformIcons } from "../helpers/icons";

interface CardProps {
  game: IGame;
}

export const Card = ({ game }: CardProps) => {
  const { name, rating, platforms, background_image } = game;
  const imageSrc = background_image ?? "../../assets/react.svg";
  const uniquePlatforms = Array.from(
    new Set(platforms.map((p) => normalizePlatform(p.platform.slug))),
  );

  return (
    <div className="mb-4 rounded-lg bg-zinc-800 overflow-hidden">
      <div className="h-48 w-full">
        <img
          src={imageSrc}
          alt={`Cover image for ${name}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
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
        <div className="flex justify-between">
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
          <VscHeart color="red" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
