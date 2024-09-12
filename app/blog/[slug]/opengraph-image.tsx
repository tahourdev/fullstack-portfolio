
import { ImageResponse } from 'next/og';
import prisma from '@/lib/prisma';

// export const runtime = 'edge';

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    // Fetch the blog post using the slug
    const blog = await prisma.blog.findUnique({
        where: {
            slug: params.slug,
        },
    });

    const imageUrl = blog?.image as string;

    if (!blog || !imageUrl) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: '#000',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                    }}
                >
                    Not Found
                </div>
            ),
            { width: 1200, height: 630 }
        );
    }


    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    background: '#fff', // Ensure a background color if needed
                }}
            >
                <img
                    src={imageUrl}
                    alt={blog.title || 'Blog Image'}
                    height="630"
                    width="1200"
                />
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
