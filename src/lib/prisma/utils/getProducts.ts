import prisma from "../prisma";

export async function getProducts(args: any = {}) {
  return prisma.product.findMany(
    args,
  );
}

