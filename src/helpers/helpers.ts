export const normalizePlatform = (slug: string): string => {
  if (slug.includes("xbox")) return "xbox";
  if (slug.includes("ds")) return "nintendo-ds";
  if (slug.includes("-64")) return "nintendo";
  if (slug.includes("atari")) return "atari";
  if (slug.includes("os") || slug.includes("apple")) return "ios";
  if (slug.includes("game-boy") || slug.includes("nes")) return "gameboy-nes";
  return slug;
};