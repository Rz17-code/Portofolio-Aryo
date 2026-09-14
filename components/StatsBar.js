'use client';

import { useEffect, useState, useRef } from 'react';

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

function StatCounter({ target, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, isVisible]);

  return <span>{count}</span>;
}

export default function StatsBar({ stats, language }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!stats || stats.length === 0) return null;

  return (
    <div className="stats-bar-container reveal" ref={containerRef}>
      <div className="stats-grid">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">
              <span className="prefix">{item.prefix}</span>
              <span className="number">
                <StatCounter target={item.target} isVisible={isVisible} />
              </span>
              <span className="suffix">{item.suffix}</span>
            </div>
            <div className="stat-label">{translate(item.label, language)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
