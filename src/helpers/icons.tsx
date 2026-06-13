import type { JSX } from "react";
import { CIcon } from "@coreui/icons-react";
import { cibWindows, cibXbox, cilVideogame } from "@coreui/icons";
import {
  SiAtari,
  SiCommodore,
  SiNintendoswitch,
  SiNintendo3Ds,
  SiAndroid,
  SiLinux,
  SiPlaystation5,
  SiPlaystation4,
  SiPlaystation3,
  SiPlaystation2,
  SiPlaystation,
  SiPlaystationportable,
  SiPlaystationvita,
  SiApple,
  SiWii,
  SiWiiu,
  SiNintendogamecube,
  SiNintendo,
} from "react-icons/si";

export const platformIcons: Record<string, JSX.Element> = {
  pc: (
    <CIcon
      icon={cibWindows}
      width={16}
      height={16}
      className="fill-current text-white"
    />
  ),
  playstation5: <SiPlaystation5 size={24} />,
  playstation4: <SiPlaystation4 size={24} />,
  playstation3: <SiPlaystation3 size={24} />,
  playstation2: <SiPlaystation2 size={24} />,
  playstation1: <SiPlaystation size={24} />,
  psp: <SiPlaystationportable size={24} />,
  "ps-vita": <SiPlaystationvita size={24} />,
  xbox: (
    <CIcon
      icon={cibXbox}
      width={16}
      height={16}
      className="fill-current text-white"
    />
  ),
  "nintendo-switch": <SiNintendoswitch size={16} />,
  "nintendo-ds": <SiNintendo3Ds size={16} />,
  wii: <SiWii size={16} />,
  "wii-u": <SiWiiu size={16} />,
  gamecube: <SiNintendogamecube size={16} />,
  nintendo: <SiNintendo size={16} />,
  ios: <SiApple size={16} />,
  android: <SiAndroid size={16} />,
  linux: <SiLinux size={16} />,
  atari: <SiAtari size={16} />,
  "commodore-amiga": <SiCommodore size={16} />,
  "gameboy-nes": (
    <CIcon
      icon={cilVideogame}
      width={16}
      height={16}
      className="fill-current text-white"
    />
  ),
};
