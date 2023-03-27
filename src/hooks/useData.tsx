import { EThemes, IUseData } from "constants/types";

import { createContext, FC, ReactNode, useContext, useState } from "react";

const DataContext = createContext({});

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = (props) => {
    const { children } = props;

    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [currentTheme, setCurrentTheme] = useState<EThemes>(
        EThemes.LIGHT_THEME_1
    );

    const providerValue: IUseData = {
        isChatOpen,
        setIsChatOpen,
        currentTheme,
        setCurrentTheme,
    };

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext) as IUseData;
