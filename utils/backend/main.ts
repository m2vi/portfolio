import { ConfigProps } from '@utils/types';
import configJson from '@data/config.json';

class Api {
  get config(): ConfigProps {
    return configJson as any;
  }
}

export const api = new Api();
export default api;
