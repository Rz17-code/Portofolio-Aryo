'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * VisitorCounter — IP-based deduplication (server-side, 24h TTL).
 * Client hanya trigger POST sekali per mount; server yang memutuskan
 * apakah IP ini sudah terhitung atau belum.
 */
export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isNew, setIsNew] = useState(false);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const track = async () => {
      try {
        // Server menentukan apakah IP ini sudah visit (tidak perlu sessionStorage)
        const res = await fetch('/api/visitor', { method: 'POST' });
        const data = await res.json();
        if (typeof data.count === 'number') {
          setCount(data.count);
          setIsNew(data.isNew === true);
        }
      } catch {
        // Fallback saat offline / dev tanpa Redis
        setCount(null);
      }
    };

    track();
  }, []);

  // Animasi angka naik
  useEffect(() => {
    if (count === null) return;
    const end = count;
    const duration = 900;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [count]);

  if (count === null) return null;

  return (
    <div
      className={`visitor-counter${isNew ? ' visitor-counter--new' : ''}`}
      title={isNew ? 'Kunjungan baru terhitung!' : 'Total kunjungan portfolio (IP-based, 24h)'}
      aria-label={`Portfolio dilihat ${animatedCount} kali`}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="visitor-counter__number">
        {animatedCount.toLocaleString('id-ID')}
      </span>
      <span className="visitor-counter__label">views</span>
    </div>
  );
}
