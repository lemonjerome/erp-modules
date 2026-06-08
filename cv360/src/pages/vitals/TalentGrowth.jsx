import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { talentPool } from '../../data/vitals';

const readinessCounts = [
  { name: 'Ready Now', value: 2, color: '#00b388' },
  { name: 'Ready Soon', value: 4, color: '#66b9f4' },
  { name: 'Dev Needed', value: 2, color: '#ffe3d4' },
];

const readinessClass = { 'Ready Now': 'badge-green', 'Ready Soon': 'badge-blue', 'Dev Needed': 'badge-warm' };
const readinessBorder = { 'Ready Now': '#00b388', 'Ready Soon': '#66b9f4', 'Dev Needed': '#f6ad55' };

const pipeline = [
  { level: 'Regional Head', current: null, candidate: 'Nina Corpuz', readiness: 'Ready Now', timeline: 'Immediate' },
  { level: 'Clinical Lead', current: 'Dr. Santos (Senior)', candidate: 'Dr. Ana Lim', readiness: 'Ready Soon', timeline: '6 months' },
  { level: 'Pharmacy Supervisor', current: null, candidate: 'Ryan Mendoza', readiness: 'Ready Soon', timeline: '4 months' },
  { level: 'Support Team Lead', current: null, candidate: 'Marc Torres', readiness: 'Ready Soon', timeline: '3 months' },
  { level: 'Regional Coordinator', current: null, candidate: 'Joe Alcantara', readiness: 'Ready Soon', timeline: '6 months' },
];

export default function TalentGrowth() {
  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Promotion-Ready Now</div>
          <div className="kpi-value kpi-accent">2</div>
          <div className="kpi-delta up">▲ Available immediately</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Ready in 3–6 Months</div>
          <div className="kpi-value">4</div>
          <div className="kpi-delta neutral">● Development in progress</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">High-Potential Pool</div>
          <div className="kpi-value">8</div>
          <div className="kpi-delta up">▲ Score ≥83</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Leadership Pipeline</div>
          <div className="kpi-value">5</div>
          <div className="kpi-delta neutral">● Succession candidates</div>
        </div>
      </div>

      <div className="grid-5-7 mb-24">
        <div className="card">
          <div className="card-title">Promotion Readiness</div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={readinessCounts} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={40}>
                {readinessCounts.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
            {readinessCounts.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color }} />
                  <span className="text-sm">{r.name}</span>
                </div>
                <span className="font-bold text-navy">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title">High-Potential Employees</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {talentPool.map((t, i) => (
              <div key={i} style={{
                padding: '12px 14px',
                background: 'var(--bg)',
                borderRadius: 8,
                borderLeft: `4px solid ${readinessBorder[t.readiness]}`,
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--navy)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.72rem', fontWeight: 700, flexShrink: 0
                }}>
                  {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="text-sm font-medium text-navy">{t.name}</div>
                  <div className="text-xs text-muted">{t.role} · {t.branch}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="font-bold text-teal">{t.score}</div>
                  <span className={`badge ${readinessClass[t.readiness]}`}>{t.readiness}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Leadership Pipeline</div>
        <table className="data-table">
          <thead>
            <tr><th>Target Role</th><th>Candidate</th><th>Readiness</th><th>Timeline</th><th>Current Holder</th></tr>
          </thead>
          <tbody>
            {pipeline.map((p, i) => (
              <tr key={i}>
                <td className="font-medium text-navy">{p.level}</td>
                <td>
                  <div className="flex items-center gap-8">
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--teal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700 }}>
                      {p.candidate.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <span className="font-medium">{p.candidate}</span>
                  </div>
                </td>
                <td><span className={`badge ${readinessClass[p.readiness]}`}>{p.readiness}</span></td>
                <td className="font-medium text-teal">{p.timeline}</td>
                <td className="text-muted text-xs">{p.current || 'Open position'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
