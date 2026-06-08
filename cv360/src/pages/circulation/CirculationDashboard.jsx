import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import KPICard from '../../components/KPICard';
import InsightPanel from '../../components/InsightPanel';
import { revenueTrend, revenueSources, branches, agingBuckets } from '../../data/circulation';

// --- computed from data ---
const totalRevenue = revenueSources.reduce((s, r) => s + r.value, 0);
const totalReceivables = branches.reduce((s, b) => s + b.receivables, 0);
const weightedCollectionRate =
  branches.reduce((s, b) => s + b.revenue * b.collectionRate, 0) /
  branches.reduce((s, b) => s + b.revenue, 0);

// Revenue Health Score formula (from DEPLOYMENT_STORIES CIRC-001):
// Collection Rate 40% | Reconciliation Rate 25% | Settlement Timeliness 20% | Overdue Health 15%
const RECONCILIATION_RATE = 94.2; // from Reconciliation screen matched-transaction dataset
const SETTLEMENT_TIMELINESS = 88;  // estimated — no disbursement-date data in dataset
const overdueRatio = agingBuckets.filter(b => b.label.includes('61') || b.label.includes('90+')).reduce((s, b) => s + b.pct, 0);
const overdueHealth = 100 - overdueRatio;
const healthScore = Math.round(
  weightedCollectionRate * 0.40 +
  RECONCILIATION_RATE    * 0.25 +
  SETTLEMENT_TIMELINESS  * 0.20 +
  overdueHealth          * 0.15
);

const topBranches = [...branches].sort((a, b) => b.revenue - a.revenue).slice(0, 8);
const branchData = topBranches.map(b => ({ name: b.name.split(' ')[0], revenue: +(b.revenue / 1000000).toFixed(2) }));

const insights = [
  { type: 'positive', text: 'Revenue increased 12.4% month-over-month, driven by Teleconsultation and Pharmacy growth.' },
  { type: 'positive', text: 'Cebu City Main posted highest growth at +22% — recommend capacity expansion.' },
  { type: 'warning', text: 'HMO collections averaging 14-day delay — escalation recommended for Maxicare accounts.' },
  { type: 'negative', text: 'General Santos and Zamboanga showing negative growth — review branch operations.' },
  { type: 'info', text: 'Settlement disbursements of ₱230,400 due July 15 — prepare funding.' },
];

export default function CirculationDashboard() {
  const ringColor = healthScore >= 85 ? '#00b388' : healthScore >= 70 ? '#f6ad55' : '#e53e3e';

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div className="flex items-center gap-12" style={{ marginBottom: 8 }}>
          <div className="score-circle large" style={{ borderColor: ringColor }}>
            <div className="score-circle-val" style={{ color: ringColor }}>{healthScore}</div>
            <div className="score-circle-label">Health Score</div>
          </div>
          <div>
            <h1>Revenue Health Overview</h1>
            <p className="text-muted text-sm mt-4">Financial circulation status as of June 8, 2026</p>
            <p className="text-xs text-muted mt-4" style={{ color: '#94a3b8' }}>
              Score = Collection Rate (40%) · Reconciliation Rate (25%) · Settlement Timeliness (20%) · Overdue Health (15%)
            </p>
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        <KPICard label="Total Revenue (Jun)" value={`₱${(totalRevenue / 1000000).toFixed(1)}M`} delta="+12.4% vs May" deltaType="up" />
        <KPICard label="Collection Rate" value={`${weightedCollectionRate.toFixed(1)}%`} delta="+1.2 pts vs May" deltaType="up" accent />
        <KPICard label="Outstanding Receivables" value={`₱${(totalReceivables / 1000000).toFixed(2)}M`} delta="Across 20 branches" deltaType="down" />
        <KPICard label="Pending Settlements" value="₱290,100" delta="Due July 15" deltaType="neutral" />
        <KPICard label="Matched Transactions" value="1,842" delta={`${RECONCILIATION_RATE}% match rate`} deltaType="up" />
      </div>

      <div className="grid-7-5" style={{ marginBottom: 20 }}>
        <div className="card">
          <div className="card-title">Revenue vs Collections Trend (₱M)</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="revenue" stroke="#002d72" strokeWidth={2.5} dot={{ r: 4 }} name="Revenue" />
              <Line type="monotone" dataKey="collections" stroke="#00b388" strokeWidth={2.5} dot={{ r: 4 }} name="Collections" />
              <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Revenue by Source</div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={revenueSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={35}>
                {revenueSources.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v) => `₱${(v / 1000000).toFixed(1)}M`} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {revenueSources.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-8">
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                  <span>{s.name}</span>
                </div>
                <span className="font-medium">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-7-5">
        <div className="card">
          <div className="card-title">Top 8 Branches by Revenue (₱M)</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={branchData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={70} />
              <Tooltip formatter={(v) => `₱${v}M`} />
              <Bar dataKey="revenue" fill="#66b9f4" radius={[0, 4, 4, 0]} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <InsightPanel title="Revenue Insights" insights={insights} />
      </div>
    </div>
  );
}
