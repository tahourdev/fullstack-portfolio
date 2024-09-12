import Image from 'next/image'
import React, { ReactNode } from 'react'
import Link from 'next/link';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/formatDate';
import readingTime from "reading-time"
import BlogDetail from '../[slug]/page';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
// import { getFilenameFromUrl } from '@/utils/getFilenameFromUrl';
// import Image from '@/components/images/image';


interface ValueProps {
    title: string,
    image?: string | null,
    tags: string[]
    createdAt: Date
    slug: string
    content: string
}


const BlogItem: React.FC<ValueProps> = ({ title, image, tags, createdAt, slug, content }) => {

    const stats = readingTime(content);
    // const imageUrl = image ? getFilenameFromUrl(image) : '';

    return (
        <Card className='group shadow-md overflow-hidden'>
            <Link href={`blog/${slug}`} scroll={false}>
                <div className="relative mb-4 aspect-[6/4] overflow-hidden rounded-t-md">
                    <Image
                        className="object-cover object-bottom transition-all duration-300 ease-linear group-hover:scale-110"
                        src={image as string}
                        quality={50}
                        alt="blog cover"
                        placeholder='blur'
                        blurDataURL='blur'
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                    />

                    {/* <Image
                        imagePath={imageUrl}
                        className="object-cover object-bottom transition-all duration-300 ease-linear group-hover:scale-110"
                        alt=''
                        width={200}
                        height={200}
                    /> */}

                </div>
                <CardHeader className="mt-6 mb-2 px-4">
                    <CardTitle className="cursor-pointer !text-lg line-clamp-2 font-semibold text-foreground">
                        {title}
                    </CardTitle>

                    <div className="space-y-6 mt-4 text-muted-foreground">
                        <div className="flex h-3 items-center space-x-2">
                            <small>{stats.minutes.toFixed()} minute(s)</small>
                            <Separator orientation='vertical' />
                            <small className=''>{stats.words} words</small>
                        </div>
                        <time className="relative">
                            {formatDate(createdAt)}
                        </time>
                    </div>
                </CardHeader>
                <CardFooter className='px-4 text-xs mb-4'>
                    <div className="flex gap-1 flex-wrap items-center">
                        {tags.slice(0, 3).map((tag, idx: number) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={idx}
                            >
                                {tag}
                            </Badge>
                        )
                        )}
                    </div>
                </CardFooter>
            </Link>
        </Card>
    )
}

export default BlogItem


