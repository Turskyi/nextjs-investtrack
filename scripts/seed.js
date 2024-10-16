// eslint-disable-next-line @typescript-eslint/no-require-imports
const { placeholderInvestments } = require("./placeholder-data");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderInvestments.map(async (investment) => {
      await prisma.investment.upsert({
        where: {
          slug: investment.slug,
        },
        update: investment,
        create: investment,
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
