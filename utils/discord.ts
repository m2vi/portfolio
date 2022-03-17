export const avatarUrl = (req: any, discord: any, size: string | number = 512) => {
  return `https://cdn.discordapp.com/avatars/${discord?.data?.discord_user?.id}/${discord?.data?.discord_user?.avatar}.png?size=512`;
};
