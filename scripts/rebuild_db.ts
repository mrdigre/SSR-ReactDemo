const { PrismaClient } = require('@prisma/client');
const data = require('./data.json');
const prisma = new PrismaClient();

async function main() {
  console.log('Deleting all products');
  await prisma.product.deleteMany({});
  console.log('Creating new products');
  const products = await prisma.product.createMany({
    data,
  });
  console.log({ status: 'ok', products });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

