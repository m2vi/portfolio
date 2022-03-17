import { b } from '.';

export const avatarUrl = (req: any, discord: any, size: string | number = 512) => {
  return `${b(req)}/_next/image?url=${encodeURIComponent(
    `https://cdn.discordapp.com/avatars/${discord?.data?.discord_user?.id}/${discord?.data?.discord_user?.avatar}.png?size=512`
  )}&w=${size}&q=70`;
};
