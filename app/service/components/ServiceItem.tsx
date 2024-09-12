'use client'
import Image from "next/image";
import { useTheme } from 'next-themes';
import { MagicCard } from '@/components/magicui/magic-card';


interface ServiceItemProps {
    title: string;
    desc: string;
    icon: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, desc, icon }) => {
    const { theme } = useTheme();
    return (
        <>
            <MagicCard
                className='cursor-pointer h-full w-full py-10 px-8 shadow-md'
                // className="flex h-full w-full flex-col items-center space-y-6 px-8 py-10 drop-shadow-md xs:items-start"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <div className="flex gap-6 w-full flex-col justify-center items-center xs:items-start">
                    <div className="size-8 ">
                        <Image className="w-full" src={icon} alt="icon" />
                    </div>
                    <h3 className="text-center text-xl font-semibold text-primary xs:text-start">
                        {title}
                    </h3>
                    <p className="text-sm leading-6 xs:text-left">{desc}</p>
                </div>
            </MagicCard>
        </>
    );
};

export default ServiceItem;
