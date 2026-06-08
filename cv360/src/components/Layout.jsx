import {
  BarChart2, DollarSign, RefreshCw, HandCoins, ClipboardList, TrendingUp, Building2,
  Activity, Radio, Target, Lightbulb, BookOpen, Star, Users
} from 'lucide-react';

const CIRCULATION_NAV = [
  { id: 'circ-dashboard', Icon: BarChart2, label: 'Circulation Dashboard' },
  { id: 'circ-revenue', Icon: DollarSign, label: 'Revenue Capture' },
  { id: 'circ-reconciliation', Icon: RefreshCw, label: 'Reconciliation' },
  { id: 'circ-settlements', Icon: HandCoins, label: 'Settlements' },
  { id: 'circ-collections', Icon: ClipboardList, label: 'Collections' },
  { id: 'circ-branches', Icon: Building2, label: 'Branch Analytics' },
  { id: 'circ-intelligence', Icon: TrendingUp, label: 'Revenue Intelligence' },
];

const VITALS_NAV = [
  { id: 'vitals-dashboard', Icon: Activity, label: 'Vitals Dashboard' },
  { id: 'vitals-signals', Icon: Radio, label: 'Workforce Signals' },
  { id: 'vitals-capability', Icon: BookOpen, label: 'Capability Development' },
  { id: 'vitals-talent', Icon: Star, label: 'Talent Growth' },
  { id: 'vitals-branches', Icon: Building2, label: 'Branch Workforce' },
  { id: 'vitals-kpi', Icon: Target, label: 'KPI Intelligence' },
  { id: 'vitals-intelligence', Icon: Lightbulb, label: 'Workforce Intelligence' },
];

const PAGE_TITLES = {
  'circ-dashboard': 'Circulation Dashboard',
  'circ-revenue': 'Revenue Capture Center',
  'circ-reconciliation': 'Smart Reconciliation Workspace',
  'circ-settlements': 'Stakeholder Settlement Center',
  'circ-collections': 'Collection Operations Center',
  'circ-intelligence': 'Revenue Intelligence Center',
  'circ-branches': 'Branch Financial Analytics',
  'vitals-dashboard': 'Vitals Dashboard',
  'vitals-signals': 'Workforce Signal Collection',
  'vitals-kpi': 'KPI Intelligence Center',
  'vitals-intelligence': 'Workforce Intelligence Center',
  'vitals-capability': 'Capability Development Center',
  'vitals-talent': 'Talent Growth Dashboard',
  'vitals-branches': 'Branch Workforce Analytics',
};

export default function Layout({ module, setModule, page, setPage, children }) {
  const nav = module === 'circulation' ? CIRCULATION_NAV : VITALS_NAV;
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-name">CV360</div>
          <div className="logo-tag">Business Health Platform</div>
        </div>

        <div className="sidebar-module-switcher">
          <button
            className={`module-btn${module === 'circulation' ? ' active' : ''}`}
            onClick={() => { setModule('circulation'); setPage('circ-dashboard'); }}
          >
            Circulation
          </button>
          <button
            className={`module-btn${module === 'vitals' ? ' active' : ''}`}
            onClick={() => { setModule('vitals'); setPage('vitals-dashboard'); }}
          >
            Vitals
          </button>
        </div>

        <nav className="sidebar-nav">
          {nav.map(item => (
            <div
              key={item.id}
              className={`nav-item${page === item.id ? ' active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span className="nav-icon">
                <item.Icon size={15} strokeWidth={2} />
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
            Whitecloak Launchpad 2026
          </div>
        </div>
      </aside>

      <div className="main-content">
        <div className="topbar">
          <span className="topbar-title">{PAGE_TITLES[page]}</span>
          <span className="topbar-badge">
            {module === 'circulation' ? 'CV360 Circulation' : 'CV360 Vitals'}
          </span>
          <span className="topbar-spacer" />
          <span className="topbar-date">{today}</span>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'var(--navy)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.78rem', fontWeight: 700
          }}>GR</div>
        </div>

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}
