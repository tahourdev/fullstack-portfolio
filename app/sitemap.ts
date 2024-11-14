// import prisma from '@/lib/prisma';
// import { MetadataRoute } from 'next';
// import { Blog } from '@/types'; // Import the Blog type

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // Await the Prisma query directly before mapping
//   const blogs: Blog[] = await prisma.blog.findMany();

//   const blogUrls: MetadataRoute.Sitemap = blogs.map((blog: Blog) => {
//     return {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
//       lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(), // Use a fallback value
//     };
//   });

//   return [
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/service`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
//       lastModified: new Date(),
//     },
//     ...blogUrls,
//   ];
// }
