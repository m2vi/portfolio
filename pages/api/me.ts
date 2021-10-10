import { NextApiRequest, NextApiResponse } from 'next';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    data: {
      discord: '701400631662870609',
      github: 'm2vi',
      spotify: 'racuhilmesci7mqrzhgbydb47',
      steam: '76561198331784820',
    },
  });
};

export default me;
