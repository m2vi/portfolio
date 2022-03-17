export const basicFetch = async (url: string) => {
  return await (await fetch(url)).json();
};
