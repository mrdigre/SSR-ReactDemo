import prisma from "../prisma";

export async function getProduct(id: string) {
  return prisma.product.findUnique({ 
    where:{
        id
    }} 
  );
}

