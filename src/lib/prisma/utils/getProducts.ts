import prisma from '../prisma';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getProducts(args: any = {}) {
  return prisma.product.findMany(args);
}

