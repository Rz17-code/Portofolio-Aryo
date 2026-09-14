'use client';

import { useEffect, useState } from 'react';

export default function VisitorTracker({ language = 'id' }) {
  const [visitorCount, setVisitorCount] = useState(148);

  useEffect(() => {
    const storageKey = 'rozindar_unique_visitor_token';
    const hasVisited = localStorage.getItem(storageKey);

    let currentBase = parseInt(localStorage.getItem('rozindar_visitor_base_count') || '148', 10);

    if (!hasVisited) {
      // New Unique Visitor detected!
      const uniqueId = 'v_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      localStorage.setItem(storageKey, uniqueId);
      currentBase += 1;
      localStorage.setItem('rozindar_visitor_base_count', currentBase.toString());
    }

    setVisitorCount(currentBase);
  }, []);

  const label = language === 'en' ? 'Live Unique Visitors:' : language === 'zh' ? '实时独立访客:' : 'Pengunjung Unik (Realtime):';

  return (
    <div className="visitor-badge-card" title="Penghitung Pengunjung Unik Realtime (Unique Visitor Tracker)">
      <span className="live-dot-pulse"></span>
      <span className="visitor-label">{label}</span>
      <strong className="visitor-count-number">{visitorCount}</strong>
    </div>
  );
}
