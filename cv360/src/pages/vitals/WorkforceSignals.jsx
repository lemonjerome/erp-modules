import { Monitor, Star, Calendar, Headphones, Pill } from 'lucide-react';
import { workforceSignals } from '../../data/vitals';

const sources = [
  { Icon: Monitor, name: 'Teleconsultation', count: 412, label: 'doctor activities' },
  { Icon: Star, name: 'Patient Feedback', count: 214, label: 'ratings collected' },
  { Icon: Calendar, name: 'Attendance Records', count: 170, label: 'entries logged' },
  { Icon: Headphones, name: 'Customer Support', count: 388, label: 'ticket activities' },
  { Icon: Pill, name: 'Pharmacy Operations', count: 296, label: 'order signals' },
];

const repository = [
  { category: 'Workforce Activities', count: '1,480', freshness: 'Real-time', source: 'All Systems' },
  { category: 'Operational Metrics', count: '842', freshness: 'Hourly', source: 'Teleconsult + Pharmacy' },
  { category: 'Feedback Data', count: '214', freshness: 'Daily', source: 'Patient + CS' },
  { category: 'Attendance Records', count: '170', freshness: 'Daily', source: 'HR System' },
  { category: 'Performance Scores', count: '120', freshness: 'Weekly', source: 'KPI Engine' },
];

export default function WorkforceSignals() {
  return (
    <div>
      <div className="card mb-24">
        <div className="card-title">Workforce Signal Sources</div>
        <div className="signal-grid">
          {sources.map((s, i) => (
            <div className="signal-card" key={i}>
              <div className="signal-icon-box">
                <s.Icon size={22} strokeWidth={1.75} />
              </div>
              <div className="signal-name">{s.name}</div>
              <div className="signal-count">{s.count.toLocaleString()}</div>
              <div className="signal-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-5-7 mb-24">
        <div className="card">
          <div className="card-title">Workforce Signal Repository</div>
          <table className="data-table">
            <thead>
              <tr><th>Category</th><th>Records</th><th>Refresh</th><th>Source</th></tr>
            </thead>
            <tbody>
              {repository.map((r, i) => (
                <tr key={i}>
                  <td className="font-medium text-navy">{r.category}</td>
                  <td className="text-teal font-bold">{r.count}</td>
                  <td><span className="badge badge-green">{r.freshness}</span></td>
                  <td className="text-xs text-muted">{r.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-16" style={{ padding: '10px 12px', background: 'rgba(0,179,136,0.06)', borderRadius: 8, border: '1px solid rgba(0,179,136,0.2)' }}>
            <div className="text-sm font-medium text-teal">Signal Health: Excellent</div>
            <div className="text-xs text-muted mt-4">All 5 source connectors active · Last sync: 2 min ago</div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Workforce Activity Timeline</div>
          <div className="timeline">
            {workforceSignals.map((s, i) => (
              <div key={i} className="timeline-item">
                <div className={`timeline-dot ${s.type === 'green' ? '' : s.type}`} />
                <div className="timeline-body">
                  <div className="timeline-title">{s.source} — {s.employee}</div>
                  <div className="text-xs text-navy mt-4">{s.event}</div>
                  <div className="timeline-meta">{s.metric} · {s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Total Signals Today</div>
          <div className="kpi-value kpi-accent">1,480</div>
          <div className="kpi-delta up">▲ +8.4% vs yesterday</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Active Employees Tracked</div>
          <div className="kpi-value">168</div>
          <div className="kpi-delta neutral">● Out of 170 total</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Anomaly Signals</div>
          <div className="kpi-value">14</div>
          <div className="kpi-delta down">▼ Requires review</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Signal Capture Rate</div>
          <div className="kpi-value">98.8%</div>
          <div className="kpi-delta up">▲ All connectors healthy</div>
        </div>
      </div>
    </div>
  );
}
