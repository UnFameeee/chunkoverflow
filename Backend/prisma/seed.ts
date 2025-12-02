import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create admin user
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || 'admin123',
    10
  );

  const admin = await prisma.user.upsert({
    where: { username: process.env.ADMIN_USERNAME || 'admin' },
    update: {},
    create: {
      username: process.env.ADMIN_USERNAME || 'admin',
      password: hashedPassword,
    },
  });

  console.log('Created admin user:', admin);

  // Create sample blocks
  const blocks = [
    {
      title: 'Sample Block 1',
      slug: 'sample-block-1',
      summaryDescription: 'This is a sample block for testing',
      fullDescription: 'Full description of the sample block with more details.',
      status: 'PUBLISHED' as const,
    },
    {
      title: 'Sample Block 2',
      slug: 'sample-block-2',
      summaryDescription: 'Another sample block',
      fullDescription: 'More detailed description for the second block.',
      status: 'IN_DEVELOPMENT' as const,
    },
  ];

  for (const block of blocks) {
    await prisma.block.upsert({
      where: { slug: block.slug },
      update: {},
      create: block,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
