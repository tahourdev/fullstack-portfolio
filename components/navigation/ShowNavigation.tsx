import Link from "next/link";
import Logo from "@/assets/dark-logo.svg";
import Image from "next/image";
import { X } from "lucide-react";
import { useMenu } from "@/context/menu-provider";
// import NavigationList from "./NavigationList";
import type { Navbar } from './Navigation'; // Import the Navbar type from the Navigation component
import NavigationList from './NavigationList';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface ShowNavigationProps {
    navTabs: Navbar[];
    handleActiveIndex: (path: string) => void;
    shouldHandleActive: boolean;
}

const ShowNavigation: React.FC<ShowNavigationProps> = ({ navTabs, handleActiveIndex, shouldHandleActive }) => {
    const { isMenuShow, setIsMenuShow } = useMenu();

    return (
        <div className="relative z-50">
            <div
                onClick={() => setIsMenuShow(false)}
                className={cn(isMenuShow ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                    "fixed right-0 top-0 z-50 h-screen w-screen bg-background/60 transition-all duration-300"
                )}
            />

            <Card
                className={cn(isMenuShow ? "-right-5" : "-right-[110%]", "fixed w-full max-w-[320px] bg-background !rounded-r-none top-0 z-50 min-h-screen overflow-y-scroll p-[50px] shadow-md transition-all duration-300 ease-in-out")}
            >
                <Link href="/">
                    <Image className="mb-[30px]" src={Logo} alt="logo" />
                </Link>

                <NavigationList
                    navTabs={navTabs}
                    handleActiveIndex={handleActiveIndex}
                    shouldHandleActive={shouldHandleActive}
                    setIsMenuShow={setIsMenuShow}
                />

                <button
                    onClick={() => setIsMenuShow(false)}
                    className="bg-primary/80 absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-lg text-xl text-foreground-clr"
                >
                    <X />
                </button>
            </Card>
        </div>
    );
};

export default ShowNavigation;
