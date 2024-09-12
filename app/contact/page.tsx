
import { Card } from '@/components/ui/Card'
import { contact, ContactProps } from '@/constant/data'
import React from 'react'
import { GrContact } from 'react-icons/gr'
import ContactLocation from './components/ContactLocation'
import ContactForm from './components/ContactForm'
import BlurFade from '@/components/magicui/blur-fade'
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact"
}

const ContactPage = () => {
    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h5 className="flex items-center gap-2">
                    <GrContact className="text-primary" />
                    <span className="text-muted-foreground">Contact Me</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="xl:text-[52px] mt-4 mb-6 text-4xl sm:text-5xl capitalize">
                    Let&apos;s <span className="text-primary">Connect &apos;</span>
                    <span className="text-primary">Collaborate</span>
                </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <h2 className="text-muted-foreground my-10 text-3xl">Contact</h2>
            </BlurFade>


            <div className="container-grid">
                {contact.map((item: ContactProps, index: number) => (
                    <BlurFade delay={BLUR_FADE_DELAY * 5 + index * 0.05} key={index}>
                        <Card className='p-6 hover:ring-primary hover:ring-[1px]'>
                            <div className="flex items-center justify-between">
                                <div className="text-primary text-6xl">
                                    <item.icon />
                                </div>
                                <div className="text-muted-foreground text-right max-w-[80px]">
                                    <p>{item.title}</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-1">
                                {item.contacts.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={item.link}
                                            rel="noreferrer"
                                            target="_blank"

                                            className="sm:text-xl block xs:text-lg text-wrap font-semibold">
                                            {item.contact}
                                        </a>
                                    );
                                })}
                            </div>
                        </Card>
                    </BlurFade>

                ))}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <ContactLocation />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <ContactForm />
            </BlurFade>

        </>
    )
}

export default ContactPage