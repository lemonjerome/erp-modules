import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { branchWorkforce } from '../../data/vitals';

function mockTrend(base) {
  return ['Jan','Feb','Mar','Apr','May','Jun'].map((m, i) => ({
    month: m,
    score: Math.min(100, Math.round(base * (0.9 + i * 0.02 + Math.random() * 0.03))),
  }));
}

export default function BranchWorkforce() {
  const [sortKey, setSortKey] = useState('healthScore');
  const [selected, setSelected] = useState(null);

  const sorted = [...branchWorkforce].sort((a, b) => b[sortKey] - a[sortKey]);
  const detail = selected ? branchWorkforce.find(b => b.branch === selected) : null;
  const trendData = detail ? mockTrend(detail.healthScore) : [];

  const skillData = detail ? [
    { name: 'Communication', current: 72, required: 85 },
    { name: 'Technical', current: 81, required: 88 },
    { name: 'Customer Svc', current: detail.capabilityScore - 5, required: detail.capabilityScore + 8 },
  ] : [];

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Highest WH Score</div>
          <div className="kpi-value kpi-accent">Makati Central</div>
          <div className="kpi-delta up">▲ Score: 89</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Network Avg Health</div>
          <div className="kpi-value">79.6</div>
          <div className="kpi-delta up">▲ Across 20 branches</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Branches at Risk</div>
          <div className="kpi-value">3</div>
          <div className="kpi-delta down">▼ Score &lt;72 threshold</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Total Risk Flags</div>
          <div className="kpi-value">15</div>
          <div className="kpi-delta down">▼ Across all branches</div>
        </div>
      </div>

      <div className={detail ? 'grid-7-5' : ''}>
        <div className="card">
          <div className="flex items-center justify-between mb-16">
            <div className="card-title" style={{ margin: 0 }}>Branch Workforce Rankings</div>
            <div className="flex gap-8">
              {[['healthScore','WH Score'],['kpiRate','KPI Rate'],['capabilityScore','Capability'],['learningCompletion','Learning']].map(([k, l]) => (
                <button key={k} className={`role-pill${sortKey === k ? ' active' : ''}`} onClick={() => setSortKey(k)}>
                  {l}
                </button>
              ))}
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Branch</th>
                <th>WH Score</th>
                <th>KPI Rate</th>
                <th>Capability</th>
                <th>Learning %</th>
                <th>Risks</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((b, i) => (
                <tr
                  key={b.branch}
                  style={{ cursor: 'pointer', background: selected === b.branch ? 'rgba(0,179,136,0.06)' : undefined }}
                  onClick={() => setSelected(selected === b.branch ? null : b.branch)}
                >
                  <td className="text-muted font-medium">{i + 1}</td>
                  <td className="font-medium text-navy">{b.branch}</td>
                  <td>
                    <div className="flex items-center gap-8">
                      <div className="progress-bar" style={{ width: 50 }}>
                        <div className="progress-fill" style={{ width: `${b.healthScore}%`, background: b.healthScore >= 85 ? '#00b388' : b.healthScore >= 75 ? '#66b9f4' : '#f6ad55' }} />
                      </div>
                      <span className="text-xs font-bold">{b.healthScore}</span>
                    </div>
                  </td>
                  <td className="text-sm">{b.kpiRate}%</td>
                  <td className="text-sm">{b.capabilityScore}</td>
                  <td>
                    <span className={`badge ${b.learningCompletion >= 80 ? 'badge-green' : b.learningCompletion >= 70 ? 'badge-blue' : 'badge-yellow'}`}>
                      {b.learningCompletion}%
                    </span>
                  </td>
                  <td>
                    {b.risks > 0 ? (
                      <span className={`badge ${b.risks >= 3 ? 'badge-red' : 'badge-yellow'}`}>{b.risks} risks</span>
                    ) : (
                      <span className="badge badge-green">Clear</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {detail && (
          <div className="card">
            <div className="flex justify-between items-center mb-16">
              <div className="card-title" style={{ margin: 0 }}>{detail.branch}</div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
            </div>

            <div className="grid-2 mb-16" style={{ gap: 8 }}>
              {[
                ['WH Score', detail.healthScore, detail.healthScore >= 85 ? 'badge-green' : detail.healthScore >= 75 ? 'badge-blue' : 'badge-yellow'],
                ['KPI Rate', `${detail.kpiRate}%`, 'badge-navy'],
                ['Capability', detail.capabilityScore, 'badge-blue'],
                ['Risk Flags', detail.risks, detail.risks >= 3 ? 'badge-red' : detail.risks > 0 ? 'badge-yellow' : 'badge-green'],
              ].map(([l, v, cls], i) => (
                <div key={i} style={{ background: 'var(--bg)', borderRadius: 8, padding: '10px 12px' }}>
                  <div className="text-xs text-muted">{l}</div>
                  <div className="font-bold text-navy mt-4">{v}</div>
                </div>
              ))}
            </div>

            <div className="card-title" style={{ marginBottom: 8 }}>Health Score Trend</div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#00b388" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>

            <div className="card-title mt-16" style={{ marginBottom: 8 }}>Skill Gaps</div>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={skillData} layout="vertical">
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} width={90} />
                <Tooltip />
                <Bar dataKey="current" fill="#66b9f4" name="Current" radius={[0, 2, 2, 0]} />
                <Bar dataKey="required" fill="#002d72" fillOpacity={0.2} name="Required" radius={[0, 2, 2, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
