export default function KPICard({ label, value, delta, deltaType = 'up', accent = false, icon }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{icon && <span style={{ marginRight: 4 }}>{icon}</span>}{label}</div>
      <div className={`kpi-value${accent ? ' kpi-accent' : ''}`}>{value}</div>
      {delta && <div className={`kpi-delta ${deltaType}`}>{deltaType === 'up' ? '▲' : deltaType === 'down' ? '▼' : '●'} {delta}</div>}
    </div>
  );
}
