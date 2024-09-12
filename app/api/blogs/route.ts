import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = 4;
  const skip = (page - 1) * limit;

  const [blogs, totalBlogs] = await Promise.all([
    prisma.blog.findMany({
      skip,
      take: limit,
    }),
    prisma.blog.count(),
  ]);

  return NextResponse.json({
    blogs,
    totalPages: Math.ceil(totalBlogs / limit),
  });
}
