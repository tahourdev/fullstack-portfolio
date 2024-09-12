import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';

const AboutContent = () => {
    return (

        <section className="mt-[30px] flex flex-col md:flex-row gap-[50px]">
            <div className="md:max-w-[60%] w-full ">
                <p className="text-foreground-clr leading-7">
                    <span className="text-primary font-semibold text-xl">Hi there! 👋</span> I&apos;m
                    <span className="text-primary font-semibold">Keanghor,</span> <br /> a fourth-year undergraduate
                    student with a <span className=" text-primary">passion for frontend development,</span>{' '}
                    particularly in React.js. I&apos;m all about{' '}
                    <span className=" text-primary">crafting seamless user experiences</span> and turning ideas into
                    interactive interfaces. Throughout my journey, I&apos;ve{' '}
                    <span className=" text-primary">honed my skills in React.js</span> to build dynamic and responsive
                    web applications efficiently.{' '}
                    <span className=" text-primary">Collaboration is key to my approach,</span> and I thrive in
                    diverse teams.
                </p>
            </div>
            <div className="md:max-w-[40%] w-full ">
                <p className="text-foreground-clr leading-7">
                    <span className="text-primary font-semibold text-xl">Beyond coding 🧑🏻‍💻</span> <br />
                    I&apos;m committed to
                    <span className=" text-primary"> continuous learning</span> and{' '}
                    <span className="text-primary">Staying updated with the latest trends in </span>web development. Take a look at my portfolio to explore some of the projects I&apos;ve worked on. Let&apos;s connect and discuss how we can create something remarkable together!
                </p>
            </div>
        </section>

    );
};
export default AboutContent;
