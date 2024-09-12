import prisma from '@/lib/prisma';
import { Metadata, MetadataRoute } from 'next';

interface SitemapEntry {
  url: string;
  lastModified: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Await the prisma query directly before mapping
  const blogs = await prisma.blog.findMany();

  const blogUrls: MetadataRoute.Sitemap =
    blogs.map((blog) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt),
      };
    }) || [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/service`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
