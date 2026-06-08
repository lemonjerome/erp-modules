import { useState } from 'react';
import { Stethoscope, Headphones, Pill, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { kpiFramework } from '../../data/vitals';

const roles = [
  { key: 'doctors', Icon: Stethoscope, label: 'Consultant Doctors' },
  { key: 'support', Icon: Headphones, label: 'Customer Support' },
  { key: 'pharmacy', Icon: Pill, label: 'Pharmacy Staff' },
  { key: 'managers', Icon: Building2, label: 'Branch Managers' },
];

const healthScores = { doctors: 84, support: 79, pharmacy: 90, managers: 80 };

export default function KPIIntelligence() {
  const [role, setRole] = useState('doctors');
  const kpis = kpiFramework[role];
  const health = healthScores[role];

  const chartData = kpis.map(k => ({
    name: k.kpi.length > 22 ? k.kpi.slice(0, 22) + '…' : k.kpi,
    score: k.score,
    target: k.target
  }));

  return (
    <div>
      <div className="role-pills mb-24">
        {roles.map(r => (
          <button
            key={r.key}
            className={`role-pill${role === r.key ? ' active' : ''}`}
            onClick={() => setRole(r.key)}
          >
            <r.Icon size={14} strokeWidth={2} />
            {r.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-16 mb-24">
        <div className="score-circle large" style={{ borderColor: health >= 85 ? '#00b388' : health >= 75 ? '#66b9f4' : '#f6ad55' }}>
          <div className="score-circle-val" style={{ color: health >= 85 ? '#00b388' : health >= 75 ? '#002d72' : '#d97706' }}>{health}</div>
          <div className="score-circle-label">WH Score</div>
        </div>
        <div>
          <h2>{roles.find(r => r.key === role)?.label}</h2>
          <p className="text-muted text-sm mt-4">Workforce Health Score: <strong>{health}/100</strong></p>
          <p className="text-xs text-muted mt-4">{kpis.length} KPIs tracked · Based on {role === 'doctors' ? '50' : role === 'managers' ? '20' : '50'} employees</p>
        </div>
      </div>

      <div className="grid-2 mb-24">
        <div className="card">
          <div className="card-title">KPI Scorecards</div>
          {kpis.map((k, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium text-navy">{k.kpi}</span>
                <div className="flex gap-8">
                  <span className="text-xs text-muted">Target: {k.target}</span>
                  <span className={`text-xs font-bold ${k.score >= k.target ? 'text-teal' : 'text-navy'}`}>{k.score}</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{
                  width: `${k.score}%`,
                  background: k.score >= k.target ? '#00b388' : k.score >= k.target - 10 ? '#66b9f4' : '#f6ad55'
                }} />
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-xs text-muted">Weight: {k.weight}%</span>
                <span className={`badge ${k.score >= k.target ? 'badge-green' : k.score >= k.target - 5 ? 'badge-blue' : 'badge-yellow'}`}>
                  {k.score >= k.target ? 'On Target' : k.score >= k.target - 5 ? 'Near Target' : 'Below Target'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title">Score vs Target Comparison</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={135} />
              <Tooltip />
              <Bar dataKey="score" fill="#002d72" radius={[0, 4, 4, 0]} name="Score" />
              <Bar dataKey="target" fill="#e0e6ef" radius={[0, 4, 4, 0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-16 section-divider" />
          <div className="mt-16">
            <div className="card-title" style={{ marginBottom: 8 }}>Aggregate Score</div>
            <div style={{ padding: '12px 16px', background: 'var(--bg)', borderRadius: 8 }}>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-navy">Weighted KPI Average</div>
                  <div className="text-xs text-muted mt-4">Based on role weight distribution</div>
                </div>
                <div className="text-teal font-bold" style={{ fontSize: '1.65rem', fontFamily: 'Libre Baskerville' }}>
                  {Math.round(kpis.reduce((sum, k) => sum + k.score * k.weight, 0) / kpis.reduce((s, k) => s + k.weight, 0))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
