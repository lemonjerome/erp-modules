import { Monitor, Star, Calendar, Headphones, Pill, Activity, Zap, Database } from 'lucide-react';
import { workforceSignals } from '../../data/vitals';

const sources = [
  { Icon: Monitor, name: 'Teleconsultation', count: 412, label: 'doctor activities', trend: '+5.2%', color: 'var(--navy)' },
  { Icon: Star, name: 'Patient Feedback', count: 214, label: 'ratings collected', trend: '+2.1%', color: '#00b388' },
  { Icon: Calendar, name: 'Attendance Records', count: 170, label: 'entries logged', trend: '0%', color: '#66b9f4' },
  { Icon: Headphones, name: 'Customer Support', count: 388, label: 'ticket activities', trend: '+12.3%', color: '#f6ad55' },
  { Icon: Pill, name: 'Pharmacy Operations', count: 296, label: 'order signals', trend: '+3.7%', color: '#e53e3e' },
];

const repository = [
  { category: 'Workforce Activities', count: '1,480', freshness: 'Real-time', source: 'All Systems', icon: Activity },
  { category: 'Operational Metrics', count: '842', freshness: 'Hourly', source: 'Teleconsult + Pharmacy', icon: Zap },
  { category: 'Feedback Data', count: '214', freshness: 'Daily', source: 'Patient + CS', icon: Star },
  { category: 'Attendance Records', count: '170', freshness: 'Daily', source: 'HR System', icon: Calendar },
  { category: 'Performance Scores', count: '120', freshness: 'Weekly', source: 'KPI Engine', icon: Database },
];

const freshnessClass = { 'Real-time': 'badge-green', 'Hourly': 'badge-blue', 'Daily': 'badge-yellow', 'Weekly': 'badge-gray' };

export default function WorkforceSignals() {
  const totalSignals = sources.reduce((s, src) => s + src.count, 0);

  return (
    <div>
      <div className="kpi-grid mb-24">
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

      <div className="grid-7-5 mb-24" style={{ alignItems: 'start' }}>

        {/* LEFT: Sources + Repository */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Source cards — 2-column grid fills the width */}
          <div className="card">
            <div className="card-title">Workforce Signal Sources</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {sources.map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 16px',
                  background: `radial-gradient(circle 55px at calc(100% + 12px) -12px, ${s.color}0A 0%, transparent 65%), var(--bg)`,
                  borderRadius: 10,
                  borderLeft: `4px solid ${s.color}`,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: `${s.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color, flexShrink: 0,
                  }}>
                    <s.Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="text-sm font-medium text-navy" style={{ marginBottom: 2 }}>{s.name}</div>
                    <div className="text-xs text-muted">{s.label}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.1rem', fontWeight: 700, color: s.color }}>
                      {s.count.toLocaleString()}
                    </div>
                    <div className="text-xs" style={{ color: s.trend.startsWith('+') ? '#00875f' : s.trend === '0%' ? '#6b7280' : '#c53030' }}>
                      {s.trend}
                    </div>
                  </div>
                </div>
              ))}
              {/* Signal health footer spanning both columns */}
              <div style={{
                gridColumn: '1 / -1',
                padding: '10px 14px',
                background: 'rgba(0,179,136,0.06)',
                borderRadius: 8,
                border: '1px solid rgba(0,179,136,0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <span className="text-sm font-medium text-teal">Signal Health: Excellent</span>
                  <span className="text-xs text-muted" style={{ marginLeft: 12 }}>All 5 connectors active · Last sync: 2 min ago</span>
                </div>
                <span className="text-sm font-bold text-teal">Total: {totalSignals.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Signal Repository table */}
          <div className="card">
            <div className="card-title">Signal Repository</div>
            <table className="data-table">
              <thead>
                <tr><th>Category</th><th>Records</th><th>Refresh</th><th>Source</th></tr>
              </thead>
              <tbody>
                {repository.map((r, i) => (
                  <tr key={i}>
                    <td>
                      <div className="flex items-center gap-8">
                        <r.icon size={14} strokeWidth={1.75} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                        <span className="font-medium text-navy">{r.category}</span>
                      </div>
                    </td>
                    <td className="text-teal font-bold">{r.count}</td>
                    <td><span className={`badge ${freshnessClass[r.freshness]}`}>{r.freshness}</span></td>
                    <td className="text-xs text-muted">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* RIGHT: Activity Timeline — full height */}
        <div className="card" style={{ height: '100%' }}>
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
    </div>
  );
}
