'use client';

import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

const translate = (val, lang) => (typeof val === 'object' ? val[lang] || val.id : val);

export default function FinancialSimulator({ language }) {
  const { simulatorDefaults, translations } = PORTFOLIO_CONFIG;
  const t = (key) => translate(translations[key] || key, language);

  const [baseRevenue, setBaseRevenue] = useState(simulatorDefaults.baseRevenue);
  const [expectedGrowth, setExpectedGrowth] = useState(simulatorDefaults.expectedGrowth);
  const [operatingMargin, setOperatingMargin] = useState(simulatorDefaults.operatingMargin);
  const [activeTab, setActiveTab] = useState('forecast'); // 'forecast', 'capital', 'ratios'

  // Ratios calculator states
  const [currentAssets, setCurrentAssets] = useState(150000);
  const [currentLiabilities, setCurrentLiabilities] = useState(75000);
  const [netIncome, setNetIncome] = useState(50000);
  const [revenue, setRevenue] = useState(250000);

  const resetVariables = () => {
    setBaseRevenue(simulatorDefaults.baseRevenue);
    setExpectedGrowth(simulatorDefaults.expectedGrowth);
    setOperatingMargin(simulatorDefaults.operatingMargin);
  };

  // Calculate 5-year forecast
  const years = [1, 2, 3, 4, 5];
  const forecastData = years.map((yr) => {
    const rev = baseRevenue * Math.pow(1 + expectedGrowth / 100, yr - 1);
    const net = rev * (operatingMargin / 100);
    return { year: `Year ${yr}`, revenue: rev, netIncome: net };
  });

  const maxForecastRev = Math.max(...forecastData.map((d) => d.revenue));

  // Capital breakdown
  const marginAmt = baseRevenue * (operatingMargin / 100);
  const cogsAmt = baseRevenue * 0.5;
  const expansionAmt = baseRevenue * 0.15;
  const gaAmt = Math.max(0, baseRevenue - marginAmt - cogsAmt - expansionAmt);

  // Ratio calculations
  const calculatedCurrentRatio = currentLiabilities > 0 ? (currentAssets / currentLiabilities).toFixed(2) : 'N/A';
  const calculatedNetMargin = revenue > 0 ? ((netIncome / revenue) * 100).toFixed(1) : 'N/A';

  const formatCurrency = (val) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'id-ID', {
      style: 'currency',
      currency: language === 'en' ? 'USD' : 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="simulator-wrapper reveal">
      <div className="simulator-header">
        <div>
          <p className="sub-tag">{t('subDemo')}</p>
          <h2>{t('titleDemo')}</h2>
          <p className="desc-text">{t('descDemo')}</p>
        </div>
      </div>

      <div className="simulator-body">
        {/* Controls Sidebar */}
        <aside className="simulator-controls">
          <div className="controls-title">
            <h3>⚙️ {t('simHeader')}</h3>
            <span>{t('simSub')}</span>
          </div>

          <div className="control-group">
            <label>
              <span>{t('simRevenue')}</span>
              <strong>{formatCurrency(baseRevenue)}</strong>
            </label>
            <input
              type="range"
              min="500000"
              max="10000000"
              step="250000"
              value={baseRevenue}
              onChange={(e) => setBaseRevenue(Number(e.target.value))}
            />
          </div>

          <div className="control-group">
            <label>
              <span>{t('simGrowth')}</span>
              <strong>{expectedGrowth}%</strong>
            </label>
            <input
              type="range"
              min="0"
              max="40"
              step="1"
              value={expectedGrowth}
              onChange={(e) => setExpectedGrowth(Number(e.target.value))}
            />
          </div>

          <div className="control-group">
            <label>
              <span>{t('simMargin')}</span>
              <strong>{operatingMargin}%</strong>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={operatingMargin}
              onChange={(e) => setOperatingMargin(Number(e.target.value))}
            />
          </div>

          <button type="button" className="sim-reset-btn" onClick={resetVariables}>
            ↺ {t('simReset')}
          </button>
        </aside>

        {/* Display Panel */}
        <main className="simulator-display">
          <div className="sim-tabs">
            <button
              className={activeTab === 'forecast' ? 'active' : ''}
              onClick={() => setActiveTab('forecast')}
            >
              📊 {t('simTabForecast')}
            </button>
            <button
              className={activeTab === 'capital' ? 'active' : ''}
              onClick={() => setActiveTab('capital')}
            >
              🍕 {t('simTabCapital')}
            </button>
            <button
              className={activeTab === 'ratios' ? 'active' : ''}
              onClick={() => setActiveTab('ratios')}
            >
              🧮 {t('simTabRatios')}
            </button>
          </div>

          <div className="sim-tab-content">
            {/* Forecast Tab */}
            {activeTab === 'forecast' && (
              <div className="forecast-view">
                <div className="view-title">
                  <h4>{t('simChartTitle')}</h4>
                  <p>{t('simChartDesc')}</p>
                </div>

                <div className="chart-legend">
                  <span className="legend-item rev"><span className="dot"></span> {t('simLegendRev')}</span>
                  <span className="legend-item net"><span className="dot"></span> {t('simLegendNet')}</span>
                </div>

                <div className="bar-chart">
                  {forecastData.map((d, i) => {
                    const revPct = Math.round((d.revenue / maxForecastRev) * 100);
                    const netPct = Math.round((d.netIncome / maxForecastRev) * 100);

                    return (
                      <div className="chart-col" key={i}>
                        <div className="bars-container">
                          <div className="bar rev-bar" style={{ height: `${revPct}%` }} title={`Rev: ${formatCurrency(d.revenue)}`}>
                            <span className="bar-val">{formatCurrency(d.revenue)}</span>
                          </div>
                          <div className="bar net-bar" style={{ height: `${netPct}%` }} title={`Net: ${formatCurrency(d.netIncome)}`}>
                            <span className="bar-val">{formatCurrency(d.netIncome)}</span>
                          </div>
                        </div>
                        <span className="col-label">{d.year}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Capital Tab */}
            {activeTab === 'capital' && (
              <div className="capital-view">
                <div className="view-title">
                  <h4>{t('simCapitalTitle')}</h4>
                  <p>{t('simCapitalDesc')}</p>
                </div>

                <div className="capital-breakdown-list">
                  <div className="capital-item margin">
                    <div className="item-info">
                      <span>{t('donutOperatingMargin')} ({operatingMargin}%)</span>
                      <strong>{formatCurrency(marginAmt)}</strong>
                    </div>
                    <div className="progress-bar"><div className="fill" style={{ width: `${operatingMargin}%` }}></div></div>
                  </div>

                  <div className="capital-item cogs">
                    <div className="item-info">
                      <span>{t('donutCogs')} (50%)</span>
                      <strong>{formatCurrency(cogsAmt)}</strong>
                    </div>
                    <div className="progress-bar"><div className="fill" style={{ width: '50%' }}></div></div>
                  </div>

                  <div className="capital-item expansion">
                    <div className="item-info">
                      <span>{t('donutExpansion')} (15%)</span>
                      <strong>{formatCurrency(expansionAmt)}</strong>
                    </div>
                    <div className="progress-bar"><div className="fill" style={{ width: '15%' }}></div></div>
                  </div>

                  <div className="capital-item ga">
                    <div className="item-info">
                      <span>{t('donutGa')} ({Math.max(0, 100 - operatingMargin - 65)}%)</span>
                      <strong>{formatCurrency(gaAmt)}</strong>
                    </div>
                    <div className="progress-bar"><div className="fill" style={{ width: `${Math.max(0, 100 - operatingMargin - 65)}%` }}></div></div>
                  </div>
                </div>
              </div>
            )}

            {/* Ratios Tab */}
            {activeTab === 'ratios' && (
              <div className="ratios-view">
                <div className="view-title">
                  <h4>{t('ratiosTitle')}</h4>
                  <p>{t('ratiosDesc')}</p>
                </div>

                <div className="ratios-input-grid">
                  <div className="ratio-input-group">
                    <label>{t('calcCa')}</label>
                    <input
                      type="number"
                      value={currentAssets}
                      onChange={(e) => setCurrentAssets(Number(e.target.value))}
                    />
                  </div>
                  <div className="ratio-input-group">
                    <label>{t('calcCl')}</label>
                    <input
                      type="number"
                      value={currentLiabilities}
                      onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
                    />
                  </div>
                  <div className="ratio-input-group">
                    <label>{t('calcNi')}</label>
                    <input
                      type="number"
                      value={netIncome}
                      onChange={(e) => setNetIncome(Number(e.target.value))}
                    />
                  </div>
                  <div className="ratio-input-group">
                    <label>{t('calcRev')}</label>
                    <input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="ratios-result-cards">
                  <div className="ratio-result-card">
                    <span>{t('ratioCurrent')}</span>
                    <strong className="ratio-score">{calculatedCurrentRatio}x</strong>
                    <span className="ratio-status">
                      {Number(calculatedCurrentRatio) >= 1.5 ? '✅ Likuiditas Sehat (>1.5x)' : '⚠️ Likuiditas Perlu Diwaspadai (<1.5x)'}
                    </span>
                  </div>

                  <div className="ratio-result-card">
                    <span>{t('ratioProfit')}</span>
                    <strong className="ratio-score">{calculatedNetMargin}%</strong>
                    <span className="ratio-status">
                      {Number(calculatedNetMargin) >= 15 ? '✅ Margin Profit Tinggi (≥15%)' : 'ℹ️ Margin Operasional Standar'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
