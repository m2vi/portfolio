import { LanyardResponse } from 'react-use-lanyard/dist';

export const avatarUrl = (discord: LanyardResponse, size: string | number = 512) => {
  return `https://cdn.discordapp.com/avatars/${discord?.data?.discord_user?.id}/${discord?.data?.discord_user?.avatar}.png?size=${size}`;
};
