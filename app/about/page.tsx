import About from '@/app/about/components/About'
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About"
}

const AboutPage = () => {
    return (
        <>
            <About />
        </>
    )
}

export default AboutPage