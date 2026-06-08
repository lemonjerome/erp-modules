import { useState } from 'react';
import { Stethoscope, Headphones, Pill, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { skillGaps, learningRecs } from '../../data/vitals';

const roles = [
  { key: 'doctors', Icon: Stethoscope, label: 'Consultant Doctors' },
  { key: 'support', Icon: Headphones, label: 'Customer Support' },
  { key: 'pharmacy', Icon: Pill, label: 'Pharmacy Staff' },
  { key: 'managers', Icon: Building2, label: 'Branch Managers' },
];

const typeColors = { Microlearning: 'badge-blue', Workshop: 'badge-navy', Certification: 'badge-green', Coaching: 'badge-warm', Simulation: 'badge-yellow' };

export default function CapabilityDev() {
  const [role, setRole] = useState('doctors');
  const gaps = skillGaps[role];

  const chartData = gaps.map(g => ({
    skill: g.skill.length > 20 ? g.skill.slice(0, 20) + '…' : g.skill,
    Current: g.current,
    Required: g.required,
  }));

  const roleRecs = learningRecs.filter(r =>
    r.role.toLowerCase().includes(role === 'doctors' ? 'doctor' : role === 'support' ? 'support' : role === 'pharmacy' ? 'pharmacy' : 'manager')
  );

  const topGap = [...gaps].sort((a, b) => (b.required - b.current) - (a.required - a.current))[0];

  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Capability Health Score</div>
          <div className="kpi-value kpi-accent">78/100</div>
          <div className="kpi-delta down">▼ -1 pt (skill gaps widening)</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Critical Skill Gaps</div>
          <div className="kpi-value">8</div>
          <div className="kpi-delta down">▼ Across 4 role groups</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Active Learning Plans</div>
          <div className="kpi-value">7</div>
          <div className="kpi-delta neutral">● 75 employees enrolled</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg Completion Rate</div>
          <div className="kpi-value">76%</div>
          <div className="kpi-delta up">▲ +4 pts this quarter</div>
        </div>
      </div>

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

      <div className="grid-2 mb-24">
        <div className="card">
          <div className="card-title">Skill Gap Analysis</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="skill" tick={{ fontSize: 10 }} width={125} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Current" fill="#66b9f4" radius={[0, 2, 2, 0]} name="Current Level" />
              <Bar dataKey="Required" fill="#002d72" radius={[0, 2, 2, 0]} name="Required Level" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(229,62,62,0.04)', borderRadius: 6, border: '1px solid rgba(229,62,62,0.12)' }}>
            <div className="text-xs font-medium" style={{ color: '#c53030' }}>
              Largest Gap: {topGap.skill} ({topGap.required - topGap.current} pts below target)
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Skill Gap Detail</div>
          {gaps.map((g, i) => (
            <div key={i} className="skill-row">
              <div className="skill-row-header">
                <span className="skill-row-label">{g.skill}</span>
                <span className="skill-row-vals">
                  <span style={{ color: '#66b9f4' }}>{g.current}</span>
                  <span className="text-muted"> / </span>
                  <span style={{ color: '#002d72' }}>{g.required}</span>
                  {g.required > g.current && (
                    <span style={{ color: '#e53e3e', marginLeft: 4 }}>(-{g.required - g.current})</span>
                  )}
                </span>
              </div>
              <div style={{ position: 'relative', height: 8, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${g.required}%`, background: '#002d72', opacity: 0.15, borderRadius: 4 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${g.current}%`, background: '#66b9f4', borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-24">
        <div className="card-title">Learning Recommendations</div>
        <div className="grid-2">
          {(roleRecs.length > 0 ? roleRecs : learningRecs.slice(0, 4)).map((r, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'radial-gradient(circle 60px at calc(100% + 18px) -18px, rgba(0,179,136,0.055) 0%, transparent 65%), radial-gradient(circle 26px at -6px calc(100% + 6px), rgba(0,45,114,0.035) 0%, transparent 65%), var(--bg)', borderRadius: 10, border: '1.5px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
              <div className="flex justify-between items-start mb-8">
                <div className="text-sm font-medium text-navy" style={{ paddingRight: 8 }}>{r.title}</div>
                <span className={`badge ${typeColors[r.type] || 'badge-gray'}`} style={{ flexShrink: 0 }}>{r.type}</span>
              </div>
              <div className="flex gap-8 flex-wrap mt-8">
                <span className="text-xs text-muted">{r.duration}</span>
                <span className="text-xs text-muted">{r.assignees} employees</span>
                <span className={`badge ${r.priority === 'High' ? 'badge-red' : 'badge-yellow'}`}>{r.priority}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Development Plan Summary</div>
        <table className="data-table">
          <thead>
            <tr><th>Program</th><th>Type</th><th>Target Role</th><th>Assigned</th><th>Priority</th><th>Duration</th><th>Status</th></tr>
          </thead>
          <tbody>
            {learningRecs.map((r, i) => (
              <tr key={i}>
                <td className="font-medium text-navy">{r.title}</td>
                <td><span className={`badge ${typeColors[r.type] || 'badge-gray'}`}>{r.type}</span></td>
                <td className="text-xs text-muted">{r.role}</td>
                <td className="font-medium">{r.assignees}</td>
                <td><span className={`badge ${r.priority === 'High' ? 'badge-red' : 'badge-yellow'}`}>{r.priority}</span></td>
                <td className="text-xs">{r.duration}</td>
                <td><span className="badge badge-blue">Scheduled</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
