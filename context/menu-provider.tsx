'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface MenuContextType {
    isMenuShow: boolean;
    setIsMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with the defined shape
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Custom hook to provide access to modal state
export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};

// Props type for the provider component
interface MenuProviderProps {
    children: ReactNode;
}
// MenuProvider component to wrap your app and provide modal state
export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isMenuShow, setIsMenuShow] = useState(false);


    return (
        <MenuContext.Provider value={{ isMenuShow, setIsMenuShow }}>
            {children}
        </MenuContext.Provider>
    );
};
