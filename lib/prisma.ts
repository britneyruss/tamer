import type { PrismaClient } from '../prisma/generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }
  // Prisma 7 requires an adapter or accelerateUrl. Pass pg adapter with connection string.
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL environment variable is not set. Prisma requires it to connect to the database.'
    )
  }
  const { PrismaClient: PrismaClientClass } = require('../prisma/generated/prisma')
  const { PrismaPg } = require('@prisma/adapter-pg')
  const adapter = new PrismaPg({ connectionString })
  const client = new PrismaClientClass({ adapter })
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
