'use client';

import { useState } from 'react';

const PTKP_RATES = {
  'TK0': { name: 'TK/0 (Lajang, Tanpa Tanggungan)', val: 54000000 },
  'TK1': { name: 'TK/1 (Lajang, 1 Tanggungan)', val: 58500000 },
  'TK2': { name: 'TK/2 (Lajang, 2 Tanggungan)', val: 63000000 },
  'TK3': { name: 'TK/3 (Lajang, 3 Tanggungan)', val: 67500000 },
  'K0': { name: 'K/0 (Kawin, Tanpa Tanggungan)', val: 58500000 },
  'K1': { name: 'K/1 (Kawin, 1 Tanggungan)', val: 63000000 },
  'K2': { name: 'K/2 (Kawin, 2 Tanggungan)', val: 67500000 },
  'K3': { name: 'K/3 (Kawin, 3 Tanggungan)', val: 72000000 },
};

const ASSET_GROUPS = {
  'k1': { name: 'Kelompok 1 (Masa 4 Tahun)', years: 4, slRate: 0.25, dbRate: 0.50 },
  'k2': { name: 'Kelompok 2 (Masa 8 Tahun)', years: 8, slRate: 0.125, dbRate: 0.25 },
  'k3': { name: 'Kelompok 3 (Masa 16 Tahun)', years: 16, slRate: 0.0625, dbRate: 0.125 },
  'k4': { name: 'Kelompok 4 (Masa 20 Tahun)', years: 20, slRate: 0.05, dbRate: 0.10 },
  'bg_perm': { name: 'Bangunan Permanen (20 Tahun)', years: 20, slRate: 0.05, dbRate: null },
  'bg_non': { name: 'Bangunan Non-Permanen (10 Tahun)', years: 10, slRate: 0.10, dbRate: null },
};

export default function TaxDepreciationModal({ language = 'id', onClose }) {
  const [activeTab, setActiveTab] = useState('pph21'); // 'pph21', 'pph22_final', 'depreciation'

  // --- PPh 21 States ---
  const [monthlySalary, setMonthlySalary] = useState(12000000);
  const [monthlyAllowance, setMonthlyAllowance] = useState(2000000);
  const [ptkpCode, setPtkpCode] = useState('TK0');

  // --- PPh 22 & Final States ---
  const [taxType, setTaxType] = useState('umkm'); // 'umkm', 'sewa', 'bendahara', 'konstruksi'
  const [grossAmount, setGrossAmount] = useState(100000000);
  const [isUMKMIndividual, setIsUMKMIndividual] = useState(true);
  const [cumulativeAnnualTurnover, setCumulativeAnnualTurnover] = useState(300000000);

  // --- Depreciation States ---
  const [assetName, setAssetName] = useState('Mesin Produksi / Laptop Kantor');
  const [assetCost, setAssetCost] = useState(80000000);
  const [assetGroup, setAssetGroup] = useState('k1');
  const [depMethod, setDepMethod] = useState('garis_lurus'); // 'garis_lurus' | 'saldo_menurun'

  // --- PPh 21 Calculation (UU HPP No. 7/2021) ---
  const annualGross = (monthlySalary + monthlyAllowance) * 12;
  const jabFee = Math.min(annualGross * 0.05, 6000000);
  const annualNet = annualGross - jabFee;
  const ptkpVal = PTKP_RATES[ptkpCode].val;
  const pkp = Math.max(0, annualNet - ptkpVal);

  const calcPPh21Tiers = (pkpAmount) => {
    let remain = pkpAmount;
    let t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0;

    if (remain > 0) {
      t1 = Math.min(remain, 60000000) * 0.05;
      remain -= Math.min(remain, 60000000);
    }
    if (remain > 0) {
      t2 = Math.min(remain, 190000000) * 0.15;
      remain -= Math.min(remain, 190000000);
    }
    if (remain > 0) {
      t3 = Math.min(remain, 250000000) * 0.25;
      remain -= Math.min(remain, 250000000);
    }
    if (remain > 0) {
      t4 = Math.min(remain, 4500000000) * 0.30;
      remain -= Math.min(remain, 4500000000);
    }
    if (remain > 0) {
      t5 = remain * 0.35;
    }
    return { t1, t2, t3, t4, t5, total: t1 + t2 + t3 + t4 + t5 };
  };

  const pph21Result = calcPPh21Tiers(pkp);
  const pph21Monthly = pph21Result.total / 12;
  const effectiveTaxRate = annualGross > 0 ? ((pph21Result.total / annualGross) * 100).toFixed(2) : '0';

  // --- PPh 22 & Final Calculation ---
  let pphFinalRate = 0;
  let pphFinalLabel = '';
  let taxableGross = grossAmount;

  if (taxType === 'umkm') {
    pphFinalRate = 0.005; // 0.5% PP 55/2022
    pphFinalLabel = 'PPh Final UMKM (PP 55/2022)';
    if (isUMKMIndividual) {
      // OP UMKM free turnover up to 500m per year
      const freeLimitRemaining = Math.max(0, 500000000 - cumulativeAnnualTurnover);
      taxableGross = Math.max(0, grossAmount - freeLimitRemaining);
    }
  } else if (taxType === 'sewa') {
    pphFinalRate = 0.10; // 10% Sewa Bangunan
    pphFinalLabel = 'PPh Final Sewa Tanah & Bangunan (Pasal 4(2))';
  } else if (taxType === 'bendahara') {
    pphFinalRate = 0.015; // 1.5% Bendaharaan
    pphFinalLabel = 'PPh Pasal 22 Pemungutan Bendahara (1.5%)';
  } else if (taxType === 'konstruksi') {
    pphFinalRate = 0.0265; // 2.65% Kualifikasi Menengah
    pphFinalLabel = 'PPh Final Jasa Konstruksi (Kualifikasi Menengah)';
  }

  const pphFinalAmount = taxableGross * pphFinalRate;
  const netReceived = grossAmount - pphFinalAmount;

  // --- Depreciation Schedule Calculation (PMK 72/2023) ---
  const groupMeta = ASSET_GROUPS[assetGroup];
  const isDecliningAllowed = groupMeta.dbRate !== null;
  const currentMethod = (!isDecliningAllowed && depMethod === 'saldo_menurun') ? 'garis_lurus' : depMethod;

  const generateDepSchedule = () => {
    const schedule = [];
    let bookValue = assetCost;
    let accumDep = 0;

    for (let yr = 1; yr <= groupMeta.years; yr++) {
      let annualDep = 0;
      if (currentMethod === 'garis_lurus') {
        annualDep = assetCost * groupMeta.slRate;
      } else {
        if (yr === groupMeta.years) {
          annualDep = bookValue; // Sisa nilai di-writeoff penuh di tahun terakhir
        } else {
          annualDep = bookValue * groupMeta.dbRate;
        }
      }

      annualDep = Math.min(annualDep, bookValue);
      accumDep += annualDep;
      bookValue -= annualDep;

      schedule.push({
        year: yr,
        annualDep,
        accumDep,
        bookValue: Math.max(0, bookValue)
      });
    }
    return schedule;
  };

  const depSchedule = generateDepSchedule();

  const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content tax-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-badge">🇮🇩 Modul Simulasi Perpajakan & Aset Indonesia</span>
            <h2>Kalkulator Pajak (PPh 21, 22, Final) & Penyusutan Aset</h2>
            <p className="modal-subtitle">Berbasis aturan UU Harmonisasi Peraturan Perpajakan (UU HPP No. 7/2021) & PMK 72/2023</p>
          </div>
          <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Tutup modal">×</button>
        </div>

        {/* Modal Tabs */}
        <div className="tax-tabs">
          <button
            type="button"
            className={activeTab === 'pph21' ? 'active' : ''}
            onClick={() => setActiveTab('pph21')}
          >
            👤 PPh Pasal 21 (Karyawan)
          </button>
          <button
            type="button"
            className={activeTab === 'pph22_final' ? 'active' : ''}
            onClick={() => setActiveTab('pph22_final')}
          >
            🏢 PPh 22 & PPh Final (UMKM / Sewa)
          </button>
          <button
            type="button"
            className={activeTab === 'depreciation' ? 'active' : ''}
            onClick={() => setActiveTab('depreciation')}
          >
            📉 Penyusutan Aset Tetap (Fiskal)
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="tax-modal-body">
          {/* TAB 1: PPh 21 */}
          {activeTab === 'pph21' && (
            <div className="tax-tab-view">
              <div className="tax-grid">
                {/* Inputs */}
                <div className="tax-form-section">
                  <h4>Parameter Gaji & Status PTKP</h4>

                  <div className="form-group">
                    <label htmlFor="m-salary">Gaji Pokok Bulanan</label>
                    <input
                      id="m-salary"
                      type="number"
                      step="500000"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="m-allowance">Tunjangan Bulanan (Tetap/Variabel)</label>
                    <input
                      id="m-allowance"
                      type="number"
                      step="250000"
                      value={monthlyAllowance}
                      onChange={(e) => setMonthlyAllowance(Number(e.target.value))}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="m-ptkp">Status PTKP (Penghasilan Tidak Kena Pajak)</label>
                    <select
                      id="m-ptkp"
                      value={ptkpCode}
                      onChange={(e) => setPtkpCode(e.target.value)}
                    >
                      {Object.entries(PTKP_RATES).map(([code, item]) => (
                        <option key={code} value={code}>
                          {item.name} ({formatIDR(item.val)})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="tax-info-box">
                    <strong>📌 Ketentuan UU HPP:</strong>
                    <p>• Biaya Jabatan: 5% dari Gaji Bruto (Maksimal Rp6.000.000/tahun).</p>
                    <p>• Tarif progresif Pasal 17: 5% (s.d 60jt), 15% (60-250jt), 25% (250-500jt), 30% (500jt-5M), 35% (&gt;5M).</p>
                  </div>
                </div>

                {/* Calculation Output */}
                <div className="tax-results-section">
                  <h4>Hasil Perhitungan PPh 21 Terutang</h4>

                  <div className="result-stat-cards">
                    <div className="result-stat-card primary">
                      <span>PPh 21 Potongan Bulanan</span>
                      <strong>{formatIDR(pph21Monthly)}</strong>
                      <small>Tarif Efektif Rata-rata: {effectiveTaxRate}%</small>
                    </div>

                    <div className="result-stat-card">
                      <span>Total PPh 21 Per Tahun</span>
                      <strong>{formatIDR(pph21Result.total)}</strong>
                      <small>Penghasilan Kena Pajak (PKP): {formatIDR(pkp)}</small>
                    </div>
                  </div>

                  <div className="breakdown-list">
                    <h5>Rincian Perhitungan Fiskal Tahunan:</h5>
                    <div className="b-row"><span>Gaji Bruto Tahunan</span><strong>{formatIDR(annualGross)}</strong></div>
                    <div className="b-row"><span>Biaya Jabatan (5%)</span><strong>- {formatIDR(jabFee)}</strong></div>
                    <div className="b-row"><span>Penghasilan Netto Tahunan</span><strong>{formatIDR(annualNet)}</strong></div>
                    <div className="b-row"><span>PTKP ({ptkpCode})</span><strong>- {formatIDR(ptkpVal)}</strong></div>
                    <div className="b-row highlight"><span>Penghasilan Kena Pajak (PKP)</span><strong>{formatIDR(pkp)}</strong></div>

                    {pkp > 0 && (
                      <div className="tier-breakdown">
                        <p className="t-title">Lapisan Tarif Progresif UU HPP:</p>
                        {pph21Result.t1 > 0 && <div><span>Lapisan 1 (5% s.d 60jt):</span> <strong>{formatIDR(pph21Result.t1)}</strong></div>}
                        {pph21Result.t2 > 0 && <div><span>Lapisan 2 (15% 60-250jt):</span> <strong>{formatIDR(pph21Result.t2)}</strong></div>}
                        {pph21Result.t3 > 0 && <div><span>Lapisan 3 (25% 250-500jt):</span> <strong>{formatIDR(pph21Result.t3)}</strong></div>}
                        {pph21Result.t4 > 0 && <div><span>Lapisan 4 (30% 500jt-5M):</span> <strong>{formatIDR(pph21Result.t4)}</strong></div>}
                        {pph21Result.t5 > 0 && <div><span>Lapisan 5 (35% &gt;5M):</span> <strong>{formatIDR(pph21Result.t5)}</strong></div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PPh 22 & Final */}
          {activeTab === 'pph22_final' && (
            <div className="tax-tab-view">
              <div className="tax-grid">
                {/* Inputs */}
                <div className="tax-form-section">
                  <h4>Jenis Transaksi Perpajakan</h4>

                  <div className="form-group">
                    <label htmlFor="tax-type-select">Skema Perhitungan Pajak</label>
                    <select
                      id="tax-type-select"
                      value={taxType}
                      onChange={(e) => setTaxType(e.target.value)}
                    >
                      <option value="umkm">PPh Final UMKM (0.5% - PP 55/2022)</option>
                      <option value="sewa">PPh Final Sewa Tanah & Bangunan (10%)</option>
                      <option value="bendahara">PPh Pasal 22 Bendaharawan Pemerintah (1.5%)</option>
                      <option value="konstruksi">PPh Final Jasa Konstruksi (2.65%)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="gross-amt">Nilai Transaksi / Omset Bruto (IDR)</label>
                    <input
                      id="gross-amt"
                      type="number"
                      step="5000000"
                      value={grossAmount}
                      onChange={(e) => setGrossAmount(Number(e.target.value))}
                    />
                  </div>

                  {taxType === 'umkm' && (
                    <>
                      <div className="form-group checkbox-group">
                        <label>
                          <input
                            type="checkbox"
                            checked={isUMKMIndividual}
                            onChange={(e) => setIsUMKMIndividual(e.target.checked)}
                          />
                          <span>Wajib Pajak Orang Pribadi (Batas Bebas Pajak s.d Rp500 Juta/Tahun)</span>
                        </label>
                      </div>

                      {isUMKMIndividual && (
                        <div className="form-group">
                          <label htmlFor="cum-turnover">Omset Kumulatif Tahun Ini Sebelum Transaksi Ini</label>
                          <input
                            id="cum-turnover"
                            type="number"
                            step="10000000"
                            value={cumulativeAnnualTurnover}
                            onChange={(e) => setCumulativeAnnualTurnover(Number(e.target.value))}
                          />
                        </div>
                      )}
                    </>
                  )}

                  <div className="tax-info-box">
                    <strong>💡 Insight Regulasi:</strong>
                    <p>• <strong>PP 55/2022</strong>: UMKM Orang Pribadi mendapat fasilitas omset tidak kena pajak s.d Rp500 juta pertahun.</p>
                    <p>• <strong>PPh Pasal 22 Bendahara</strong> dipotong sebesar 1.5% dari harga jual tidak termasuk PPN.</p>
                  </div>
                </div>

                {/* Results */}
                <div className="tax-results-section">
                  <h4>Kewajiban Pemotongan / Setoran Pajak</h4>

                  <div className="result-stat-cards">
                    <div className="result-stat-card primary">
                      <span>Beban Pajak Terutang</span>
                      <strong>{formatIDR(pphFinalAmount)}</strong>
                      <small>Tarif: {(pphFinalRate * 100).toFixed(2)}% ({pphFinalLabel})</small>
                    </div>

                    <div className="result-stat-card">
                      <span>Nilai Netto Diterima</span>
                      <strong>{formatIDR(netReceived)}</strong>
                      <small>Setelah pemotongan pajak</small>
                    </div>
                  </div>

                  <div className="breakdown-list">
                    <h5>Rincian Transaksi:</h5>
                    <div className="b-row"><span>Nilai Bruto Transaksi</span><strong>{formatIDR(grossAmount)}</strong></div>
                    {taxType === 'umkm' && isUMKMIndividual && (
                      <div className="b-row"><span>DPP Kena Pajak (setelah sisa batas Rp500M)</span><strong>{formatIDR(taxableGross)}</strong></div>
                    )}
                    <div className="b-row highlight"><span>Potongan Pajak</span><strong>{formatIDR(pphFinalAmount)}</strong></div>
                    <div className="b-row"><span>Kas Netto Diterima / Dibayar</span><strong>{formatIDR(netReceived)}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Depreciation */}
          {activeTab === 'depreciation' && (
            <div className="tax-tab-view">
              <div className="dep-grid">
                {/* Inputs */}
                <div className="tax-form-section">
                  <h4>Parameter Aset Tetap (PMK 72/2023)</h4>

                  <div className="form-group">
                    <label htmlFor="asset-name">Nama Aset / Inventaris</label>
                    <input
                      id="asset-name"
                      type="text"
                      value={assetName}
                      onChange={(e) => setAssetName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="asset-cost">Harga Perolehan Aset (IDR)</label>
                    <input
                      id="asset-cost"
                      type="number"
                      step="5000000"
                      value={assetCost}
                      onChange={(e) => setAssetCost(Number(e.target.value))}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="asset-group-select">Kelompok Harta Fiskal</label>
                    <select
                      id="asset-group-select"
                      value={assetGroup}
                      onChange={(e) => setAssetGroup(e.target.value)}
                    >
                      {Object.entries(ASSET_GROUPS).map(([key, grp]) => (
                        <option key={key} value={key}>{grp.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Metode Penyusutan Fiskal</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="depMethod"
                          value="garis_lurus"
                          checked={currentMethod === 'garis_lurus'}
                          onChange={() => setDepMethod('garis_lurus')}
                        />
                        <span>Garis Lurus (Straight Line - {(groupMeta.slRate * 100).toFixed(2)}%)</span>
                      </label>

                      {isDecliningAllowed ? (
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="depMethod"
                            value="saldo_menurun"
                            checked={currentMethod === 'saldo_menurun'}
                            onChange={() => setDepMethod('saldo_menurun')}
                          />
                          <span>Saldo Menurun (Declining Balance - {(groupMeta.dbRate * 100).toFixed(2)}%)</span>
                        </label>
                      ) : (
                        <small className="disabled-note">⚠️ Aset bangunan hanya diperbolehkan menggunakan metode Garis Lurus menurut UU HPP.</small>
                      )}
                    </div>
                  </div>
                </div>

                {/* Schedule Table */}
                <div className="tax-results-section">
                  <h4>Jadwal Penyusutan Fiskal & Nilai Buku</h4>

                  <div className="dep-schedule-table-wrapper">
                    <table className="dep-table">
                      <thead>
                        <tr>
                          <th>Tahun</th>
                          <th>Beban Penyusutan</th>
                          <th>Akumulasi Penyusutan</th>
                          <th>Nilai Buku Akhir Tahun</th>
                        </tr>
                      </thead>
                      <tbody>
                        {depSchedule.map((row) => (
                          <tr key={row.year}>
                            <td>Tahun Ke-{row.year}</td>
                            <td>{formatIDR(row.annualDep)}</td>
                            <td>{formatIDR(row.accumDep)}</td>
                            <td className="highlight-cell">{formatIDR(row.bookValue)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span>💡 Dikembangkan berdasarkan standar Brevet Pajak A&B & Regulasi Fiskal Indonesia 2024/2026.</span>
          <button className="cv-btn" type="button" onClick={onClose}>Tutup Kalkulator</button>
        </div>
      </div>
    </div>
  );
}
