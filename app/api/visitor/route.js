import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const VISITOR_KEY = 'portfolio:visitor_count';

// Upstash Redis — env: UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
let redis;
try {
  redis = Redis.fromEnv();
} catch {
  redis = null;
}

export async function GET() {
  if (!redis) {
    return NextResponse.json({ count: 0, error: 'unavailable' }, { status: 200 });
  }
  try {
    const count = await redis.get(VISITOR_KEY);
    return NextResponse.json({ count: count ?? 0 });
  } catch (err) {
    console.error('[Visitor GET] Redis error:', err);
    return NextResponse.json({ count: 0, error: 'unavailable' }, { status: 200 });
  }
}

export async function POST() {
  if (!redis) {
    return NextResponse.json({ count: 0, error: 'unavailable' }, { status: 200 });
  }
  try {
    const newCount = await redis.incr(VISITOR_KEY);
    return NextResponse.json({ count: newCount });
  } catch (err) {
    console.error('[Visitor POST] Redis error:', err);
    return NextResponse.json({ count: 0, error: 'unavailable' }, { status: 200 });
  }
}

