'use client';

import { useEffect, useState, useRef } from 'react';

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

const LOCALES = { id: 'id-ID', en: 'en-US', zh: 'zh-CN' };
// Jeda sebelum mulai berhitung, supaya kartunya sempat muncul dulu.
const START_DELAY_MS = 600;
const DURATION_MS = 1500;

// target: satu angka, atau rentang [dari, sampai].
function StatCounter({ target, isVisible, language }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : DURATION_MS;
    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = duration ? Math.min((timestamp - startTimestamp) / duration, 1) : 1;
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible]);

  const format = (end) => {
    const factor = Number.isInteger(end) ? 1 : 10;
    const current = progress >= 1 ? end : Math.floor(end * progress * factor) / factor;
    return current.toLocaleString(LOCALES[language], { maximumFractionDigits: 1 });
  };

  return <span>{Array.isArray(target) ? target.map(format).join('–') : format(target)}</span>;
}

export default function StatsBar({ stats, language }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timer = setTimeout(() => setIsVisible(true), START_DELAY_MS);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (!stats || stats.length === 0) return null;

  return (
    <div className="stats-bar-container" ref={containerRef}>
      <div className="stats-grid">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">
              <span className="prefix">{translate(item.prefix, language)}</span>
              <span className="number">
                <StatCounter target={translate(item.target, language)} isVisible={isVisible} language={language} />
              </span>
              <span className="suffix">{translate(item.suffix, language)}</span>
            </div>
            <div className="stat-label">{translate(item.label, language)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
