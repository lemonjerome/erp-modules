# CV360 — Business Health Platform

An interactive prototype demonstrating CV360, a business intelligence platform for telehealth organizations. CV360 unifies financial operations and workforce performance into two modules: **Circulation** (revenue lifecycle management) and **Vitals** (workforce intelligence).

Built for the Whitecloak Launchpad 2026 PM Track assessment.

---

## What It Does

### CV360 Circulation
Monitors the flow of money across the organization — from service delivery to revenue capture, reconciliation, stakeholder settlements, collections, and forecasting. Designed around the metaphor of circulation: money is the blood of the business, and its flow must be continuous, visible, and healthy.

**Screens:** Circulation Dashboard · Revenue Capture · Reconciliation · Settlements · Collections · Branch Analytics · Revenue Intelligence

### CV360 Vitals
Monitors the signals from the organization's workforce — KPI performance by role, burnout and turnover risk detection, skill gap analysis, learning recommendations, talent readiness, and branch-level workforce health. Designed around the metaphor of vital signs: the workforce emits measurable signals, and those signals tell you whether the body is functioning.

**Screens:** Vitals Dashboard · Workforce Signals · Capability Development · Talent Growth · Branch Workforce · KPI Intelligence · Workforce Intelligence

---

## Running Locally

### With Node

```bash
cd cv360
npm install
npm run dev
```

Opens at `http://localhost:5173`

### With Docker

```bash
docker compose up --build
```

Opens at `http://localhost:8080`

---

## Stack

| Layer | Technology |
|:---|:---|
| Framework | Vite + React 19 |
| Charts | Recharts |
| Icons | Lucide React |
| Styles | CSS custom properties (no framework) |
| Fonts | Libre Baskerville (headers) · Roboto (body) via Google Fonts |
| Container | Docker + nginx |
| Deployment | Vercel |
| CI/CD | GitHub Actions |

---

## Project Structure

```
erp-modules/
├── cv360/                  # Application source
│   ├── src/
│   │   ├── components/     # Layout, KPICard, InsightPanel
│   │   ├── data/           # Simulated data (circulation.js, vitals.js)
│   │   ├── pages/
│   │   │   ├── circulation/  # 7 Circulation screens
│   │   │   └── vitals/       # 7 Vitals screens
│   │   ├── App.jsx
│   │   └── index.css       # Design tokens and global styles
│   ├── Dockerfile
│   └── nginx.conf
├── .github/
│   └── workflows/
│       ├── ci.yml          # Lint + build on every push and PR
│       └── deploy.yml      # Deploy to Vercel on main / preview on PR
├── docker-compose.yml
├── vercel.json
└── README.md
```

---

## CI/CD

Two GitHub Actions workflows run on every push and pull request:

**CI** (`ci.yml`) — runs on all branches:
- Installs dependencies
- Lints with ESLint
- Builds the Vite app
- Uploads the `dist/` artifact

**Deploy** (`deploy.yml`) — runs on all branches:
- Pushes to `main` → deploys to **production** on Vercel
- Pull requests → deploys a **preview URL** on Vercel, posted as a PR comment

### Required GitHub Secrets

Add these in your repository under **Settings → Secrets and variables → Actions**:

| Secret | Where to find it |
|:---|:---|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Vercel dashboard → Settings → General → Your ID |
| `VERCEL_PROJECT_ID` | Vercel project → Settings → General → Project ID |

---

## Design System

| Token | Value |
|:---|:---|
| Primary | `#002d72` Deep Navy |
| Accent | `#00b388` Teal |
| Info | `#66b9f4` Sky Blue |
| Warm | `#ffe3d4` Blush |
| Background | `#f5f7fa` Cloud |
| Shape motifs | Circles + quarter circles via CSS pseudo-elements |

---

*Whitecloak Launchpad 2026 — Gabriel C. Ramos, PM Track*
