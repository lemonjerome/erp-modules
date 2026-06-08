import { useState } from 'react';
import { Monitor, Pill, Microscope, Shield, Handshake } from 'lucide-react';
import { transactions, revenueSources } from '../../data/circulation';

const statusClass = { Matched: 'badge-green', Unmatched: 'badge-red', Suggested: 'badge-yellow' };

const signalSources = [
  { Icon: Monitor, name: 'Teleconsultation', count: 412, label: 'events today', trend: '+5.2%', color: 'var(--navy)' },
  { Icon: Pill, name: 'Pharmacy Sales', count: 287, label: 'transactions', trend: '+3.1%', color: '#00b388' },
  { Icon: Microscope, name: 'Diagnostics', count: 94, label: 'lab orders', trend: '+1.4%', color: '#66b9f4' },
  { Icon: Shield, name: 'Insurance Claims', count: 63, label: 'claim events', trend: '-2.3%', color: '#f6ad55' },
  { Icon: Handshake, name: 'Partner Services', count: 38, label: 'referrals', trend: '+0.8%', color: '#e53e3e' },
];

export default function RevenueCapture() {
  const [search, setSearch] = useState('');
  const filtered = transactions.filter(t =>
    t.source.toLowerCase().includes(search.toLowerCase()) ||
    t.branch.toLowerCase().includes(search.toLowerCase()) ||
    t.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Total Events Today</div>
          <div className="kpi-value">894</div>
          <div className="kpi-delta up">▲ +7.2% vs yesterday</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Total Amount Captured</div>
          <div className="kpi-value kpi-accent">₱2.14M</div>
          <div className="kpi-delta up">▲ Active capture</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unmatched Events</div>
          <div className="kpi-value">47</div>
          <div className="kpi-delta down">▼ Requires attention</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Auto-Capture Rate</div>
          <div className="kpi-value">98.2%</div>
          <div className="kpi-delta up">▲ +0.4 pts</div>
        </div>
      </div>

      <div className="card mb-24">
        <div className="card-title">Revenue Signal Sources</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {signalSources.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', background: 'var(--bg)', borderRadius: 10,
              borderLeft: `4px solid ${s.color}`,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: `${s.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, flexShrink: 0,
              }}>
                <s.Icon size={18} strokeWidth={1.75} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="text-sm font-medium text-navy" style={{ marginBottom: 2 }}>{s.name}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.1rem', fontWeight: 700, color: s.color }}>
                  {s.count.toLocaleString()}
                </div>
                <div className="text-xs" style={{ color: s.trend.startsWith('+') ? '#00875f' : '#c53030' }}>
                  {s.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-7-5 mb-24">
        <div className="card">
          <div className="flex items-center justify-between mb-16">
            <div className="card-title" style={{ margin: 0 }}>Revenue Event Feed</div>
            <input
              type="text"
              placeholder="Search transactions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '6px 10px', border: '1.5px solid var(--border)', borderRadius: 6, fontSize: '0.82rem', width: 190 }}
            />
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Txn ID</th>
                  <th>Source</th>
                  <th>Branch</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id}>
                    <td className="text-navy font-medium">{t.id}</td>
                    <td>{t.source}</td>
                    <td className="text-muted">{t.branch}</td>
                    <td className="font-medium">₱{t.amount.toLocaleString()}</td>
                    <td>{t.method}</td>
                    <td><span className={`badge ${statusClass[t.status]}`}>{t.status}</span></td>
                    <td className="text-muted text-xs">{t.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Unified Revenue Ledger</div>
          {revenueSources.map((s, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-navy">{s.name}</span>
                <span className="text-sm font-bold text-teal">₱{(s.value / 1000000).toFixed(1)}M</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
              <div className="text-xs text-muted mt-4">{s.pct}% of total revenue</div>
            </div>
          ))}
          <div className="section-divider" />
          <div className="flex justify-between">
            <span className="font-bold text-navy">Total Captured Revenue</span>
            <span className="font-bold text-teal">₱36.16M</span>
          </div>
        </div>
      </div>

    </div>
  );
}
