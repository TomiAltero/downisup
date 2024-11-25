import { Hijo } from '@/types';
import React, { useContext, createContext, useState, ReactNode } from 'react';

interface TerapiasContextProps {
  selectedHijo: Hijo | null;
  setSelectedHijo: React.Dispatch<React.SetStateAction<Hijo | null>>;
}

export const TerapiasContext = createContext({
  selectedHijo: null,
  setSelectedHijo: () => {},
} as TerapiasContextProps);

const TerapiasContextProvider = ({ children }: { children: ReactNode }) => {
  let [selectedHijo, setSelectedHijo] = useState<Hijo | null>(null);

  return (
    <TerapiasContext.Provider value={{ selectedHijo, setSelectedHijo }}>
      {children}
    </TerapiasContext.Provider>
  );
};

export function useTerapiasContext(){
  return useContext(TerapiasContext);
}

export default TerapiasContextProvider;