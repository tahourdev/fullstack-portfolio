import React, { cache, lazy, Suspense } from 'react';
import { RiQuillPenLine } from 'react-icons/ri';
import prisma from '@/lib/prisma';
import PaginationComponent from '@/components/pagination/Pagination';
import { SkeletonLoading } from '@/components/skeleton/SkeletonLoading';
import { loadingDelay } from '@/utils/loadingDelay';
import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';
const BlogContent = lazy(() => loadingDelay(import("./components/BlogContent")))
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog"
}

async function fetchBlogs(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    return prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
    })
}

const BlogPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = parseInt(searchParams.page || '1', 10);

    const pageSize = 6;
    const blogCount = await prisma.blog.count();
    const orderedBlogs = await fetchBlogs(page, pageSize);

    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h5 className="flex items-center gap-2">
                    <RiQuillPenLine className="text-primary" />
                    <span className="text-muted-foreground font-semibold">News and Blogs</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="xl:text-[52px] mt-4 text-4xl sm:text-5xl capitalize">
                    Exploring Fresh <span className="text-primary">Perspectives</span> and{' '}
                    <span className="text-primary">Ideas</span>
                </h1>
            </BlurFade>
            <Suspense fallback={<SkeletonLoading />}>
                <BlogContent blogs={orderedBlogs} />
            </Suspense>
            <div className="mt-8">
                <PaginationComponent
                    currentPage={page}
                    pageSize={pageSize}
                    postCount={blogCount}
                />
            </div>
        </>
    );
};

export default BlogPage;