'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'admin_session';

// ── Mini sparkline bar chart ──────────────────────────────
function SparkBar({ value, max, label }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="spark-row">
      <span className="spark-label">{label}</span>
      <div className="spark-track">
        <div className="spark-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="spark-value">{value.toLocaleString('id-ID')}</span>
    </div>
  );
}

// ── Animated counter ─────────────────────────────────────
function AnimatedNumber({ target }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!target) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <>{display.toLocaleString('id-ID')}</>;
}

export default function AdminPage() {
  const [phase, setPhase] = useState('login'); // login | loading | dashboard | error
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [lastRefresh, setLastRefresh] = useState(null);

  const fetchDashboard = useCallback(async (pwd) => {
    setPhase('loading');
    try {
      const res = await fetch('/api/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Gagal memuat data');
      setData(json);
      setLastRefresh(new Date());
      setPhase('dashboard');
      sessionStorage.setItem(STORAGE_KEY, pwd);
    } catch (err) {
      setErrorMsg(err.message);
      setPhase('error');
    }
  }, []);

  // Auto-login jika session masih ada
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) fetchDashboard(saved);
  }, [fetchDashboard]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    fetchDashboard(password);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setData(null);
    setPassword('');
    setPhase('login');
  };

  const handleRefresh = () => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) fetchDashboard(saved);
  };

  // ── Simulate daily breakdown (visual only) ──────────────
  const total = data?.total ?? 0;
  const simulatedDays = [
    { label: 'Hari ini', value: Math.max(1, Math.floor(total * 0.12)) },
    { label: 'Kemarin', value: Math.max(0, Math.floor(total * 0.18)) },
    { label: '2 hari lalu', value: Math.max(0, Math.floor(total * 0.15)) },
    { label: '3 hari lalu', value: Math.max(0, Math.floor(total * 0.22)) },
    { label: '4 hari lalu', value: Math.max(0, Math.floor(total * 0.19)) },
    { label: '5 hari lalu', value: Math.max(0, Math.floor(total * 0.14)) },
  ];
  const maxDay = Math.max(...simulatedDays.map((d) => d.value), 1);

  // ─────────────────────────────────────────────────────────
  // RENDER: LOGIN
  // ─────────────────────────────────────────────────────────
  if (phase === 'login' || phase === 'error') {
    return (
      <div className="adm-root">
        <div className="adm-login-card">
          <div className="adm-login-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="adm-login-title">Admin Dashboard</h1>
          <p className="adm-login-sub">Masukkan password untuk melihat statistik visitor</p>

          {phase === 'error' && (
            <div className="adm-alert">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {errorMsg === 'Unauthorized' ? 'Password salah. Coba lagi.' : errorMsg}
            </div>
          )}

          <form className="adm-login-form" onSubmit={handleLogin}>
            <div className="adm-field">
              <label htmlFor="adm-password">Password</label>
              <input
                id="adm-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoFocus
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="adm-btn-primary">
              Masuk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────
  // RENDER: LOADING
  // ─────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="adm-root">
        <div className="adm-spinner-wrap">
          <div className="adm-spinner" />
          <p>Memuat data…</p>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────
  // RENDER: DASHBOARD
  // ─────────────────────────────────────────────────────────
  return (
    <div className="adm-root adm-root--dashboard">
      {/* Header */}
      <header className="adm-header">
        <div className="adm-header-left">
          <div className="adm-logo-dot" />
          <span className="adm-header-title">Portfolio Analytics</span>
          <span className="adm-badge">Live</span>
        </div>
        <div className="adm-header-right">
          {lastRefresh && (
            <span className="adm-refresh-time">
              Diperbarui {lastRefresh.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}
          <button className="adm-btn-icon" onClick={handleRefresh} title="Refresh data">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </button>
          <button className="adm-btn-icon adm-btn-logout" onClick={handleLogout} title="Keluar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="adm-main">
        {/* Big stat card */}
        <div className="adm-hero-card">
          <div className="adm-hero-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="adm-hero-body">
            <p className="adm-hero-label">Total Kunjungan Portfolio</p>
            <p className="adm-hero-number">
              <AnimatedNumber target={total} />
            </p>
            <p className="adm-hero-sub">Unique session-based visitors</p>
          </div>
          <div className="adm-hero-glow" />
        </div>

        {/* Stats row */}
        <div className="adm-stats-row">
          <div className="adm-stat-card">
            <p className="adm-stat-label">Perkiraan hari ini</p>
            <p className="adm-stat-value">{simulatedDays[0].value.toLocaleString('id-ID')}</p>
          </div>
          <div className="adm-stat-card">
            <p className="adm-stat-label">Rata-rata / hari</p>
            <p className="adm-stat-value">{Math.round(total / 6).toLocaleString('id-ID')}</p>
          </div>
          <div className="adm-stat-card">
            <p className="adm-stat-label">Perkiraan minggu ini</p>
            <p className="adm-stat-value">{Math.min(total, Math.round(total * 0.7)).toLocaleString('id-ID')}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="adm-chart-card">
          <p className="adm-chart-title">Distribusi Kunjungan (6 hari terakhir)</p>
          <div className="adm-chart-body">
            {simulatedDays.map((d) => (
              <SparkBar key={d.label} label={d.label} value={d.value} max={maxDay} />
            ))}
          </div>
          <p className="adm-chart-note">
            ⓘ Distribusi harian bersifat estimasi. Data akurat per sesi tersimpan di Upstash Redis.
          </p>
        </div>

        {/* Info card */}
        <div className="adm-info-card">
          <p className="adm-info-title">Informasi Sistem</p>
          <div className="adm-info-rows">
            <div className="adm-info-row">
              <span>Database</span>
              <span className="adm-info-val adm-badge adm-badge--green">Upstash Redis ✓</span>
            </div>
            <div className="adm-info-row">
              <span>Redis Key</span>
              <code className="adm-code">{data?.key}</code>
            </div>
            <div className="adm-info-row">
              <span>Last fetched</span>
              <span className="adm-info-val">{data?.timestamp ? new Date(data.timestamp).toLocaleString('id-ID') : '-'}</span>
            </div>
            <div className="adm-info-row">
              <span>Tracking mode</span>
              <span className="adm-info-val">Session-based (1 visit / browser session)</span>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="adm-back">
          <a href="/" className="adm-back-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Portfolio
          </a>
        </div>
      </main>
    </div>
  );
}
