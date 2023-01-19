import { createContext, ReactElement, FC, useState } from 'react';

interface LanguageContextState {
    polish: boolean;
    setPolish: (polish: boolean) => void;

}

interface LanguageProviderProps {
    children: ReactElement;
}

const defaultLanguageContextValue = {} as LanguageContextState;
export const LanguageContext = createContext(defaultLanguageContextValue);

export const LanguageProvider: FC<LanguageProviderProps> = ({children}) => {
    const [polish, setPolish] = useState(false)

    return (
        <LanguageContext.Provider 
            value={{ polish, setPolish }}>
            {children}
        </LanguageContext.Provider>
    )
}