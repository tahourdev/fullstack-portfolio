import React from 'react';
import Link from 'next/link';
import type { Navbar } from './Navigation'; // Ensure this is the correct import path for the Navbar type

interface NavigationItemProps {
    tab: Navbar;
    handleActiveIndex: (path: string) => void;
    shouldHandleActive: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ tab, handleActiveIndex, shouldHandleActive, setIsMenuShow }) => {
    const handleClick = () => {
        setIsMenuShow(false);
        if (shouldHandleActive) {
            handleActiveIndex(tab.path);
        }
    };

    return (
        <li
            onClick={handleClick}
            className="text-[18px] hover:text-primary relative transition-all duration-300 ease-linear">
            <Link scroll={false} className="flex items-center gap-[15px]" href={tab.path}>
                <tab.icon />
                <span>{tab.name}</span>
            </Link>
        </li>
    );
};

export default NavigationItem;
