import React from 'react';
import NavigationItem from './NavigationItem';
import type { Navbar } from './Navigation'; // Ensure this is the correct import path for the Navbar type

interface NavigationListProps {
    navTabs: Navbar[];
    handleActiveIndex: (path: string) => void;
    shouldHandleActive: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
}

const NavigationList: React.FC<NavigationListProps> = ({ navTabs, handleActiveIndex, shouldHandleActive, setIsMenuShow }) => {
    return (
        <ul className="flex flex-col gap-[20px]">
            {navTabs.map((tab, index) => (
                <NavigationItem
                    key={index}
                    tab={tab}
                    handleActiveIndex={handleActiveIndex}
                    shouldHandleActive={shouldHandleActive}
                    setIsMenuShow={setIsMenuShow}
                />
            ))}
        </ul>
    );
};

export default NavigationList;
