const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const data = require("./products.json");

async function main() {
  const products = await prisma.product.createMany({
    data: data.products,
  });
  console.log(products);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
