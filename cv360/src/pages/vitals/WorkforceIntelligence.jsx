import { GraduationCap, MessageCircle, HeartPulse, BookOpen, ClipboardCheck, Star, TrendingDown, Activity } from 'lucide-react';
import { riskEmployees } from '../../data/vitals';

const burnoutCount = riskEmployees.filter(e => e.risk === 'Burnout').length;     // 2
const turnoverCount = riskEmployees.filter(e => e.risk === 'Turnover').length;   // 1
const performCount = riskEmployees.filter(e => e.risk === 'Performance').length; // 3

const rootCauses = [
  { issue: 'Customer Support Satisfaction Drop', cause: 'Communication Skill Gap', action: 'Communication Training Program', branch: 'Multiple Branches', severity: 'high' },
  { issue: 'Doctor Follow-Up Non-Compliance', cause: 'Workflow & Documentation Gap', action: 'Documentation Workshop', branch: 'Davao Central', severity: 'medium' },
  { issue: 'Pharmacy Fulfillment Accuracy Drop', cause: 'Compliance Knowledge Gap', action: 'Compliance Microlearning', branch: 'Pampanga Central', severity: 'medium' },
  { issue: 'Branch Manager Declining KPIs', cause: 'Leadership Development Need', action: 'Data-Driven Leadership Coaching', branch: 'General Santos', severity: 'high' },
];

const managerActions = [
  { Icon: GraduationCap, text: 'Coach Dr. Carlo Bautista — Follow-Up Compliance', sub: 'Davao Central · Documentation & patient engagement focus', type: 'red' },
  { Icon: MessageCircle, text: 'Immediate check-in: Paolo Reyes (Support)', sub: 'Pasig East · Turnover risk — high-priority conversation', type: 'red' },
  { Icon: HeartPulse, text: 'Wellness review: Carla Santos & Dr. Dela Cruz', sub: 'Cebu North & QC North · Burnout indicators identified', type: 'warn' },
  { Icon: BookOpen, text: 'Assign Communication Training to 15 Support agents', sub: 'Makati, Ortigas, BGC · Starts July 14', type: 'blue' },
  { Icon: ClipboardCheck, text: 'Performance review: Mia Aguilar — Branch Management KPIs', sub: 'General Santos · 3 consecutive months below threshold', type: 'warn' },
  { Icon: Star, text: 'Nominate Nina Corpuz for Regional Head consideration', sub: 'Makati Central · Score 96, promotion-ready', type: '' },
];

export default function WorkforceIntelligence() {
  return (
    <div>
      <div className="risk-cards mb-24">
        <div className="risk-card red">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(229,62,62,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e53e3e' }}>
              <HeartPulse size={20} strokeWidth={1.75} />
            </div>
          </div>
          <div className="risk-num red">{burnoutCount}</div>
          <div className="risk-label">Burnout Risk</div>
          <div className="risk-sub">Immediate attention</div>
        </div>
        <div className="risk-card yellow">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(246,173,85,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
              <TrendingDown size={20} strokeWidth={1.75} />
            </div>
          </div>
          <div className="risk-num yellow">{turnoverCount}</div>
          <div className="risk-label">Turnover Risk</div>
          <div className="risk-sub">High priority</div>
        </div>
        <div className="risk-card blue">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(102,185,244,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066b3' }}>
              <Activity size={20} strokeWidth={1.75} />
            </div>
          </div>
          <div className="risk-num blue">{performCount}</div>
          <div className="risk-label">Performance Risk</div>
          <div className="risk-sub">Coaching needed</div>
        </div>
      </div>

      <div className="grid-2 mb-24">
        <div className="card">
          <div className="card-title">Root Cause Analysis</div>
          <p className="text-sm text-muted mb-16">AI-identified root causes and recommended interventions</p>
          {rootCauses.map((r, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{
                background: r.severity === 'high' ? 'rgba(229,62,62,0.03)' : 'rgba(246,173,85,0.03)',
                border: `1px solid ${r.severity === 'high' ? 'rgba(229,62,62,0.15)' : 'rgba(246,173,85,0.15)'}`,
                borderRadius: 8,
                padding: '12px 14px'
              }}>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-medium text-navy">{r.issue}</div>
                  <span className={`badge ${r.severity === 'high' ? 'badge-red' : 'badge-yellow'}`}>{r.branch}</span>
                </div>
                <div className="flow-diagram" style={{ gap: 4 }}>
                  <div className="flow-step-box" style={{ fontSize: '0.75rem', padding: '5px 10px', background: '#fff' }}>Issue: {r.issue}</div>
                  <div style={{ width: 2, height: 10, background: 'var(--border)', marginLeft: 14 }} />
                  <div className="flow-step-box" style={{ fontSize: '0.75rem', padding: '5px 10px', borderColor: '#f6ad55', color: '#b7791f', background: 'rgba(246,173,85,0.05)' }}>Cause: {r.cause}</div>
                  <div style={{ width: 2, height: 10, background: 'var(--border)', marginLeft: 14 }} />
                  <div className="flow-step-box highlight" style={{ fontSize: '0.75rem', padding: '5px 10px' }}>Action: {r.action}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title">Manager Action Feed</div>
          <p className="text-sm text-muted mb-16">Prioritized actions — AI-generated</p>
          {managerActions.map((a, i) => (
            <div key={i} className={`action-item ${a.type}`}>
              <div className="action-icon">
                <a.Icon size={15} strokeWidth={2} />
              </div>
              <div>
                <div className="action-text">{a.text}</div>
                <div className="action-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Employee Risk Detection</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Risk Type</th>
                <th>Score</th>
                <th>Key Indicators</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {riskEmployees.map((e, i) => (
                <tr key={i}>
                  <td className="font-medium text-navy">{e.name}</td>
                  <td className="text-xs text-muted">{e.role}</td>
                  <td className="text-xs">{e.branch}</td>
                  <td>
                    <span className={`badge ${e.risk === 'Burnout' ? 'badge-red' : e.risk === 'Turnover' ? 'badge-yellow' : 'badge-blue'}`}>
                      {e.risk}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-8">
                      <div className="progress-bar" style={{ width: 50 }}>
                        <div className="progress-fill" style={{ width: `${e.score}%`, background: e.score < 65 ? '#e53e3e' : '#f6ad55' }} />
                      </div>
                      <span className="text-xs font-bold">{e.score}</span>
                    </div>
                  </td>
                  <td className="text-xs text-muted" style={{ maxWidth: 180 }}>{e.indicators}</td>
                  <td className="text-xs text-teal font-medium">{e.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
