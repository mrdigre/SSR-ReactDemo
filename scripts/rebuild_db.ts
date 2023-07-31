const { PrismaClient } = require("@prisma/client");
const data = require("./data.json");
const prisma = new PrismaClient();

async function main() {
  const deletedUserCount = await prisma.product.deleteMany({});
  const products = await prisma.product.createMany({
    data,
  });
  console.log("Ok");
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
