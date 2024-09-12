'use client'
import React from 'react';
import { Card } from '../ui/Card';
import { navTabs } from '@/constant/data';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export interface Navbar {
    path: string;
    icon: IconType;
    name: string;
}

const Navigation: React.FC = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/admin") {
            return pathname.startsWith("/admin");
        } else if (path === "/blog") {
            return pathname.startsWith("/blog");
        } else {
            return pathname === path;
        }
    };

    return (
        <Card className='sticky top-0 max-h-fit flex w-[80px] items-center justify-center py-[20px] backdrop-blur-sm'>
            <div className="mb-[40px] flex flex-col gap-8 items-center">
                {navTabs.map((item: Navbar, index: number) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <Link

                                className={cn(isActive(item.path) ? "text-primary bg-muted" : "text-muted-foreground",
                                    buttonVariants({ variant: 'ghost', size: 'icon' }))}
                                href={item.path}
                            >
                                <item.icon size={18} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className='border border-solid border-border'>
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </Card>
    );
}

export default Navigation;
