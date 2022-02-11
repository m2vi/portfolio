import api from '@utils/backend/main';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await (await fetch(`https://api.lanyard.rest/v1/users/${api.config.discord.id}`)).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
