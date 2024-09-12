import prisma from '@/lib/prisma';

export async function fetchBlogs(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    return prisma.blog.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
    });
}