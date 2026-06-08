import { useState } from 'react';
import Layout from './components/Layout';

import CirculationDashboard from './pages/circulation/CirculationDashboard';
import RevenueCapture from './pages/circulation/RevenueCapture';
import Reconciliation from './pages/circulation/Reconciliation';
import Settlements from './pages/circulation/Settlements';
import Collections from './pages/circulation/Collections';
import Intelligence from './pages/circulation/Intelligence';
import BranchFinancials from './pages/circulation/BranchFinancials';

import VitalsDashboard from './pages/vitals/VitalsDashboard';
import WorkforceSignals from './pages/vitals/WorkforceSignals';
import KPIIntelligence from './pages/vitals/KPIIntelligence';
import WorkforceIntelligence from './pages/vitals/WorkforceIntelligence';
import CapabilityDev from './pages/vitals/CapabilityDev';
import TalentGrowth from './pages/vitals/TalentGrowth';
import BranchWorkforce from './pages/vitals/BranchWorkforce';

const PAGES = {
  'circ-dashboard': CirculationDashboard,
  'circ-revenue': RevenueCapture,
  'circ-reconciliation': Reconciliation,
  'circ-settlements': Settlements,
  'circ-collections': Collections,
  'circ-intelligence': Intelligence,
  'circ-branches': BranchFinancials,
  'vitals-dashboard': VitalsDashboard,
  'vitals-signals': WorkforceSignals,
  'vitals-kpi': KPIIntelligence,
  'vitals-intelligence': WorkforceIntelligence,
  'vitals-capability': CapabilityDev,
  'vitals-talent': TalentGrowth,
  'vitals-branches': BranchWorkforce,
};

export default function App() {
  const [module, setModule] = useState('circulation');
  const [page, setPage] = useState('circ-dashboard');

  const PageComponent = PAGES[page] || CirculationDashboard;

  return (
    <Layout module={module} setModule={setModule} page={page} setPage={setPage}>
      <PageComponent setPage={setPage} />
    </Layout>
  );
}
