export const employees = [
  { id: 1, name: 'Dr. Maria Santos', role: 'Consultant Doctor', branch: 'Makati Central', score: 92, trend: 'up', risk: null },
  { id: 2, name: 'Dr. Juan Reyes', role: 'Consultant Doctor', branch: 'BGC Medical Hub', score: 88, trend: 'stable', risk: null },
  { id: 3, name: 'Dr. Ana Lim', role: 'Consultant Doctor', branch: 'Cebu City Main', score: 85, trend: 'up', risk: null },
  { id: 4, name: 'Dr. Carlo Bautista', role: 'Consultant Doctor', branch: 'Davao Central', score: 71, trend: 'down', risk: 'performance' },
  { id: 5, name: 'Dr. Rosa Dela Cruz', role: 'Consultant Doctor', branch: 'Quezon City North', score: 68, trend: 'down', risk: 'burnout' },
  { id: 6, name: 'Marc Torres', role: 'Customer Support', branch: 'Makati Central', score: 94, trend: 'up', risk: null },
  { id: 7, name: 'Jenna Cruz', role: 'Customer Support', branch: 'Ortigas Clinic', score: 87, trend: 'stable', risk: null },
  { id: 8, name: 'Paolo Reyes', role: 'Customer Support', branch: 'Pasig East', score: 62, trend: 'down', risk: 'turnover' },
  { id: 9, name: 'Carla Santos', role: 'Customer Support', branch: 'Cebu North', score: 58, trend: 'down', risk: 'burnout' },
  { id: 10, name: 'Ryan Mendoza', role: 'Pharmacy Staff', branch: 'BGC Medical Hub', score: 91, trend: 'up', risk: null },
  { id: 11, name: 'Lea Garcia', role: 'Pharmacy Staff', branch: 'Davao North', score: 83, trend: 'stable', risk: null },
  { id: 12, name: 'Ben Villanueva', role: 'Pharmacy Staff', branch: 'Pampanga Central', score: 69, trend: 'down', risk: 'performance' },
  { id: 13, name: 'Nina Corpuz', role: 'Branch Manager', branch: 'Makati Central', score: 96, trend: 'up', risk: null },
  { id: 14, name: 'Joe Alcantara', role: 'Branch Manager', branch: 'Cebu City Main', score: 89, trend: 'up', risk: null },
  { id: 15, name: 'Mia Aguilar', role: 'Branch Manager', branch: 'General Santos', score: 64, trend: 'down', risk: 'performance' },
];

export const kpiFramework = {
  doctors: [
    { kpi: 'Consultation Completion Rate', score: 87, target: 90, weight: 30 },
    { kpi: 'Patient Satisfaction Score', score: 82, target: 85, weight: 30 },
    { kpi: 'Documentation Compliance', score: 91, target: 95, weight: 20 },
    { kpi: 'Follow-Up Compliance', score: 78, target: 85, weight: 20 },
  ],
  support: [
    { kpi: 'Average Resolution Time', score: 84, target: 90, weight: 30, unit: 'min' },
    { kpi: 'Customer Satisfaction', score: 79, target: 85, weight: 35, unit: 'CSAT' },
    { kpi: 'Ticket Closure Rate', score: 91, target: 95, weight: 20 },
    { kpi: 'Escalation Rate', score: 76, target: 80, weight: 15 },
  ],
  pharmacy: [
    { kpi: 'Fulfillment Accuracy', score: 93, target: 98, weight: 40 },
    { kpi: 'Order Processing Time', score: 85, target: 90, weight: 35 },
    { kpi: 'Prescription Compliance', score: 88, target: 95, weight: 25 },
  ],
  managers: [
    { kpi: 'Branch Revenue Performance', score: 81, target: 85, weight: 35 },
    { kpi: 'Workforce Health Score', score: 78, target: 85, weight: 30 },
    { kpi: 'Employee Retention Rate', score: 86, target: 90, weight: 20 },
    { kpi: 'Service Quality Metrics', score: 74, target: 82, weight: 15 },
  ],
};

export const performanceTrend = [
  { month: 'Jan', doctors: 83, support: 78, pharmacy: 86, managers: 80 },
  { month: 'Feb', doctors: 84, support: 76, pharmacy: 87, managers: 79 },
  { month: 'Mar', doctors: 82, support: 74, pharmacy: 88, managers: 77 },
  { month: 'Apr', doctors: 85, support: 77, pharmacy: 89, managers: 80 },
  { month: 'May', doctors: 86, support: 79, pharmacy: 90, managers: 81 },
  { month: 'Jun', doctors: 87, support: 79, pharmacy: 91, managers: 81 },
];

export const skillGaps = {
  doctors: [
    { skill: 'Communication', current: 72, required: 85 },
    { skill: 'Documentation', current: 91, required: 95 },
    { skill: 'Patient Engagement', current: 78, required: 88 },
    { skill: 'Clinical Protocols', current: 85, required: 90 },
    { skill: 'Digital Literacy', current: 68, required: 80 },
  ],
  support: [
    { skill: 'Problem Resolution', current: 76, required: 88 },
    { skill: 'Communication', current: 71, required: 85 },
    { skill: 'Customer Management', current: 74, required: 82 },
    { skill: 'System Proficiency', current: 82, required: 88 },
    { skill: 'Empathy & Tone', current: 68, required: 80 },
  ],
  pharmacy: [
    { skill: 'Fulfillment Accuracy', current: 93, required: 98 },
    { skill: 'Compliance Knowledge', current: 82, required: 92 },
    { skill: 'Customer Service', current: 78, required: 85 },
    { skill: 'Inventory Management', current: 86, required: 90 },
  ],
  managers: [
    { skill: 'Leadership', current: 80, required: 90 },
    { skill: 'Data Analytics', current: 65, required: 82 },
    { skill: 'Team Coaching', current: 74, required: 86 },
    { skill: 'Operational Planning', current: 78, required: 88 },
  ],
};

export const learningRecs = [
  { title: 'Patient Communication Excellence', type: 'Microlearning', duration: '2 hrs', role: 'Consultant Doctors', assignees: 12, priority: 'High' },
  { title: 'Clinical Documentation Best Practices', type: 'Workshop', duration: '4 hrs', role: 'Consultant Doctors', assignees: 8, priority: 'Medium' },
  { title: 'Customer Service Mastery', type: 'Certification', duration: '8 hrs', role: 'Customer Support', assignees: 15, priority: 'High' },
  { title: 'Empathetic Customer Interactions', type: 'Coaching', duration: '3 hrs', role: 'Customer Support', assignees: 18, priority: 'High' },
  { title: 'Prescription Compliance Standards', type: 'Microlearning', duration: '1.5 hrs', role: 'Pharmacy Staff', assignees: 10, priority: 'Medium' },
  { title: 'Data-Driven Leadership', type: 'Workshop', duration: '6 hrs', role: 'Branch Managers', assignees: 5, priority: 'High' },
  { title: 'Coaching & Mentorship Skills', type: 'Simulation', duration: '4 hrs', role: 'Branch Managers', assignees: 7, priority: 'Medium' },
];

export const riskEmployees = [
  { name: 'Dr. Rosa Dela Cruz', role: 'Consultant Doctor', branch: 'QC North', risk: 'Burnout', score: 68, indicators: 'High overtime, declining satisfaction scores', action: 'Schedule wellness check-in' },
  { name: 'Paolo Reyes', role: 'Customer Support', branch: 'Pasig East', risk: 'Turnover', score: 62, indicators: 'Low engagement, 2 missed 1:1s, peer feedback concerns', action: 'Immediate manager conversation' },
  { name: 'Carla Santos', role: 'Customer Support', branch: 'Cebu North', risk: 'Burnout', score: 58, indicators: 'Attendance issues, satisfaction drop 3 months running', action: 'Assign development plan + reduce load' },
  { name: 'Dr. Carlo Bautista', role: 'Consultant Doctor', branch: 'Davao Central', risk: 'Performance', score: 71, indicators: 'Follow-up compliance below 65%, patient complaints up', action: 'Assign coaching + documentation workshop' },
  { name: 'Ben Villanueva', role: 'Pharmacy Staff', branch: 'Pampanga', risk: 'Performance', score: 69, indicators: 'Fulfillment accuracy dropped 8 pts in 2 months', action: 'Accuracy audit + targeted training' },
  { name: 'Mia Aguilar', role: 'Branch Manager', branch: 'Gen. Santos', risk: 'Performance', score: 64, indicators: 'Branch KPIs below threshold for 3 consecutive months', action: 'Leadership coaching program' },
];

export const workforceSignals = [
  { source: 'Teleconsultation', employee: 'Dr. Santos', event: 'Completed 8 consultations', metric: 'Avg duration: 22 min', time: '08:14', type: 'green' },
  { source: 'Patient Feedback', employee: 'Dr. Bautista', event: 'Patient complaint received', metric: 'Communication concern', time: '08:31', type: 'red' },
  { source: 'Attendance', employee: 'Carla Santos', event: 'Late arrival — 35 min', metric: '4th incident this month', time: '08:35', type: 'warn' },
  { source: 'Customer Support', employee: 'Marc Torres', event: 'Resolved 12 tickets', metric: 'Avg resolution: 8.2 min', time: '09:02', type: 'green' },
  { source: 'Pharmacy', employee: 'Ryan Mendoza', event: 'Processed 24 orders', metric: '100% fulfillment accuracy', time: '09:15', type: 'green' },
  { source: 'Customer Support', employee: 'Paolo Reyes', event: 'Ticket escalated to manager', metric: '3rd escalation this week', time: '09:44', type: 'warn' },
  { source: 'Teleconsultation', employee: 'Dr. Dela Cruz', event: 'No-show: 3 consultations', metric: 'Patient reschedule required', time: '10:10', type: 'red' },
  { source: 'Attendance', employee: 'Ben Villanueva', event: 'Absent — unexcused', metric: '2nd absence this week', time: '10:30', type: 'red' },
];

export const talentPool = [
  { name: 'Nina Corpuz', role: 'Branch Manager', branch: 'Makati', score: 96, readiness: 'Ready Now', potential: 'Regional Head', months: 0 },
  { name: 'Dr. Maria Santos', role: 'Consultant Doctor', branch: 'Makati', score: 92, readiness: 'Ready Now', potential: 'Senior Consultant', months: 0 },
  { name: 'Marc Torres', role: 'Customer Support', branch: 'Makati', score: 94, readiness: 'Ready Soon', potential: 'Team Lead', months: 3 },
  { name: 'Joe Alcantara', role: 'Branch Manager', branch: 'Cebu', score: 89, readiness: 'Ready Soon', potential: 'Regional Coordinator', months: 6 },
  { name: 'Dr. Ana Lim', role: 'Consultant Doctor', branch: 'Cebu', score: 85, readiness: 'Ready Soon', potential: 'Clinical Lead', months: 6 },
  { name: 'Ryan Mendoza', role: 'Pharmacy Staff', branch: 'BGC', score: 91, readiness: 'Ready Soon', potential: 'Pharmacy Supervisor', months: 4 },
  { name: 'Jenna Cruz', role: 'Customer Support', branch: 'Ortigas', score: 87, readiness: 'Dev Needed', potential: 'Senior Support', months: 12 },
  { name: 'Lea Garcia', role: 'Pharmacy Staff', branch: 'Davao North', score: 83, readiness: 'Dev Needed', potential: 'Compliance Lead', months: 12 },
];

export const branchWorkforce = [
  { branch: 'Makati Central', healthScore: 89, kpiRate: 91, capabilityScore: 86, learningCompletion: 88, risks: 1 },
  { branch: 'BGC Medical Hub', healthScore: 86, kpiRate: 88, capabilityScore: 84, learningCompletion: 82, risks: 0 },
  { branch: 'Cebu City Main', healthScore: 87, kpiRate: 89, capabilityScore: 83, learningCompletion: 85, risks: 0 },
  { branch: 'Davao Central', healthScore: 78, kpiRate: 80, capabilityScore: 76, learningCompletion: 74, risks: 2 },
  { branch: 'Ortigas Clinic', healthScore: 82, kpiRate: 84, capabilityScore: 80, learningCompletion: 78, risks: 1 },
  { branch: 'Pasig East', healthScore: 74, kpiRate: 76, capabilityScore: 72, learningCompletion: 68, risks: 2 },
  { branch: 'Quezon City North', healthScore: 76, kpiRate: 78, capabilityScore: 74, learningCompletion: 71, risks: 2 },
  { branch: 'Pampanga Central', healthScore: 79, kpiRate: 81, capabilityScore: 77, learningCompletion: 75, risks: 1 },
  { branch: 'Cebu North', healthScore: 70, kpiRate: 72, capabilityScore: 68, learningCompletion: 65, risks: 3 },
  { branch: 'General Santos', healthScore: 66, kpiRate: 68, capabilityScore: 64, learningCompletion: 60, risks: 3 },
];
