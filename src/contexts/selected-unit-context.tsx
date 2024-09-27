'use client'

import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

type SelectedUnitContextType = {
  selectedUnit: string;
  setSelectedUnit: Dispatch<SetStateAction<string>>;
};

const SelectedUnitContext = createContext<SelectedUnitContextType | null>(null);

export const SelectedUnitProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUnit, setSelectedUnit] = useState('Apex');

  return (
    <SelectedUnitContext.Provider value={{ selectedUnit, setSelectedUnit }}>
      {children}
    </SelectedUnitContext.Provider>
  );
}

export const useSelectedUnit = () => {
  const context = useContext(SelectedUnitContext);
  if (!context) {
    throw new Error('useSelectedUnit must be used within a SelectedUnitProvider');
  }
  return context;
}