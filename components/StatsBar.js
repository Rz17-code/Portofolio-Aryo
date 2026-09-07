'use client';

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

export default function StatsBar({ stats, language }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="stats-bar-container reveal">
      <div className="stats-grid">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">
              <span className="prefix">{item.prefix}</span>
              <span className="number">{item.target}</span>
              <span className="suffix">{item.suffix}</span>
            </div>
            <div className="stat-label">{translate(item.label, language)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
