import { personalInfo } from '@/constant/data';
import { SlGraduation } from 'react-icons/sl';
import AboutContent from './AboutContent';
import InfoItem from './InfoItem';
import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';

const About = () => {
    return (
        <section>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h5 className="flex items-center gap-2">
                    <SlGraduation className="text-primary" />
                    <span className="text-muted-foreground">Hi! There I’m</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="xl:text-[52px] text-4xl mt-4 sm:text-5xl capitalize">
                    Hire Me: Learn More About Your <span className="text-primary">Potential Partner</span>
                </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <AboutContent />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <section className="mt-[30px] text-muted-foreground space-y-4">
                    {personalInfo.map((info, index) => (
                        <InfoItem key={index} label={info.label} value={info.value} />
                    ))}
                </section>
            </BlurFade>
        </section>
    );
};

export default About;
