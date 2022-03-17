import { LanyardData, LanyardResponse } from 'react-use-lanyard';

export interface ConfigProps {
  [service: string]: {
    url: string;
    id: string;
    icon: string;
  };
}

export interface DataProps {
  config: ConfigProps;
  lanyard: LanyardResponse | null;
}

export type DataContextType = {
  data: DataProps;
  update: (overwrite: Partial<DataProps>) => void;
};

export type Children = {
  children: React.ReactNode;
};

export interface LanyardDataProps {
  data: LanyardData;
}

export interface ConfigDataProps {
  config: ConfigProps;
}
