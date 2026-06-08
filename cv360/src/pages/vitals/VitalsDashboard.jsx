import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import KPICard from '../../components/KPICard';
import InsightPanel from '../../components/InsightPanel';
import { performanceTrend, riskEmployees, kpiFramework, skillGaps } from '../../data/vitals';

// --- computed from data ---
function roleScore(kpis) {
  const totalWeight = kpis.reduce((s, k) => s + k.weight, 0);
  return kpis.reduce((s, k) => s + k.score * k.weight, 0) / totalWeight;
}

const roleScores = {
  doctors:  roleScore(kpiFramework.doctors),
  support:  roleScore(kpiFramework.support),
  pharmacy: roleScore(kpiFramework.pharmacy),
  managers: roleScore(kpiFramework.managers),
};

const kpiAchievementRate = Math.round(
  Object.values(roleScores).reduce((s, v) => s + v, 0) / Object.values(roleScores).length
);

function roleCapability(skills) {
  return skills.reduce((s, sk) => s + sk.current, 0) / skills.length;
}

const capabilityScore = Math.round(
  (roleCapability(skillGaps.doctors) +
   roleCapability(skillGaps.support) +
   roleCapability(skillGaps.pharmacy) +
   roleCapability(skillGaps.managers)) / 4
);

// Satisfaction: avg of patient/customer satisfaction KPIs across doctor + support roles
const satisfactionScore =
  (kpiFramework.doctors.find(k => k.kpi.includes('Satisfaction'))?.score ?? 82) / 2 +
  (kpiFramework.support.find(k => k.kpi.includes('Satisfaction'))?.score ?? 79) / 2;

const ATTENDANCE_RATE = 85; // estimated — attendance signal not aggregated into a single metric in dataset

// WH Score formula (from DEPLOYMENT_STORIES VIT-001):
// KPI Achievement 40% | Capability Health 25% | Satisfaction 20% | Attendance 15%
const whScore = Math.round(
  kpiAchievementRate * 0.40 +
  capabilityScore    * 0.25 +
  satisfactionScore  * 0.20 +
  ATTENDANCE_RATE    * 0.15
);

const radarData = [
  { subject: 'Doctors',  score: Math.round(roleScores.doctors) },
  { subject: 'Support',  score: Math.round(roleScores.support) },
  { subject: 'Pharmacy', score: Math.round(roleScores.pharmacy) },
  { subject: 'Managers', score: Math.round(roleScores.managers) },
];

const insights = [
  { type: 'warning', text: 'Customer Support satisfaction dropped 6 pts over 3 months — communication skill gap detected.' },
  { type: 'positive', text: 'Pharmacy Staff posting highest capability score at 91 — strong fulfillment discipline.' },
  { type: 'negative', text: 'Cebu North and General Santos branches showing compounding workforce risk.' },
  { type: 'info', text: `${riskEmployees.length} employees flagged for immediate intervention (burnout, turnover, performance risk).` },
  { type: 'positive', text: 'Makati Central Branch Manager Nina Corpuz is promotion-ready — leadership pipeline strong.' },
];

export default function VitalsDashboard({ setPage }) {
  const ringColor = whScore >= 85 ? '#00b388' : whScore >= 70 ? '#f6ad55' : '#e53e3e';

  return (
    <div>
      <div className="flex items-center gap-12 mb-24">
        <div className="score-circle large" style={{ borderColor: ringColor }}>
          <div className="score-circle-val" style={{ color: ringColor }}>{whScore}</div>
          <div className="score-circle-label">WH Score</div>
        </div>
        <div>
          <h1>Workforce Health Overview</h1>
          <p className="text-muted text-sm mt-4">Workforce intelligence status as of June 8, 2026</p>
          <p className="text-xs text-muted mt-4" style={{ color: '#94a3b8' }}>
            Score = KPI Achievement (40%) · Capability Health (25%) · Satisfaction (20%) · Attendance (15%)
          </p>
        </div>
      </div>

      <div className="kpi-grid">
        <KPICard label="Workforce Health Score" value={`${whScore}/100`} delta="+2 pts vs last month" deltaType="up" accent />
        <KPICard label="KPI Achievement Rate" value={`${kpiAchievementRate}%`} delta="+1.4 pts" deltaType="up" />
        <KPICard label="Capability Health Score" value={`${capabilityScore}/100`} delta="-1 pt (skill gaps growing)" deltaType="down" />
        <KPICard label="Employee Risk Count" value={String(riskEmployees.length)} delta="Immediate attention needed" deltaType="neutral" />
        <KPICard label="Learning Completion" value="76%" delta="+4 pts this quarter" deltaType="up" />
      </div>

      <div className="grid-7-5 mb-24">
        <div className="card">
          <div className="card-title">Performance Trend by Role Group</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="doctors" stroke="#002d72" strokeWidth={2.5} dot={{ r: 4 }} name="Doctors" />
              <Line type="monotone" dataKey="support" stroke="#e53e3e" strokeWidth={2.5} dot={{ r: 4 }} name="Support" />
              <Line type="monotone" dataKey="pharmacy" stroke="#00b388" strokeWidth={2.5} dot={{ r: 4 }} name="Pharmacy" />
              <Line type="monotone" dataKey="managers" stroke="#66b9f4" strokeWidth={2.5} dot={{ r: 4 }} name="Managers" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Role KPI Distribution</div>
          <ResponsiveContainer width="100%" height={180}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e0e6ef" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9 }} />
              <Radar dataKey="score" stroke="#00b388" fill="#00b388" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="grid-2" style={{ gap: 8, marginTop: 8 }}>
            {radarData.map((r, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-muted">{r.subject}</span>
                <span className="font-bold text-navy">{r.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-7-5">
        <div className="card">
          <div className="card-title">Employee Risk Alerts</div>
          <table className="data-table">
            <thead>
              <tr><th>Employee</th><th>Role</th><th>Branch</th><th>Risk</th><th>Score</th><th>Action</th></tr>
            </thead>
            <tbody>
              {riskEmployees.map((e, i) => (
                <tr key={i}>
                  <td className="font-medium text-navy">{e.name}</td>
                  <td className="text-xs text-muted">{e.role}</td>
                  <td className="text-xs">{e.branch}</td>
                  <td>
                    <span
                      className={`badge ${e.risk === 'Burnout' ? 'badge-red' : e.risk === 'Turnover' ? 'badge-yellow' : ''}`}
                      style={e.risk === 'Performance' ? { background: 'rgba(102,185,244,0.15)', color: '#0066b3' } : {}}
                    >
                      {e.risk}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-8">
                      <div className="progress-bar" style={{ width: 50 }}>
                        <div className="progress-fill" style={{ width: `${e.score}%`, background: e.score < 65 ? '#e53e3e' : e.score < 75 ? '#f6ad55' : '#66b9f4' }} />
                      </div>
                      <span className="text-xs">{e.score}</span>
                    </div>
                  </td>
                  <td className="text-xs text-teal font-medium" style={{ cursor: 'pointer' }} onClick={() => setPage('vitals-intelligence')}>View →</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InsightPanel title="Workforce Insights" insights={insights} />
      </div>
    </div>
  );
}
