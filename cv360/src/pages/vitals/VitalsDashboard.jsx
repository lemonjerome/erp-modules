import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import KPICard from '../../components/KPICard';
import InsightPanel from '../../components/InsightPanel';
import { performanceTrend, riskEmployees } from '../../data/vitals';

const radarData = [
  { subject: 'Doctors', score: 87 },
  { subject: 'Support', score: 79 },
  { subject: 'Pharmacy', score: 91 },
  { subject: 'Managers', score: 81 },
];

const insights = [
  { type: 'warning', text: 'Customer Support satisfaction dropped 6 pts over 3 months — communication skill gap detected.' },
  { type: 'positive', text: 'Pharmacy Staff posting highest capability score at 91 — strong fulfillment discipline.' },
  { type: 'negative', text: 'Cebu North and General Santos branches showing compounding workforce risk.' },
  { type: 'info', text: '6 employees flagged for immediate intervention (burnout, turnover, performance risk).' },
  { type: 'positive', text: 'Makati Central Branch Manager Nina Corpuz is promotion-ready — leadership pipeline strong.' },
];

export default function VitalsDashboard() {
  return (
    <div>
      <div className="flex items-center gap-12 mb-24">
        <div className="score-circle large">
          <div className="score-circle-val">82</div>
          <div className="score-circle-label">WH Score</div>
        </div>
        <div>
          <h1>Workforce Health Overview</h1>
          <p className="text-muted text-sm mt-4">Workforce intelligence status as of June 8, 2026</p>
        </div>
      </div>

      <div className="kpi-grid">
        <KPICard label="Workforce Health Score" value="82/100" delta="+2 pts vs last month" deltaType="up" accent />
        <KPICard label="KPI Achievement Rate" value="84%" delta="+1.4 pts" deltaType="up" />
        <KPICard label="Capability Health Score" value="79/100" delta="-1 pt (skill gaps growing)" deltaType="down" />
        <KPICard label="Employee Risk Count" value="6" delta="▼ Immediate attention needed" deltaType="down" />
        <KPICard label="Learning Completion" value="76%" delta="+4 pts" deltaType="up" />
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
                    <span className={`badge ${e.risk === 'Burnout' ? 'badge-red' : e.risk === 'Turnover' ? 'badge-yellow' : 'badge-warn'}`}
                      style={e.risk === 'Performance' ? { background: 'rgba(102,185,244,0.15)', color: '#0066b3' } : {}}>
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
                  <td className="text-xs text-teal font-medium" style={{ cursor: 'pointer' }}>View →</td>
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
