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

  // Create sample posts
  const posts = [
    {
      title: 'React Performance Optimization',
      slug: 'react-performance-optimization',
      summaryDescription: 'Learn how to optimize your React applications for better performance',
      fullDescription: 'Comprehensive guide to React performance optimization techniques including memoization, code splitting, and lazy loading.',
      status: 'PUBLISHED' as const,
    },
    {
      title: 'TypeScript Best Practices',
      slug: 'typescript-best-practices',
      summaryDescription: 'Essential TypeScript patterns for type-safe applications',
      fullDescription: 'Explore TypeScript best practices for building scalable and maintainable applications.',
      status: 'PUBLISHED' as const,
    },
    {
      title: 'NestJS Architecture Patterns',
      slug: 'nestjs-architecture-patterns',
      summaryDescription: 'Building scalable backend applications with NestJS',
      fullDescription: 'Deep dive into NestJS architecture patterns for enterprise-grade applications.',
      status: 'IN_DEVELOPMENT' as const,
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
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
