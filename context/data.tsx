import { Children, DataContextType, DataProps } from '@utils/types';
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: Children) => {
  const [data, setData] = useState<DataProps>({ config: {}, lanyard: null });

  const update = (overwrite: Partial<DataProps>) => {
    setData({ ...data, ...overwrite });
  };

  return <DataContext.Provider value={{ data, update }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) throw new Error('DataContext must be called from within the DataContextProvider');

  return context;
};

// https://gist.github.com/ELI7VH/8ca0e90e52e902e91c3776ad7b63ad8e
