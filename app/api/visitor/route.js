import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

const VISITOR_KEY = 'portfolio:visitor_count';
const IP_TTL = 60 * 60 * 24; // 24 jam dalam detik

let redis;
try {
  redis = Redis.fromEnv();
} catch {
  redis = null;
}

// Ambil IP dari header Vercel/Next.js
function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0]?.trim() || real || '0.0.0.0';
  return ip;
}

// Hash IP untuk privasi (tidak simpan IP asli)
function hashIp(ip) {
  return createHash('sha256').update(ip + 'portfolio-salt-rhs').digest('hex').slice(0, 16);
}

export async function GET() {
  if (!redis) {
    return NextResponse.json({ count: 0, error: 'unavailable' });
  }
  try {
    const count = await redis.get(VISITOR_KEY);
    return NextResponse.json({ count: count ?? 0 });
  } catch (err) {
    console.error('[Visitor GET] Redis error:', err);
    return NextResponse.json({ count: 0, error: 'unavailable' });
  }
}

export async function POST(request) {
  if (!redis) {
    return NextResponse.json({ count: 0, isNew: false, error: 'unavailable' });
  }
  try {
    const ip = getClientIp(request);
    const ipHash = hashIp(ip);
    const ipKey = `portfolio:ip:${ipHash}`;

    // Cek apakah IP ini sudah visit dalam 24 jam terakhir
    const alreadyVisited = await redis.exists(ipKey);

    if (alreadyVisited) {
      // Sudah visit — kembalikan count saja tanpa increment
      const count = await redis.get(VISITOR_KEY);
      return NextResponse.json({ count: count ?? 0, isNew: false });
    }

    // IP baru / sudah lebih dari 24 jam — increment + set TTL
    const [newCount] = await Promise.all([
      redis.incr(VISITOR_KEY),
      redis.set(ipKey, 1, { ex: IP_TTL }),
    ]);

    return NextResponse.json({ count: newCount, isNew: true });
  } catch (err) {
    console.error('[Visitor POST] Redis error:', err);
    return NextResponse.json({ count: 0, isNew: false, error: 'unavailable' });
  }
}
