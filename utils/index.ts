export const b = (req: any) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req?.headers?.host}` : '';

  return baseUrl;
};

export const basicFetch = async (input: RequestInfo, init?: RequestInit) => {
  return await (await fetch(input, init)).json();
};
