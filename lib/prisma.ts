// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = global as unknown as { prismaGlobal?: PrismaClient };

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   // In production, create a new PrismaClient instance

//   prisma = new PrismaClient();
// } else {
//   // In development, reuse the PrismaClient instance to avoid exhausting the connection pool
//   if (!globalForPrisma.prismaGlobal) {
//     globalForPrisma.prismaGlobal = new PrismaClient();
//   }
//   prisma = globalForPrisma.prismaGlobal;
// }

// export default prisma;

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
