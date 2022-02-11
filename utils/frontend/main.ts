class Api {
  adaptActivity(discord: any) {
    const defaultActivity = (discord?.activities as any[])?.filter((a) => a.type === 0)?.[0];

    if (discord?.spotify) {
      return {
        image: discord?.spotify?.album_art_url,
        name: discord?.spotify?.song,
        details: discord?.spotify?.artist,
      };
    } else if (defaultActivity) {
      return {
        image: `https://cdn.discordapp.com/app-assets/${defaultActivity?.application_id}/${defaultActivity?.assets?.large_image}.png`,
        name: defaultActivity?.name,
        details: defaultActivity?.details,
      };
    } else {
      return null;
    }
  }
}

export const api = new Api();
export default api;
