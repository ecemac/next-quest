import { CIcon } from "@coreui/icons-react";
import { cilStar } from "@coreui/icons";
import { VscHeart } from "react-icons/vsc";
import type { IGame } from "../types";
import { normalizePlatform } from "../helpers/helpers";
import { platformIcons } from "../helpers/icons";

export const Card = (game: IGame) => {
  const uniquePlatforms = Array.from(
    new Set(game.platforms.map((p) => normalizePlatform(p.platform.slug)))
  );

  return (
    <div className="mb-4 rounded-lg bg-zinc-800 overflow-hidden">
      <div className="h-48 w-full">
        <img
          src={game.background_image}
          alt={game.slug}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h4 className="mb-4">{game.name}</h4>
        <div className="flex items-center space-x-3 mb-4">
          {uniquePlatforms.map((p) => platformIcons[p])}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <CIcon
              icon={cilStar}
              width={16}
              height={16}
              className="fill-current text-yellow-300"
            />
            <span className="text-xs">{game.rating}</span>
          </div>
          <VscHeart color="red" />
        </div>
      </div>
    </div>
  );
};
