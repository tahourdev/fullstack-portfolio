"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/dark-logo.svg";
import { TbMenuDeep } from "react-icons/tb";
import { navTabs } from '@/constant/data'
import { useMenu } from '@/context/menu-provider';
import ShowNavigation from '../navigation/ShowNavigation';
import { ThemeToggle } from '../mode-toggle/theme-toggle';
import { Card } from '../ui/Card';

const Header = () => {
    const { setIsMenuShow } = useMenu();


    return (
        <Card className="sticky top-0 z-20 flex h-[85px] items-center px-[30px] backdrop-blur-md">
            <header className="w-full">
                <div className="relative flex w-full items-center justify-between gap-[50px]">
                    <div className="flex w-full items-center gap-[50px] transition-all duration-300 ease-linear">
                        <Link className="lg:mr-[50px]" href="/">
                            <Image src={Logo} alt="logo" />
                        </Link>
                        <ul className="hidden items-center gap-10 text-base font-bold xs:flex">
                            <li className="text-foreground">
                                <Link href="/">Home</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <ThemeToggle />
                        <div className='lg:hidden block cursor-pointer text-4xl text-primary' onClick={() => setIsMenuShow(true)}>
                            <TbMenuDeep />
                        </div>

                    </div>
                </div>
                <ShowNavigation shouldHandleActive={false} navTabs={navTabs} handleActiveIndex={function (path: string): void {
                    throw new Error('Function not implemented.');
                }} />
            </header>
        </Card>
    );
};

export default Header;
