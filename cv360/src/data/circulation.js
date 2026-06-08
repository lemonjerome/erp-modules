export const branches = [
  { id: 1, name: 'Makati Central', revenue: 2850000, collectionRate: 94, receivables: 171000, growth: 12, region: 'NCR' },
  { id: 2, name: 'BGC Medical Hub', revenue: 2640000, collectionRate: 91, receivables: 237600, growth: 8, region: 'NCR' },
  { id: 3, name: 'Ortigas Clinic', revenue: 2120000, collectionRate: 88, receivables: 254400, growth: 5, region: 'NCR' },
  { id: 4, name: 'Quezon City North', revenue: 1980000, collectionRate: 85, receivables: 297000, growth: 15, region: 'NCR' },
  { id: 5, name: 'Pasig East', revenue: 1760000, collectionRate: 90, receivables: 176000, growth: 18, region: 'NCR' },
  { id: 6, name: 'Muntinlupa South', revenue: 1540000, collectionRate: 87, receivables: 200200, growth: 3, region: 'NCR' },
  { id: 7, name: 'Cebu City Main', revenue: 1890000, collectionRate: 92, receivables: 151200, growth: 22, region: 'Visayas' },
  { id: 8, name: 'Cebu North', revenue: 1450000, collectionRate: 79, receivables: 304500, growth: -2, region: 'Visayas' },
  { id: 9, name: 'Iloilo Medical', revenue: 1320000, collectionRate: 83, receivables: 224400, growth: 9, region: 'Visayas' },
  { id: 10, name: 'Bacolod Health', revenue: 1210000, collectionRate: 81, receivables: 229900, growth: 7, region: 'Visayas' },
  { id: 11, name: 'Davao Central', revenue: 1680000, collectionRate: 89, receivables: 184800, growth: 14, region: 'Mindanao' },
  { id: 12, name: 'Davao North', revenue: 1360000, collectionRate: 84, receivables: 217600, growth: 11, region: 'Mindanao' },
  { id: 13, name: 'Cagayan de Oro', revenue: 1180000, collectionRate: 86, receivables: 165200, growth: 6, region: 'Mindanao' },
  { id: 14, name: 'General Santos', revenue: 980000, collectionRate: 77, receivables: 225400, growth: -5, region: 'Mindanao' },
  { id: 15, name: 'Pampanga Central', revenue: 1420000, collectionRate: 88, receivables: 170400, growth: 16, region: 'Luzon' },
  { id: 16, name: 'Batangas City', revenue: 1290000, collectionRate: 82, receivables: 232200, growth: 4, region: 'Luzon' },
  { id: 17, name: 'Laguna Medical', revenue: 1150000, collectionRate: 80, receivables: 230000, growth: 10, region: 'Luzon' },
  { id: 18, name: 'Baguio Highland', revenue: 890000, collectionRate: 76, receivables: 213600, growth: 2, region: 'Luzon' },
  { id: 19, name: 'Naga City', revenue: 760000, collectionRate: 74, receivables: 197600, growth: 8, region: 'Luzon' },
  { id: 20, name: 'Zamboanga West', revenue: 680000, collectionRate: 71, receivables: 197200, growth: -8, region: 'Mindanao' },
];

export const transactions = [
  { id: 'TXN-001', source: 'Teleconsultation', branch: 'Makati Central', amount: 1500, method: 'GCash', status: 'Matched', timestamp: '2026-06-08 08:12' },
  { id: 'TXN-002', source: 'Pharmacy', branch: 'BGC Medical Hub', amount: 4200, method: 'Cash', status: 'Matched', timestamp: '2026-06-08 08:15' },
  { id: 'TXN-003', source: 'Diagnostics', branch: 'Ortigas Clinic', amount: 3800, method: 'Card', status: 'Matched', timestamp: '2026-06-08 08:20' },
  { id: 'TXN-004', source: 'Insurance', branch: 'Makati Central', amount: 12500, method: 'HMO', status: 'Unmatched', timestamp: '2026-06-08 08:31' },
  { id: 'TXN-005', source: 'Teleconsultation', branch: 'Cebu City Main', amount: 1200, method: 'Maya', status: 'Matched', timestamp: '2026-06-08 08:44' },
  { id: 'TXN-006', source: 'Pharmacy', branch: 'Davao Central', amount: 6700, method: 'Card', status: 'Matched', timestamp: '2026-06-08 08:52' },
  { id: 'TXN-007', source: 'Partner Services', branch: 'Quezon City North', amount: 9800, method: 'Bank Transfer', status: 'Suggested', timestamp: '2026-06-08 09:03' },
  { id: 'TXN-008', source: 'Teleconsultation', branch: 'Pasig East', amount: 1800, method: 'GCash', status: 'Matched', timestamp: '2026-06-08 09:11' },
  { id: 'TXN-009', source: 'Insurance', branch: 'Cebu North', amount: 18400, method: 'HMO', status: 'Unmatched', timestamp: '2026-06-08 09:18' },
  { id: 'TXN-010', source: 'Diagnostics', branch: 'Pampanga Central', amount: 5200, method: 'Cash', status: 'Matched', timestamp: '2026-06-08 09:25' },
  { id: 'TXN-011', source: 'Teleconsultation', branch: 'Iloilo Medical', amount: 900, method: 'GCash', status: 'Matched', timestamp: '2026-06-08 09:33' },
  { id: 'TXN-012', source: 'Pharmacy', branch: 'Makati Central', amount: 8900, method: 'Card', status: 'Matched', timestamp: '2026-06-08 09:40' },
  { id: 'TXN-013', source: 'Partner Services', branch: 'Davao North', amount: 14200, method: 'Bank Transfer', status: 'Suggested', timestamp: '2026-06-08 09:52' },
  { id: 'TXN-014', source: 'Teleconsultation', branch: 'Batangas City', amount: 1200, method: 'Maya', status: 'Matched', timestamp: '2026-06-08 10:05' },
  { id: 'TXN-015', source: 'Insurance', branch: 'BGC Medical Hub', amount: 22100, method: 'HMO', status: 'Matched', timestamp: '2026-06-08 10:12' },
  { id: 'TXN-016', source: 'Diagnostics', branch: 'Cagayan de Oro', amount: 4400, method: 'Cash', status: 'Matched', timestamp: '2026-06-08 10:20' },
  { id: 'TXN-017', source: 'Teleconsultation', branch: 'Laguna Medical', amount: 1500, method: 'GCash', status: 'Unmatched', timestamp: '2026-06-08 10:31' },
  { id: 'TXN-018', source: 'Pharmacy', branch: 'Cebu City Main', amount: 11200, method: 'Card', status: 'Matched', timestamp: '2026-06-08 10:44' },
  { id: 'TXN-019', source: 'Partner Services', branch: 'General Santos', amount: 7800, method: 'Bank Transfer', status: 'Suggested', timestamp: '2026-06-08 10:55' },
  { id: 'TXN-020', source: 'Teleconsultation', branch: 'Baguio Highland', amount: 1100, method: 'Cash', status: 'Matched', timestamp: '2026-06-08 11:02' },
];

export const revenueSources = [
  { name: 'Teleconsultation', value: 12400000, color: '#002d72', pct: 34 },
  { name: 'Pharmacy Sales', value: 10800000, color: '#00b388', pct: 30 },
  { name: 'Diagnostics', value: 7200000, color: '#66b9f4', pct: 20 },
  { name: 'Insurance Claims', value: 4320000, color: '#f97316', pct: 12 },
  { name: 'Partner Services', value: 1440000, color: '#f6ad55', pct: 4 },
];

export const revenueTrend = [
  { month: 'Jan', revenue: 28.4, collections: 25.1, target: 30 },
  { month: 'Feb', revenue: 30.2, collections: 27.8, target: 30 },
  { month: 'Mar', revenue: 29.8, collections: 26.4, target: 30 },
  { month: 'Apr', revenue: 33.1, collections: 29.7, target: 32 },
  { month: 'May', revenue: 35.4, collections: 31.2, target: 32 },
  { month: 'Jun', revenue: 36.2, collections: 32.8, target: 34 },
];

export const forecastSeries = [
  { month: 'Jul', revenue: 38.1, collections: 34.5, settlements: 11.4 },
  { month: 'Aug', revenue: 40.2, collections: 36.8, settlements: 12.1 },
  { month: 'Sep', revenue: 39.8, collections: 35.9, settlements: 11.9 },
  { month: 'Oct', revenue: 42.6, collections: 38.3, settlements: 12.8 },
  { month: 'Nov', revenue: 45.1, collections: 40.6, settlements: 13.5 },
  { month: 'Dec', revenue: 48.4, collections: 43.6, settlements: 14.5 },
];

export const agingBuckets = [
  { label: 'Current', amount: 1842000, pct: 34, color: '#00b388' },
  { label: '1–30 Days', amount: 1458000, pct: 27, color: '#66b9f4' },
  { label: '31–60 Days', amount: 918000, pct: 17, color: '#f6ad55' },
  { label: '61–90 Days', amount: 648000, pct: 12, color: '#e07b39' },
  { label: '90+ Days', amount: 540000, pct: 10, color: '#e53e3e' },
];

export const stakeholders = [
  { name: 'Dr. Maria Santos', type: 'Consultant Doctor', earned: 284500, pending: 48200, settled: 236300, rate: '30%' },
  { name: 'Dr. Juan Reyes', type: 'Consultant Doctor', earned: 261800, pending: 38400, settled: 223400, rate: '30%' },
  { name: 'Healthway Pharma', type: 'Pharmacy Partner', earned: 542000, pending: 81000, settled: 461000, rate: '50%' },
  { name: 'Mercury Drug Partner', type: 'Pharmacy Partner', earned: 418000, pending: 62000, settled: 356000, rate: '50%' },
  { name: 'Unilab Brands', type: 'Brand Incentive', earned: 124000, pending: 18600, settled: 105400, rate: '10%' },
  { name: 'St. Luke\'s Diagnostics', type: 'Diagnostic Provider', earned: 198000, pending: 29700, settled: 168300, rate: '25%' },
  { name: 'Maxicare HMO', type: 'Insurance Partner', earned: 88000, pending: 13200, settled: 74800, rate: 'Variable' },
  { name: 'PhilHealth Partner', type: 'Insurance Partner', earned: 74000, pending: 0, settled: 74000, rate: 'Standard' },
];

export const settlementRules = [
  { service: 'Teleconsultation', company: 70, doctor: 30, partner: 0, brand: 0 },
  { service: 'Pharmacy Sale', company: 40, doctor: 0, partner: 50, brand: 10 },
  { service: 'Diagnostics', company: 60, doctor: 15, partner: 25, brand: 0 },
  { service: 'Insurance Claim', company: 80, doctor: 20, partner: 0, brand: 0 },
  { service: 'Partner Referral', company: 55, doctor: 0, partner: 35, brand: 10 },
];

export const collectionActions = [
  { type: 'red', icon: '⚠️', text: 'Escalate: Maxicare HMO Account', sub: 'Overdue 62 days · ₱184,200 outstanding', priority: 'High' },
  { type: 'red', icon: '📞', text: 'Follow Up: PrimeHealth Corporate', sub: 'Overdue 45 days · ₱97,800 outstanding', priority: 'High' },
  { type: 'warn', icon: '📬', text: 'Send Reminder: Cebu North Balances', sub: '31–60 days aging · ₱61,400 outstanding', priority: 'Medium' },
  { type: 'warn', icon: '📋', text: 'Review: General Santos Receivables', sub: 'Collection rate dropped to 77%', priority: 'Medium' },
  { type: 'blue', icon: '💬', text: 'Schedule Payment Review: Zamboanga', sub: '90+ day risk · Collection rate 71%', priority: 'Medium' },
  { type: '', icon: '✅', text: 'Confirm Settlement: Dr. Reyes July', sub: '₱38,400 pending approval', priority: 'Low' },
];

export const execRecommendations = [
  { icon: '🚀', text: 'Launch HMO collection campaign for overdue accounts exceeding 30 days', type: 'action' },
  { icon: '🔍', text: 'Review Cebu North and General Santos branch performance — collection rates below target', type: 'warning' },
  { icon: '💰', text: 'Prepare ₱230,400 in settlement funding for stakeholder disbursements due July 15', type: 'info' },
  { icon: '📈', text: 'Cebu City Main and Pasig East are top growth branches — consider resource expansion', type: 'positive' },
  { icon: '⚡', text: 'Automate recurring insurance reconciliation to reduce 14-day average delay', type: 'action' },
];
