import { createContext, type PropsWithChildren } from "react";
import './darkur.css'

const DarkurContext = createContext({});

interface DarkurProviderProps extends PropsWithChildren {
    // temp placeholder
    theme?: any;
}

export const DarkurProvider = ({ children }: DarkurProviderProps) => {
  return (
    <DarkurContext.Provider value={{}}>
        {children}
    </DarkurContext.Provider>
  )
}