import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prismaGlobal?: PrismaClient };

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production, create a new PrismaClient instance

  prisma = new PrismaClient();
} else {
  // In development, reuse the PrismaClient instance to avoid exhausting the connection pool
  if (!globalForPrisma.prismaGlobal) {
    globalForPrisma.prismaGlobal = new PrismaClient();
  }
  prisma = globalForPrisma.prismaGlobal;
}

export default prisma;
