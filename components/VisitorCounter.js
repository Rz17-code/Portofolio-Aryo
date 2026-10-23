'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * VisitorCounter — komponen penghitung visitor unik per portofolio.
 * - Satu kunjungan per sesi browser (sessionStorage flag).
 * - Graceful fallback jika KV tidak tersedia (dev lokal tanpa env).
 */
export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isNew, setIsNew] = useState(false);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const alreadyVisited = sessionStorage.getItem('portfolio_visited');

    const track = async () => {
      try {
        if (!alreadyVisited) {
          // Kunjungan baru — increment
          const res = await fetch('/api/visitor', { method: 'POST' });
          const data = await res.json();
          sessionStorage.setItem('portfolio_visited', '1');
          setCount(data.count);
          setIsNew(true);
        } else {
          // Kunjungan yang sudah ada — ambil saja
          const res = await fetch('/api/visitor');
          const data = await res.json();
          setCount(data.count);
        }
      } catch {
        // Fallback saat dev lokal (KV belum dikonfigurasi)
        setCount(null);
      }
    };

    track();
  }, []);

  // Animasi angka naik saat count tereset
  useEffect(() => {
    if (count === null) return;
    const start = animatedCount;
    const end = count;
    if (start === end) return;

    const duration = 800;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setAnimatedCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // Jangan render apa-apa kalau KV tidak tersedia
  if (count === null) return null;

  return (
    <div
      className={`visitor-counter${isNew ? ' visitor-counter--new' : ''}`}
      title="Total kunjungan portfolio"
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
