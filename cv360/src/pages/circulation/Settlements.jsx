import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { stakeholders, settlementRules } from '../../data/circulation';

const ruleColors = ['#002d72', '#00b388', '#66b9f4', '#ffe3d4'];

export default function Settlements() {
  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Total Disbursed (Jun)</div>
          <div className="kpi-value kpi-accent">₱1.74M</div>
          <div className="kpi-delta up">▲ 8 stakeholders</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Pending Settlements</div>
          <div className="kpi-value">₱291,100</div>
          <div className="kpi-delta neutral">● Due July 15</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Settlement Processing</div>
          <div className="kpi-value">2.4 days</div>
          <div className="kpi-delta up">▲ -0.6 days vs last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Dispute Rate</div>
          <div className="kpi-value">0.8%</div>
          <div className="kpi-delta up">▲ -0.2 pts</div>
        </div>
      </div>

      <div className="grid-5-7 mb-24">
        <div className="card">
          <div className="card-title">Settlement Rule Engine</div>
          <p className="text-xs text-muted mb-16">Revenue allocation by service type</p>
          {settlementRules.map((r, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium text-navy">{r.service}</span>
              </div>
              <div className="flex gap-4" style={{ height: 18, borderRadius: 4, overflow: 'hidden' }}>
                {r.company > 0 && (
                  <div title={`Company: ${r.company}%`} style={{ width: `${r.company}%`, background: '#002d72', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{r.company}%</span>
                  </div>
                )}
                {r.doctor > 0 && (
                  <div title={`Doctor: ${r.doctor}%`} style={{ width: `${r.doctor}%`, background: '#00b388', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{r.doctor}%</span>
                  </div>
                )}
                {r.partner > 0 && (
                  <div title={`Partner: ${r.partner}%`} style={{ width: `${r.partner}%`, background: '#66b9f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{r.partner}%</span>
                  </div>
                )}
                {r.brand > 0 && (
                  <div title={`Brand: ${r.brand}%`} style={{ width: `${r.brand}%`, background: '#f6ad55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{r.brand}%</span>
                  </div>
                )}
              </div>
              <div className="flex gap-8 mt-4" style={{ flexWrap: 'wrap' }}>
                {r.company > 0 && <span className="text-xs" style={{ color: '#002d72' }}>■ Company {r.company}%</span>}
                {r.doctor > 0 && <span className="text-xs" style={{ color: '#00b388' }}>■ Doctor {r.doctor}%</span>}
                {r.partner > 0 && <span className="text-xs" style={{ color: '#66b9f4' }}>■ Partner {r.partner}%</span>}
                {r.brand > 0 && <span className="text-xs" style={{ color: '#f6ad55' }}>■ Brand {r.brand}%</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title">Stakeholder Earnings Dashboard</div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Stakeholder</th>
                  <th>Type</th>
                  <th>Total Earned</th>
                  <th>Pending</th>
                  <th>Settled</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((s, i) => (
                  <tr key={i}>
                    <td className="font-medium text-navy">{s.name}</td>
                    <td className="text-xs text-muted">{s.type}</td>
                    <td className="font-medium">₱{s.earned.toLocaleString()}</td>
                    <td className={s.pending > 0 ? 'text-sm' : 'text-muted'} style={{ color: s.pending > 0 ? '#b7791f' : undefined }}>
                      {s.pending > 0 ? `₱${s.pending.toLocaleString()}` : '—'}
                    </td>
                    <td className="text-teal font-medium">₱{s.settled.toLocaleString()}</td>
                    <td>
                      <span className={`badge ${s.pending === 0 ? 'badge-green' : 'badge-yellow'}`}>
                        {s.pending === 0 ? 'Settled' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Partner Earnings Comparison (₱)</div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={stakeholders} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
            <XAxis dataKey="name" tick={{ fontSize: 9 }} interval={0} angle={-20} textAnchor="end" height={40} />
            <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `₱${(v/1000).toFixed(0)}K`} />
            <Tooltip formatter={v => `₱${v.toLocaleString()}`} />
            <Bar dataKey="settled" fill="#00b388" name="Settled" radius={[4,4,0,0]} />
            <Bar dataKey="pending" fill="#f6ad55" name="Pending" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
