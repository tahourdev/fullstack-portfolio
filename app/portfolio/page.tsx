// import React, { lazy, Suspense } from 'react'
// import { MdOutlineWorkOutline } from 'react-icons/md'
// import { loadingDelay } from '@/utils/loadingDelay'
// import { SkeletonLoading } from '@/components/skeleton/SkeletonLoading'
// import BlurFade from '@/components/magicui/blur-fade'
// import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay'
// // import PortfolioContent from './components/PortfolioContent'
// const PortfolioContent = lazy(() => loadingDelay(import("@/app/portfolio/components/PortfolioContent")))
// import { Metadata } from 'next';
// import prisma from '@/lib/prisma'
// import PaginationComponent from '@/components/pagination/Pagination'

// export const metadata: Metadata = {
//     title: "Portfolio"
// }

// async function fetchProjects(page: number, pageSize: number) {
//     const skip = (page - 1) * pageSize
//     return prisma.project.findMany({
//         orderBy: { createdAt: "desc" },
//         skip,
//         take: pageSize,

//     })
// }

// interface Project {
//     slug: string;
//     // Add other fields that you expect from the blog object
// }

// const PortfolioPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
//     const page = parseInt(searchParams.page || "1", 10)
//     const pageSize = 6
//     const projectCount = await prisma.project.count()
//     const orderedProejcts = await fetchProjects(page, pageSize)
//     const transformedProjects = orderedProejcts.map((project) => ({
//         ...project,
//     }));


//     return (
//         <>
//             <BlurFade delay={BLUR_FADE_DELAY}>
//                 <h5 className="flex items-center gap-2">
//                     <MdOutlineWorkOutline className="text-primary" />
//                     <span className="text-muted-foreground">Best Our Portfolio</span>
//                 </h5>
//             </BlurFade>
//             <BlurFade delay={BLUR_FADE_DELAY * 3}>
//                 <h1 className="text-4xl capitalize sm:text-5xl xl:text-[52px] my-6">
//                     Painting the Future with{" "}
//                     <span className="text-primary">Innovation</span>
//                 </h1>
//             </BlurFade>

//             <Suspense fallback={<SkeletonLoading />}>
//                 <PortfolioContent projects={transformedProjects} />
//             </Suspense>
//             <div className="mt-8">
//                 <PaginationComponent
//                     currentPage={page}
//                     pageSize={pageSize}
//                     postCount={projectCount}
//                 />
//             </div>

//         </>
//     )
// }

// export default PortfolioPage

import React, { lazy, Suspense } from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { loadingDelay } from '@/utils/loadingDelay';
import { SkeletonLoading } from '@/components/skeleton/SkeletonLoading';
import BlurFade from '@/components/magicui/blur-fade';
import { BLUR_FADE_DELAY } from '@/utils/blur_fade_delay';
import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import PaginationComponent from '@/components/pagination/Pagination';
import { Project } from '@/types';


// Dynamically import PortfolioContent with a fallback loader
const PortfolioContent = lazy(() => loadingDelay(import('@/app/portfolio/components/PortfolioContent')));

export const metadata: Metadata = {
    title: "Portfolio"
};

async function fetchProjects(page: number, pageSize: number): Promise<Project[]> {
    const skip = (page - 1) * pageSize;
    return prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
    });
}

const PortfolioPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = parseInt(searchParams.page || '1', 10);
    const pageSize = 6;
    const projectCount = await prisma.project.count();
    const orderedProjects = await fetchProjects(page, pageSize);

    // Ensure the type of each project is correctly inferred
    const transformedProjects: Project[] = orderedProjects.map((project) => ({
        ...project,
    }));

    return (
        <>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h5 className="flex items-center gap-2">
                    <MdOutlineWorkOutline className="text-primary" />
                    <span className="text-muted-foreground">Best Our Portfolio</span>
                </h5>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="text-4xl capitalize sm:text-5xl xl:text-[52px] my-6">
                    Painting the Future with{' '}
                    <span className="text-primary">Innovation</span>
                </h1>
            </BlurFade>

            <Suspense fallback={<SkeletonLoading />}>
                <PortfolioContent projects={transformedProjects} />
            </Suspense>
            <div className="mt-8">
                <PaginationComponent
                    currentPage={page}
                    pageSize={pageSize}
                    postCount={projectCount}
                />
            </div>
        </>
    );
};

export default PortfolioPage;
