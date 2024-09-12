'use client'
import React from "react";
// import Enghour from "@/assets/enghour.jpg";
import Link from "next/link";
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { socialIcons } from '@/constant/data';
import WordRotate from '../magicui/word-rotate';
import SparklesText from '../magicui/sparkles-text';
import BlurFade from '../magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';
import Image from '../images/image';


const Sidebar: React.FC = () => {
    const handleDownload = (): void => {
        window.location.href = "/api/download";
    }

    return (

        <Card className='px-[50px] sticky top-0 max-h-fit pb-[80px] md:border border-0 pt-[50px] backdrop-blur-sm'>

            <div className="relative mx-auto mb-10 aspect-square max-w-[410px] overflow-hidden rounded-full">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <Image imagePath='enghour.jpg' alt='' height={680} width={500} />
                </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="mb-10 space-y-4 f">
                    <SparklesText className='text-center text-3xl font-bold' text="HENG KEANGHOR" />
                    <WordRotate
                        className="text-foreground/90 text-center text-sm font-semibold"
                        words={["🧑🏻‍💻 Frontend Developer", "👉HTML/CSS🤝", "👉JavaScript🤝", "👉ReactJs🤝", "👉NextJs🤝", "👉Tailwindcss🤝", "👉SASS🤝"]}
                    />
                </div>
            </BlurFade>
            <div className="mb-10 flex flex-col items-center justify-center gap-5 xs:flex-row md:flex-col">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Link
                        href="/contact"
                        className={cn("text-xl relative hover:border-primary shadow-md", buttonVariants({ variant: "secondary", size: 'xl' }))}
                    >
                        Hire Me!
                        <span className="absolute -right-1 -top-3">
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary">
                                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary opacity-75"></span>
                            </span>
                        </span>
                    </Link>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <button
                        onClick={handleDownload}
                        className={cn('text-lg md:text-xl cursor-pointer shadow-md', buttonVariants({ size: 'xl' }))}
                    >
                        Download CV
                    </button>
                </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="mx-auto mb-[50px] max-w-[370px] text-center md:mb-28">
                    <h3 className="text-xl text-muted-foreground md:text-2xl">
                        Specializing in strategy, improving design maturity & design
                        systems.
                    </h3>
                </div>
            </BlurFade>
            <div className="flex items-center justify-center gap-4">
                {socialIcons.map((item, index) => (
                    <BlurFade key={index} delay={BLUR_FADE_DELAY * 5}>
                        <a href={item.link} target='blank' className={cn(
                            buttonVariants({ size: 'icon', variant: 'secondary' }),
                            "shadow-md text-xs xs:text-base")}>
                            <item.icon />
                        </a>
                    </BlurFade>

                ))}
            </div>
        </Card>
    );
};

export default Sidebar;
