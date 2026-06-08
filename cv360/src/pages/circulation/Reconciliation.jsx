import { useState } from 'react';
import { transactions } from '../../data/circulation';

const matched = transactions.filter(t => t.status === 'Matched');
const unmatched = transactions.filter(t => t.status === 'Unmatched');
const suggested = transactions.filter(t => t.status === 'Suggested');

const payments = [
  { id: 'PAY-8841', method: 'HMO – Maxicare', amount: 22100, date: '2026-06-08', status: 'Matched' },
  { id: 'PAY-8842', method: 'Bank Transfer', amount: 14200, date: '2026-06-08', status: 'Suggested' },
  { id: 'PAY-8843', method: 'GCash', amount: 1500, date: '2026-06-08', status: 'Matched' },
  { id: 'PAY-8844', method: 'HMO – Philcare', amount: 18400, date: '2026-06-08', status: 'Unmatched' },
  { id: 'PAY-8845', method: 'Credit Card', amount: 6700, date: '2026-06-08', status: 'Matched' },
  { id: 'PAY-8846', method: 'HMO – MedoCard', amount: 12500, date: '2026-06-08', status: 'Unmatched' },
  { id: 'PAY-8847', method: 'Bank Transfer', amount: 9800, date: '2026-06-08', status: 'Suggested' },
  { id: 'PAY-8848', method: 'Cash', amount: 4200, date: '2026-06-08', status: 'Matched' },
];

export default function Reconciliation() {
  const [tab, setTab] = useState('matched');

  const tabData = tab === 'matched' ? matched : tab === 'suggested' ? suggested : unmatched;

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Match Rate</div>
          <div className="kpi-value kpi-accent">94.2%</div>
          <div className="kpi-delta up">▲ +1.1 pts vs last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Matched</div>
          <div className="kpi-value">1,734</div>
          <div className="kpi-delta up">▲ Auto-matched</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Suggested Matches</div>
          <div className="kpi-value">63</div>
          <div className="kpi-delta neutral">● Pending review</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unmatched / Exceptions</div>
          <div className="kpi-value">47</div>
          <div className="kpi-delta down">▼ Requires action</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unmatched Revenue</div>
          <div className="kpi-value">₱182K</div>
          <div className="kpi-delta down">▼ At risk</div>
        </div>
      </div>

      <div className="grid-5-7">
        <div className="card">
          <div className="card-title">Incoming Payment Queue</div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Pay ID</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.id}>
                  <td className="font-medium text-navy text-xs">{p.id}</td>
                  <td className="text-xs">{p.method}</td>
                  <td className="font-medium">₱{p.amount.toLocaleString()}</td>
                  <td>
                    <span className={`badge ${p.status === 'Matched' ? 'badge-green' : p.status === 'Suggested' ? 'badge-yellow' : 'badge-red'}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-title">Matching Engine</div>
          <div className="tab-strip">
            <button className={`tab-btn${tab === 'matched' ? ' active' : ''}`} onClick={() => setTab('matched')}>
              Matched ({matched.length})
            </button>
            <button className={`tab-btn${tab === 'suggested' ? ' active' : ''}`} onClick={() => setTab('suggested')}>
              Suggested ({suggested.length})
            </button>
            <button className={`tab-btn${tab === 'unmatched' ? ' active' : ''}`} onClick={() => setTab('unmatched')}>
              Unmatched ({unmatched.length})
            </button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>Source</th>
                <th>Branch</th>
                <th>Amount</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {tabData.map(t => (
                <tr key={t.id}>
                  <td className="font-medium text-navy text-xs">{t.id}</td>
                  <td className="text-xs">{t.source}</td>
                  <td className="text-muted text-xs">{t.branch}</td>
                  <td className="font-medium">₱{t.amount.toLocaleString()}</td>
                  <td className="text-xs">{t.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {tab === 'suggested' && (
            <div style={{ marginTop: 16, padding: '10px 12px', background: 'rgba(246,173,85,0.08)', borderRadius: 8, border: '1px solid rgba(246,173,85,0.3)' }}>
              <div className="text-sm font-medium" style={{ color: '#b7791f' }}>⚡ Smart Match Available</div>
              <div className="text-xs text-muted mt-4">Engine identified {suggested.length} probable matches based on amount, date, and branch proximity. Review and confirm to finalize reconciliation.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
