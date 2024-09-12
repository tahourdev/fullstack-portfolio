import React from 'react';
import BlurFade from '../magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';

const Footer = () => {
    return (
        <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="text-muted-foreground/90">
                Copyright: © 2024 <span className="text-primary/90">KEANGHOR</span>. All Rights Reserved.
            </div>
        </BlurFade>
    );
};

export default Footer;
