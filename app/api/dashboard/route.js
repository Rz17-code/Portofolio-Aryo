import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const VISITOR_KEY = 'portfolio:visitor_count';
const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || 'aryo2024';

let redis;
try {
  redis = Redis.fromEnv();
} catch {
  redis = null;
}

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (password !== DASHBOARD_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!redis) {
      return NextResponse.json({ error: 'Redis unavailable' }, { status: 503 });
    }

    const total = await redis.get(VISITOR_KEY);

    return NextResponse.json({
      total: total ?? 0,
      key: VISITOR_KEY,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[Dashboard] Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
