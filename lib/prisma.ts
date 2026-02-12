import type { PrismaClient } from '../prisma/generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  // Lazy import to avoid instantiating PrismaClient during Next.js build phase
  const { PrismaClient: PrismaClientClass } = require('../prisma/generated/prisma')
  const client = new PrismaClientClass()
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }
  return client
}

/** Lazily-instantiated Prisma client. Prevents build-time initialization errors on Netlify/Vercel. */
export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    return (getPrismaClient() as unknown as Record<string | symbol, unknown>)[prop]
  },
})
