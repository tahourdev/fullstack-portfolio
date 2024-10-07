import { PrismaClient } from '../prisma/generated/client';

const globalForPrisma = global as unknown as { prismaGlobal?: PrismaClient };

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  console.log('Production environment detected. Initializing Prisma Client.');
  prisma = new PrismaClient();
} else {
  console.log('Development environment detected. Checking if Prisma Client is already initialized.');
  if (!globalForPrisma.prismaGlobal) {
    console.log('Prisma Client is not initialized yet. Initializing now...');
    globalForPrisma.prismaGlobal = new PrismaClient();
  } else {
    console.log('Reusing existing Prisma Client.');
  }
  prisma = globalForPrisma.prismaGlobal;
}

export default prisma;
