import { AlertTriangle, Phone, Mail, BarChart3, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { agingBuckets } from '../../data/circulation';

const balances = [
  { type: 'Patient Balances', amount: 1240000, rate: 92 },
  { type: 'HMO Balances', amount: 2180000, rate: 78 },
  { type: 'Corporate Accounts', amount: 1420000, rate: 84 },
  { type: 'Partner Balances', amount: 570000, rate: 88 },
];

const collectionActions = [
  { type: 'red', Icon: AlertTriangle, text: 'Escalate: Maxicare HMO Account', sub: 'Overdue 62 days · ₱184,200 outstanding', priority: 'High' },
  { type: 'red', Icon: Phone, text: 'Follow Up: PrimeHealth Corporate', sub: 'Overdue 45 days · ₱97,800 outstanding', priority: 'High' },
  { type: 'warn', Icon: Mail, text: 'Send Reminder: Cebu North Balances', sub: '31–60 days aging · ₱61,400 outstanding', priority: 'Medium' },
  { type: 'warn', Icon: BarChart3, text: 'Review: General Santos Receivables', sub: 'Collection rate dropped to 77%', priority: 'Medium' },
  { type: 'blue', Icon: MessageCircle, text: 'Schedule Payment Review: Zamboanga', sub: '90+ day risk · Collection rate 71%', priority: 'Medium' },
  { type: '', Icon: CheckCircle2, text: 'Confirm Settlement: Dr. Reyes July', sub: '₱38,400 pending approval', priority: 'Low' },
];

export default function Collections() {
  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Total Outstanding</div>
          <div className="kpi-value">₱5.41M</div>
          <div className="kpi-delta down">▼ Receivables balance</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Collection Rate</div>
          <div className="kpi-value kpi-accent">86%</div>
          <div className="kpi-delta up">▲ +1.2 pts vs last month</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Overdue Amount</div>
          <div className="kpi-value">₱1.19M</div>
          <div className="kpi-delta down">▼ 90+ day risk</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg Days to Collect</div>
          <div className="kpi-value">22 days</div>
          <div className="kpi-delta neutral">● Target: 18 days</div>
        </div>
      </div>

      <div className="grid-2 mb-24">
        <div className="card">
          <div className="card-title">Aging Analysis</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={agingBuckets}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `₱${(v/1000).toFixed(0)}K`} />
              <Tooltip formatter={v => `₱${v.toLocaleString()}`} />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]} name="Outstanding">
                {agingBuckets.map((b, i) => <Cell key={i} fill={b.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginTop: 10 }}>
            {agingBuckets.map((b, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: b.color, margin: '0 auto 3px' }} />
                <div className="text-xs font-medium">{b.pct}%</div>
                <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-title">Balance Tracking by Type</div>
          {balances.map((b, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-navy">{b.type}</span>
                <span className="font-bold text-sm">₱{(b.amount / 1000000).toFixed(2)}M</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="progress-bar" style={{ flex: 1 }}>
                  <div className="progress-fill" style={{
                    width: `${b.rate}%`,
                    background: b.rate >= 90 ? '#00b388' : b.rate >= 80 ? '#66b9f4' : '#f6ad55'
                  }} />
                </div>
                <span className="text-xs font-medium text-muted">{b.rate}% collected</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Collection Action Center</div>
        <p className="text-sm text-muted mb-16">AI-prioritized collection recommendations</p>
        {collectionActions.map((a, i) => (
          <div key={i} className={`action-item ${a.type}`}>
            <div className="action-icon">
              <a.Icon size={15} strokeWidth={2} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="action-text">{a.text}</div>
              <div className="action-sub">{a.sub}</div>
            </div>
            <span className={`badge ${a.priority === 'High' ? 'badge-red' : a.priority === 'Medium' ? 'badge-yellow' : 'badge-green'}`}>
              {a.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
