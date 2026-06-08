import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { branches } from '../../data/circulation';

const sortKeys = { revenue: 'Revenue', collectionRate: 'Collection Rate', growth: 'Growth' };

// --- computed from data ---
const totalRevenue = branches.reduce((s, b) => s + b.revenue, 0);
const avgCollectionRate = (branches.reduce((s, b) => s + b.collectionRate, 0) / branches.length).toFixed(1);
const topBranch = branches.reduce((max, b) => b.revenue > max.revenue ? b : max, branches[0]);
const negativGrowthBranches = branches.filter(b => b.growth < 0);

function mockTrend(base) {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => ({
    month: m,
    revenue: +(base * (0.85 + i * 0.03 + Math.random() * 0.05)).toFixed(0),
  }));
}

export default function BranchFinancials() {
  const [sortKey, setSortKey] = useState('revenue');
  const [selected, setSelected] = useState(null);

  const sorted = [...branches].sort((a, b) => b[sortKey] - a[sortKey]);
  const detail = selected ? branches.find(b => b.id === selected) : null;
  const trendData = detail ? mockTrend(detail.revenue / 6) : [];

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Total Branch Revenue</div>
          <div className="kpi-value kpi-accent">₱{(totalRevenue / 1000000).toFixed(1)}M</div>
          <div className="kpi-delta up">▲ Jun 2026 · 20 branches</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg Collection Rate</div>
          <div className="kpi-value">{avgCollectionRate}%</div>
          <div className="kpi-delta up">▲ Across all branches</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Top Performing Branch</div>
          <div className="kpi-value" style={{ fontSize: '1.1rem' }}>{topBranch.name}</div>
          <div className="kpi-delta up">▲ ₱{(topBranch.revenue / 1000000).toFixed(2)}M revenue</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Branches at Risk</div>
          <div className="kpi-value">{negativGrowthBranches.length}</div>
          <div className="kpi-delta down">▼ Negative growth this month</div>
        </div>
      </div>

      <div className={detail ? 'grid-7-5' : ''}>
        <div className="card">
          <div className="flex items-center justify-between mb-16">
            <div className="card-title" style={{ margin: 0 }}>Branch Rankings</div>
            <div className="flex gap-8">
              {Object.entries(sortKeys).map(([k, label]) => (
                <button
                  key={k}
                  className={`role-pill${sortKey === k ? ' active' : ''}`}
                  onClick={() => setSortKey(k)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Branch</th>
                  <th>Region</th>
                  <th>Revenue</th>
                  <th>Collection Rate</th>
                  <th>MoM Growth</th>
                  <th>Receivables</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((b, i) => (
                  <tr
                    key={b.id}
                    style={{ cursor: 'pointer', background: selected === b.id ? 'rgba(0,179,136,0.06)' : undefined }}
                    onClick={() => setSelected(selected === b.id ? null : b.id)}
                  >
                    <td className="text-muted font-medium">{i + 1}</td>
                    <td className="font-medium text-navy">{b.name}</td>
                    <td><span className="badge badge-navy">{b.region}</span></td>
                    <td className="font-medium">₱{(b.revenue / 1000000).toFixed(2)}M</td>
                    <td>
                      <div className="flex items-center gap-8">
                        <div className="progress-bar" style={{ width: 60 }}>
                          <div className="progress-fill" style={{
                            width: `${b.collectionRate}%`,
                            background: b.collectionRate >= 90 ? '#00b388' : b.collectionRate >= 80 ? '#66b9f4' : '#f6ad55'
                          }} />
                        </div>
                        <span className="text-xs">{b.collectionRate}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${b.growth >= 10 ? 'badge-green' : b.growth >= 0 ? 'badge-blue' : 'badge-red'}`}>
                        {b.growth > 0 ? '+' : ''}{b.growth}%
                      </span>
                    </td>
                    <td className="text-muted">₱{(b.receivables / 1000).toFixed(0)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {detail && (
          <div className="card">
            <div className="flex justify-between items-center mb-16">
              <div className="card-title" style={{ margin: 0 }}>{detail.name}</div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
            </div>
            <div className="kpi-card mb-16" style={{ background: 'var(--bg)' }}>
              <div className="kpi-label">Monthly Revenue</div>
              <div className="kpi-value kpi-accent">₱{(detail.revenue / 1000000).toFixed(2)}M</div>
              <div className={`kpi-delta ${detail.growth >= 0 ? 'up' : 'down'}`}>
                {detail.growth >= 0 ? '▲' : '▼'} {Math.abs(detail.growth)}% MoM growth
              </div>
            </div>
            <div className="grid-2 mb-16" style={{ gap: 8 }}>
              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: 12 }}>
                <div className="text-xs text-muted">Collection Rate</div>
                <div className="font-bold text-navy">{detail.collectionRate}%</div>
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: 12 }}>
                <div className="text-xs text-muted">Receivables</div>
                <div className="font-bold text-navy">₱{(detail.receivables / 1000).toFixed(0)}K</div>
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: 12 }}>
                <div className="text-xs text-muted">Region</div>
                <div className="font-bold text-navy">{detail.region}</div>
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: 8, padding: 12 }}>
                <div className="text-xs text-muted">Status</div>
                <div>
                  <span className={`badge ${detail.collectionRate >= 90 ? 'badge-green' : detail.collectionRate >= 80 ? 'badge-blue' : 'badge-red'}`}>
                    {detail.collectionRate >= 90 ? 'Excellent' : detail.collectionRate >= 80 ? 'Good' : 'At Risk'}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-title" style={{ marginBottom: 8 }}>Revenue Trend (₱)</div>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `₱${(v / 1000).toFixed(0)}K`} />
                <Tooltip formatter={v => `₱${v.toLocaleString()}`} />
                <Line type="monotone" dataKey="revenue" stroke="#002d72" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
