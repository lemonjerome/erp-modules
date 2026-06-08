import { Sparkles } from 'lucide-react';

export default function InsightPanel({ title = 'AI Insights', insights }) {
  const dotClass = (type) => {
    if (type === 'positive') return 'green';
    if (type === 'warning') return 'warn';
    if (type === 'negative') return 'red';
    return 'blue';
  };

  return (
    <div className="insight-panel">
      <div className="panel-title">
        <Sparkles size={14} strokeWidth={2} style={{ color: 'var(--teal)', flexShrink: 0 }} />
        {title}
      </div>
      {insights.map((item, i) => (
        <div className="insight-item" key={i}>
          <span className={`insight-dot ${dotClass(item.type)}`} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
