import { TrendingUp, Search, DollarSign, BarChart2, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { forecastSeries } from '../../data/circulation';

const liabilityData = [
  { month: 'Jul', consultants: 3.8, pharmacy: 4.2, brands: 0.9, diagnostics: 1.4 },
  { month: 'Aug', consultants: 4.1, pharmacy: 4.5, brands: 1.0, diagnostics: 1.5 },
  { month: 'Sep', consultants: 3.9, pharmacy: 4.3, brands: 0.9, diagnostics: 1.4 },
  { month: 'Oct', consultants: 4.4, pharmacy: 4.8, brands: 1.1, diagnostics: 1.6 },
  { month: 'Nov', consultants: 4.7, pharmacy: 5.1, brands: 1.2, diagnostics: 1.7 },
  { month: 'Dec', consultants: 5.1, pharmacy: 5.5, brands: 1.3, diagnostics: 1.8 },
];

const execRecommendations = [
  { Icon: TrendingUp, text: 'Launch HMO collection campaign for overdue accounts exceeding 30 days', type: 'action', border: '#00b388' },
  { Icon: Search, text: 'Review Cebu North and General Santos branch performance — collection rates below target', type: 'warning', border: '#f6ad55' },
  { Icon: DollarSign, text: 'Prepare ₱291,100 in settlement funding for stakeholder disbursements due July 15', type: 'info', border: '#66b9f4' },
  { Icon: BarChart2, text: 'Cebu City Main and Pasig East are top growth branches — consider resource expansion', type: 'positive', border: '#00b388' },
  { Icon: Zap, text: 'Automate recurring insurance reconciliation to reduce 14-day average delay', type: 'action', border: '#002d72' },
];

export default function Intelligence() {
  return (
    <div>
      <div className="kpi-grid mb-24">
        <div className="kpi-card">
          <div className="kpi-label">Projected Jul Revenue</div>
          <div className="kpi-value kpi-accent">₱38.1M</div>
          <div className="kpi-delta up">▲ +5.2% vs Jun</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Expected Collections (Jul)</div>
          <div className="kpi-value">₱34.5M</div>
          <div className="kpi-delta up">▲ +5.1% projected</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Forecast Accuracy</div>
          <div className="kpi-value">93%</div>
          <div className="kpi-delta up">▲ +2 pts from last quarter</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">H2 Revenue Projection</div>
          <div className="kpi-value">₱254M</div>
          <div className="kpi-delta up">▲ +18% YoY</div>
        </div>
      </div>

      <div className="grid-2 mb-24">
        <div className="card">
          <div className="card-title">6-Month Revenue & Collection Forecast (₱M)</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={forecastSeries}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="revenue" stroke="#002d72" strokeWidth={2.5} dot={{ r: 4 }} name="Revenue" strokeDasharray="6 3" />
              <Line type="monotone" dataKey="collections" stroke="#00b388" strokeWidth={2.5} dot={{ r: 4 }} name="Collections" strokeDasharray="6 3" />
              <Line type="monotone" dataKey="settlements" stroke="#66b9f4" strokeWidth={2} dot={{ r: 3 }} name="Settlements" strokeDasharray="4 2" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Settlement Liability Forecast (₱M)</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={liabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e6ef" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="consultants" stroke="#002d72" strokeWidth={2} dot={{ r: 3 }} name="Consultants" strokeDasharray="5 3" />
              <Line type="monotone" dataKey="pharmacy" stroke="#00b388" strokeWidth={2} dot={{ r: 3 }} name="Pharmacy" strokeDasharray="5 3" />
              <Line type="monotone" dataKey="brands" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} name="Brands" strokeDasharray="5 3" />
              <Line type="monotone" dataKey="diagnostics" stroke="#66b9f4" strokeWidth={2} dot={{ r: 3 }} name="Diagnostics" strokeDasharray="5 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Executive Recommendations</div>
        <p className="text-sm text-muted mb-16">AI-generated next-best-actions based on revenue intelligence</p>
        <div className="grid-2">
          {execRecommendations.map((r, i) => (
            <div key={i} style={{
              padding: '14px 16px',
              background: 'var(--bg)',
              borderRadius: 8,
              borderLeft: `4px solid ${r.border}`,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start'
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: r.border, flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <r.Icon size={16} strokeWidth={2} />
              </div>
              <p className="text-sm" style={{ color: '#374151', lineHeight: 1.5 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
