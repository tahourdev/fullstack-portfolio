import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';
import React from 'react';
import Image from 'next/image';
import { Blog } from '@/types';
import parse from 'html-react-parser';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import SocialShare from '@/components/socialshare/SocialShare';



const BlogContent = ({ image, title, content, tags }: Blog) => {

    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <figure className="w-full">
                    <Image
                        src={image as string}
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={30}
                        priority
                        placeholder="blur"
                        blurDataURL={image as string}
                        alt={title}
                        className="object-fit rounded-md object-cover w-full"
                    />
                    <figcaption className="text-xs w-full text-center text-muted-foreground pt-3">
                        {title}
                    </figcaption>
                </figure>
            </BlurFade>

            <h1 className="text-3xl my-8 text-foreground font-semibold">{title}</h1>
            <article className="prose-code:text-foreground prose prose-a:text-foreground dark:prose-invert prose-h2:text-foreground prose-p:text-foreground prose-h3:text-xl marker:text-foreground">
                {parse(content)}
            </article>

            <div className="flex justify-between items-center flex-wrap">
                <div className="flex gap-2 items-center mt-6 flex-wrap">
                    <h2 className="text-2xl font-semibold">Tags:</h2>
                    {tags?.map((tag: any) => (
                        <Link scroll={false} key={tag} href="#">
                            <Badge
                                variant="secondary"
                                className="px-4 py-2 !rounded-full font-medium"
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        </Link>
                    ))}
                </div>
                <SocialShare />
            </div>
        </>
    );
};

export default BlogContent;