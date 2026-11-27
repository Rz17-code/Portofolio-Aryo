'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

// Animasi alur kerja Account Payable di bagian atas halaman. Isinya diambil dari poin-poin CV.

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

const copy = {
  title: { id: 'Alur Account Payable', en: 'Accounts Payable Flow', zh: '应付账款流程' },
  running: { id: 'Diproses', en: 'In progress', zh: '处理中' },
  done: { id: 'Selesai', en: 'Completed', zh: '已完成' }
};

const steps = [
  {
    key: 'po',
    title: { id: 'Purchase Order', en: 'Purchase Order', zh: '采购订单' },
    note: { id: 'Acuan pencocokan', en: 'Matching reference', zh: '核对依据' }
  },
  {
    key: 'receipt',
    title: { id: 'Penerimaan Barang', en: 'Goods Receipt', zh: '收货记录' },
    note: { id: 'Dicocokkan dengan PO', en: 'Matched against the PO', zh: '与采购订单核对' }
  },
  {
    key: 'payment',
    title: { id: 'Pembayaran Vendor', en: 'Vendor Payment', zh: '供应商付款' },
    note: 'BNI Direct · myBCA · Kopra'
  },
  {
    key: 'reconciliation',
    title: { id: 'Rekonsiliasi Bank', en: 'Bank Reconciliation', zh: '银行对账' },
    note: { id: 'Mingguan, minimalkan selisih', en: 'Weekly, fewer discrepancies', zh: '每周进行，减少差异' }
  }
];

const facts = [
  { id: '±20 transaksi/hari', en: '~20 transactions/day', zh: '每日约20笔交易' },
  { id: 'SLA 1 jam/transaksi', en: '1-hour SLA each', zh: '每笔1小时 SLA' }
];

const STEP_MS = 1400;
// Setelah semua langkah selesai, tahan beberapa ketukan sebelum mengulang.
const HOLD_TICKS = 2;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const subscribeReducedMotion = (onChange) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

export default function ApWorkflow({ language }) {
  const [tick, setTick] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );
  const t = (value) => translate(value, language);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => setTick((current) => (current + 1) % (steps.length + HOLD_TICKS)), STEP_MS);
    return () => clearInterval(timer);
  }, [reducedMotion]);

  // Jumlah langkah yang sudah selesai; sama dengan steps.length berarti semuanya selesai.
  const completed = reducedMotion ? steps.length : Math.min(tick, steps.length);
  const allDone = completed === steps.length;

  return (
    <aside className="ap-flow" aria-label={t(copy.title)}>
      <div className="ap-flow-head">
        <p className="ap-flow-title">{t(copy.title)}</p>
        <span className={`ap-flow-status${allDone ? ' is-done' : ''}`} aria-hidden="true">{t(allDone ? copy.done : copy.running)}</span>
      </div>
      <div className="ap-flow-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${completed / steps.length})` }} />
      </div>

      <ol className="ap-flow-steps">
        {steps.map((step, index) => {
          const state = index < completed ? 'done' : index === completed ? 'active' : 'waiting';
          return (
            <li className={`ap-step is-${state}`} key={step.key}>
              <span className="ap-step-marker" aria-hidden="true">
                {state === 'done' ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : index + 1}
              </span>
              <div className="ap-step-text">
                <strong>{t(step.title)}</strong>
                <span>{t(step.note)}</span>
              </div>
            </li>
          );
        })}
      </ol>

      <ul className="ap-flow-facts">
        {facts.map((fact) => <li key={fact.id}>{t(fact)}</li>)}
      </ul>
    </aside>
  );
}
