import { services } from '@/constant/data'
import React from 'react'
import { GrServicePlay } from 'react-icons/gr'
import ServiceItem from './components/ServiceItem'
import BlurFade from '@/components/magicui/blur-fade'
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Service"
}

const ServicePage = () => {
    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h5 className="flex items-center gap-2">
                    <GrServicePlay className="text-primary" />
                    <span className="text-muted-foreground">Best Our Service</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="xl:text-[52px] text-4xl mt-4 sm:text-5xl capitalize">
                    Unlocking Solutions for Your <span className="text-primary">Success</span>
                </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="mt-[30px] container-grid">
                    {services.map((item, idx) => {
                        return (
                            <BlurFade
                                delay={BLUR_FADE_DELAY * 4 + idx * 0.05}
                                key={idx}>
                                <ServiceItem title={item.title} desc={item.des} icon={item.icon} />
                            </BlurFade>
                        );
                    })}
                </div>
            </BlurFade>
        </>
    )
}

export default ServicePage