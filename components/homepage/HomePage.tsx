import React from 'react'

import { BiHomeAlt2 } from 'react-icons/bi'
import Image from 'next/image'
import { BsTelephonePlus } from 'react-icons/bs'
import Link from 'next/link'
import { TbMessage2Search } from 'react-icons/tb'
import Code from "@/assets/code-dark.png"
import WordPullUp from '../magicui/word-pull-up'
import Sidebar from '../sidebar/Sidebar'
import { TextInfiniteScroll } from '../text-infinite-scroll/TextInfiniteScroll'
// import HomeWrapper from './HomeWrapper'
import BlurFade from '../magicui/blur-fade'
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay'


const HomePage = () => {
    return (
        <>
            <BlurFade>
                <TextInfiniteScroll />
            </BlurFade>
            <div className="block md:hidden">
                <Sidebar />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h5 className="flex justify-center items-center gap-2 mt-10">
                    <BiHomeAlt2 className="text-primary" />
                    <span className="text-muted-foreground">Hi! There</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="mt-3">
                    <WordPullUp

                        className="text-3xl capitalize sm:text-5xl xl:text-6xl text-black dark:text-white "
                        words=" I'm Here, Your Guide to Innovation and Creativity"
                    />
                </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h3 className="mt-10 flex flex-col items-center justify-center gap-4 xs:flex-row md:flex-col md:gap-6 lg:flex-row lg:gap-20">
                    <a
                        href="mailto:enghourh5@gmail.com"
                        className="flex items-center gap-4 text-xl sm:text-2xl"
                    >
                        <TbMessage2Search className="text-green-300" />
                        <span>enghourh5@gmail.com </span>
                    </a>
                    <Link
                        href="#"
                        className="flex items-center gap-4 text-xl sm:text-2xl"
                    >
                        <BsTelephonePlus className="text-green-300" />
                        <span>+855 171 234 5678 </span>
                    </Link>
                </h3>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="mt-10 w-full content-center">
                    <Image src={Code} alt="code" width={700} height={200} />
                </div>
            </BlurFade>

        </>
    )
}

export default HomePage