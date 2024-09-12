// import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

import { PrismaClient } from '@prisma/client';

// Create a singleton instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare a global namespace for development to store Prisma Client
declare const globalThis: {
  prismaGlobal?: PrismaClient;
} & typeof global;

// Create a single instance of PrismaClient if it does not exist
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Assign the instance to globalThis for development environment
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
