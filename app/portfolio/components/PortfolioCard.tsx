import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { LinkProps } from '@/constant/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';

interface Props {
    title: string;
    githubLink?: string | null
    link: string;
    technologies: readonly string[];
    image?: string | null;  // Update here to accept null
    video?: string | null;
    className?: string;
    description: string;
}

const PortfolioCard = ({ title, video, githubLink, link, technologies, image, className, description }: Props) => {
    return (
        <Card className='flex flex-col overflow-hidden shadow-md'>
            <Link href={link || "#"}
                className={cn("block cursor-pointer", className)}>
                <div className='aspect-[6/4] overflow-hidden'>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={400}
                            className=" w-full h-full transition-all duration-200 ease-linear hover:scale-110 overflow-hidden object-cover object-top"
                        />
                    )}
                </div>

                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
                    />
                )}
            </Link>
            <CardHeader className="px-4">
                <div className="space-y-1">
                    <CardTitle className="mt-3">{title}</CardTitle>
                    {/* <time className="font-sans text-xs">{dates}</time> */}
                    {/* <div className="hidden font-sans text-xs underline print:visible">
                        {links?.replace("https://", "").replace("www.", "").replace("/", "")}
                    </div> */}
                    <article className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </article>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-4">
                {technologies && technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {technologies?.map((technology) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={technology}
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-4 py-4">
                {/* {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links?.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                                    <link.icon />
                                    {link.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )} */}
                <Link href={link} target="_blank">
                    <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                        <BsGlobe2 />
                        <span>Website</span>
                    </Badge>
                </Link>
                {githubLink && <Link href={link} target="_blank">
                    <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                        <BsGithub />
                        <span>Github</span>
                    </Badge>
                </Link>}
            </CardFooter>
        </Card>
    )
}

export default PortfolioCard