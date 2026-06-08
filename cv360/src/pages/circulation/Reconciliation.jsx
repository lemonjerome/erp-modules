import { useState } from 'react';

const payments = [
  { id: 'PAY-8841', method: 'HMO – Maxicare',  amount: 22100, source: 'Insurance',       branch: 'BGC Medical Hub',    date: '2026-06-08', status: 'Matched'   },
  { id: 'PAY-8842', method: 'Bank Transfer',    amount: 14200, source: 'Partner Services', branch: 'Davao North',        date: '2026-06-08', status: 'Suggested' },
  { id: 'PAY-8843', method: 'GCash',            amount:  1500, source: 'Teleconsultation', branch: 'Makati Central',     date: '2026-06-08', status: 'Matched'   },
  { id: 'PAY-8844', method: 'HMO – Philcare',   amount: 18400, source: 'Insurance',       branch: 'Cebu North',         date: '2026-06-08', status: 'Unmatched' },
  { id: 'PAY-8845', method: 'Credit Card',      amount:  6700, source: 'Pharmacy',        branch: 'Davao Central',      date: '2026-06-08', status: 'Matched'   },
  { id: 'PAY-8846', method: 'HMO – MedoCard',   amount: 12500, source: 'Insurance',       branch: 'Makati Central',     date: '2026-06-08', status: 'Unmatched' },
  { id: 'PAY-8847', method: 'Bank Transfer',    amount:  9800, source: 'Partner Services', branch: 'Quezon City North',  date: '2026-06-08', status: 'Suggested' },
  { id: 'PAY-8848', method: 'Cash',             amount:  4200, source: 'Pharmacy',        branch: 'BGC Medical Hub',    date: '2026-06-08', status: 'Matched'   },
  { id: 'PAY-8849', method: 'Bank Transfer',    amount:  7800, source: 'Partner Services', branch: 'General Santos',     date: '2026-06-08', status: 'Suggested' },
  { id: 'PAY-8850', method: 'Maya',             amount:  1500, source: 'Teleconsultation', branch: 'Laguna Medical',     date: '2026-06-08', status: 'Unmatched' },
];

const pMatched   = payments.filter(p => p.status === 'Matched');
const pSuggested = payments.filter(p => p.status === 'Suggested');
const pUnmatched = payments.filter(p => p.status === 'Unmatched');

const unmatchedRevenue = pUnmatched.reduce((s, p) => s + p.amount, 0);

const statusBadge = { Matched: 'badge-green', Suggested: 'badge-yellow', Unmatched: 'badge-red' };

export default function Reconciliation() {
  const [tab, setTab] = useState('matched');

  const tabData = tab === 'matched' ? pMatched : tab === 'suggested' ? pSuggested : pUnmatched;

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Match Rate (Month)</div>
          <div className="kpi-value kpi-accent">94.2%</div>
          <div className="kpi-delta up">▲ +1.1 pts vs last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Matched (Month)</div>
          <div className="kpi-value">1,734</div>
          <div className="kpi-delta up">▲ Auto-matched</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Suggested (Month)</div>
          <div className="kpi-value">63</div>
          <div className="kpi-delta neutral">● Pending review</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unmatched (Month)</div>
          <div className="kpi-value">47</div>
          <div className="kpi-delta down">▼ Requires action</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unmatched Revenue</div>
          <div className="kpi-value">₱{(unmatchedRevenue / 1000).toFixed(1)}K</div>
          <div className="kpi-delta down">▼ Today's queue</div>
        </div>
      </div>

      <div className="grid-5-7">
        <div className="card">
          <div className="card-title">Incoming Payment Queue</div>
          <p className="text-xs text-muted mb-16">Today · {payments.length} payments received</p>
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
                    <span className={`badge ${statusBadge[p.status]}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-title">Matching Engine</div>
          <p className="text-xs text-muted mb-16">Today's queue · {payments.length} payments · Monthly totals shown in KPI cards above</p>
          <div className="tab-strip">
            <button className={`tab-btn${tab === 'matched' ? ' active' : ''}`} onClick={() => setTab('matched')}>
              Matched ({pMatched.length})
            </button>
            <button className={`tab-btn${tab === 'suggested' ? ' active' : ''}`} onClick={() => setTab('suggested')}>
              Suggested ({pSuggested.length})
            </button>
            <button className={`tab-btn${tab === 'unmatched' ? ' active' : ''}`} onClick={() => setTab('unmatched')}>
              Unmatched ({pUnmatched.length})
            </button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Pay ID</th>
                <th>Source</th>
                <th>Branch</th>
                <th>Amount</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {tabData.map(p => (
                <tr key={p.id}>
                  <td className="font-medium text-navy text-xs">{p.id}</td>
                  <td className="text-xs">{p.source}</td>
                  <td className="text-muted text-xs">{p.branch}</td>
                  <td className="font-medium">₱{p.amount.toLocaleString()}</td>
                  <td className="text-xs">{p.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {tab === 'suggested' && (
            <div style={{ marginTop: 16, padding: '10px 12px', background: 'rgba(246,173,85,0.08)', borderRadius: 8, border: '1px solid rgba(246,173,85,0.3)' }}>
              <div className="text-sm font-medium" style={{ color: '#b7791f' }}>⚡ Smart Match Available</div>
              <div className="text-xs text-muted mt-4">Engine identified {pSuggested.length} probable matches based on amount, date, and branch proximity. Review and confirm to finalize reconciliation.</div>
            </div>
          )}
          {tab === 'unmatched' && (
            <div style={{ marginTop: 16, padding: '10px 12px', background: 'rgba(229,62,62,0.05)', borderRadius: 8, border: '1px solid rgba(229,62,62,0.15)' }}>
              <div className="text-sm font-medium" style={{ color: '#c53030' }}>⚠ Exceptions Require Manual Review</div>
              <div className="text-xs text-muted mt-4">{pUnmatched.length} payments unresolved today · Total at risk: ₱{(unmatchedRevenue / 1000).toFixed(1)}K</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
