"use client";

import { createContext, useState, useContext } from "react";

type CursorContextType = {
  variant: string;
  setVariant: (variant: string) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState("default");

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
