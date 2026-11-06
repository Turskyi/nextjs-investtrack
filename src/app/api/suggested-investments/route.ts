import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const {
  placeholderInvestments,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('../../../../scripts/placeholder-data');
export async function POST() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await prisma.investment.createMany({
      data: placeholderInvestments.map(
        (investment: (typeof placeholderInvestments)[number]) => ({
          ...investment,
          // Slugs are globally unique in the schema, so a fixed seed slug cannot
          // be shared by more than one user's wishlist.
          slug: `${investment.slug}-${userId}`,
          userId,
        }),
      ),
      // Makes repeated clicks (and simultaneous requests) safe.
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: 'Investments seeded successfully 💋',
      created: result.count,
    });
  } catch (error) {
    console.error('Error seeding investments 🤷:', error);
    return NextResponse.json(
      { error: 'Error seeding investments 😢' },
      { status: 500 },
    );
  }
}
