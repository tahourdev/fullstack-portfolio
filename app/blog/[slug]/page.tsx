// pages/blog/[slug].tsx
import prisma from '@/lib/prisma';
import NotFound from '@/app/not-found';
import Head from 'next/head';
import { Metadata } from 'next';
import BlogContent from './BlogContent';
import { cache } from 'react';

export async function generateStaticParams() {
    const blogs = await prisma.blog.findMany({
        select: { slug: true },
    });

    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

const getUniqPost = cache(async (slug: string) => {
    const blog = await prisma.blog.findUnique({
        where: {
            slug,
        },
    });
    return blog;
})

interface BlogDetailParams {
    slug: string;
}


const BlogDetail = async ({ params }: { params: BlogDetailParams }) => {
    const blogDetail = await getUniqPost(params.slug);
    if (!blogDetail) {
        return <NotFound />;
    }

    return (
        <>
            <BlogContent
                image={blogDetail.image}
                title={blogDetail.title}
                content={blogDetail.content}
                tags={blogDetail.tags}
                slug={blogDetail.slug}
            />
        </>
    );
};

export default BlogDetail;

export async function generateMetadata({ params: { slug } }: { params: BlogDetailParams }): Promise<Metadata> {
    const blog = await getUniqPost(slug);

    try {
        if (!blog) {
            return {};
        }

        return {
            title: blog.title,
            description: blog.content.slice(0, 150),
            twitter: {
                card: "summary_large_image",
                title: blog.title,
                description: blog.content.slice(0, 150),
                images: [blog.image as string],
                creator: "@abandoned_hill",
            },
            alternates: {
                canonical: `/blog/${blog.slug}`,
                languages: {
                    "en-US": `/en-US/${blog.slug}`,
                    "de-DE": `/de-DE/${blog.slug}`,
                    "km-KH": `/km-KH/${blog.slug}`,
                },
            },
            robots: {
                index: true,
                follow: true,
            },
        };
    } catch (error) {
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
            twitter: {
                card: "summary",
                title: "Not Found",
                description: "The page you are looking for does not exist.",
                creator: "@abandoned_hill",
            },
        };
    }
}


// import prisma from '@/lib/prisma';
// import NotFound from '@/app/not-found';
// import Head from 'next/head';
// import { Metadata } from 'next';
// import BlogContent from './BlogContent';
// import { cache } from 'react';

// interface Blog {
//     slug: string;
//     // Add other fields that you expect from the blog object
// }

// export async function generateStaticParams() {
//     const blogs = await prisma.blog.findMany({
//         select: { slug: true },
//     });

//     return blogs.map((blog: Blog) => ({
//         slug: blog.slug,
//     }));
// }

// const getUniqPost = cache(async (slug: string) => {
//     const blog = await prisma.blog.findUnique({
//         where: {
//             slug,
//         },
//     });
//     return blog;
// })

// interface BlogDetailParams {
//     slug: string;
// }

// const BlogDetail = async ({ params }: { params: BlogDetailParams }) => {
//     const blogDetail = await getUniqPost(params.slug);
//     if (!blogDetail) {
//         return <NotFound />;
//     }

//     return (
//         <>
//             <BlogContent
//                 image={blogDetail.image}
//                 title={blogDetail.title}
//                 content={blogDetail.content}
//                 tags={blogDetail.tags}
//                 slug={blogDetail.slug}
//             />
//         </>
//     );
// };

// export default BlogDetail;

// export async function generateMetadata({ params: { slug } }: { params: BlogDetailParams }): Promise<Metadata> {
//     const blog = await getUniqPost(slug);

//     try {
//         if (!blog) {
//             return {};
//         }

//         return {
//             title: blog.title,
//             description: blog.content.slice(0, 150),
//             twitter: {
//                 card: "summary_large_image",
//                 title: blog.title,
//                 description: blog.content.slice(0, 150),
//                 images: [blog.image as string],
//                 creator: "@abandoned_hill",
//             },
//             alternates: {
//                 canonical: `/blog/${blog.slug}`,
//                 languages: {
//                     "en-US": `/en-US/${blog.slug}`,
//                     "de-DE": `/de-DE/${blog.slug}`,
//                     "km-KH": `/km-KH/${blog.slug}`,
//                 },
//             },
//             robots: {
//                 index: true,
//                 follow: true,
//             },
//         };
//     } catch (error) {
//         return {
//             title: "Not Found",
//             description: "The page you are looking for does not exist.",
//             twitter: {
//                 card: "summary",
//                 title: "Not Found",
//                 description: "The page you are looking for does not exist.",
//                 creator: "@abandoned_hill",
//             },
//         };
//     }
// }
