# 🛡️ CyberShield — Interactive Cybersecurity Awareness & Training Portal

<p align="center">
  <img src="https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<p align="center">
  <strong>"Learn. Detect. Protect."</strong><br/>
  A complete, polished, production-quality Cybersecurity Awareness & Training Portal developed as a Final-Year College Capstone Project.
</p>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Installation & Running Locally](#installation--running-locally)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Security Features](#security-features)
- [Deployment](#deployment)
- [Viva Q&A Guide](#viva-qa-guide)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## 📌 Overview

**CyberShield** is a complete cybersecurity education platform that teaches users to identify and defend against digital threats through **hands-on, interactive simulations** — not passive reading.

> Built to educate students, employees, and general users about phishing, password security, social engineering, safe browsing, and more.

### 🎯 Who Is This For?
- College students studying cybersecurity
- Corporate employees in security awareness training
- General users who want to improve their digital security habits

---

## 📸 Screenshots

> **Tip for project report:** Take screenshots of the following pages and add them here:

| Page | Route |
|------|-------|
| 🏠 Landing Page & SOC Hero | `/` |
| 📊 Awareness Score Dashboard | `/dashboard` |
| 👁️ Phishing Simulator | `/phishing` |
| 🔐 Password Strength Analyzer | `/passwords` |
| 🌐 URL Safety Inspector | `/url-analyzer` |
| ⚔️ Branching Security Scenarios | `/scenarios` |
| 🎯 Quiz Engine & Explanations | `/quizzes` |
| ⚙️ Admin Analytics Console | `/admin` |

---

## ✨ Features

### 🔴 Core Interactive Tools (Client-Side)
| Feature | Description |
|---------|-------------|
| 👁️ **Phishing Simulator** | Inspect 6+ simulated emails, SMS smishing, and QR quishing stickers. Make "Safe / Suspicious" decisions and receive instant educational red-flag breakdowns. |
| 🔐 **Local Password Analyzer** | Computes Shannon Entropy math **100% inside the browser** (zero server calls). Estimates brute-force crack times and generates secure passphrases. |
| 🌐 **URL Safety Heuristic Inspector** | Analyzes demo URLs against 10+ risk factors: HTTP protocol, raw IP hostnames, suspicious TLDs, punycode encoding, excessive subdomains, and keyword density. |
| ⚔️ **Branching Security Scenarios** | 10 real-world threat challenges (Vishing, USB Drop, CEO Fraud, Public Wi-Fi, QR Scams) with defense consequences and key takeaways. |
| 🎯 **Multi-Tier Quiz Engine** | Beginner / Intermediate / Advanced quizzes across 8 security domains with instant explanation feedback. |
| 📊 **Awareness Score Dashboard** | Dynamic 0–100 score gauge, Recharts radar charts, weak-area recommendation engine, activity stream, and badge gallery. |
| 🏆 **Gamification & Badges** | Unlock achievement badges (🏆 Phishing Detective, 🔐 Password Protector, 🛡️ Security Beginner, 🎯 Quiz Master, 🌐 Safe Browser, 🧠 Cyber Champion) with confetti celebrations. |
| 📚 **Security Tips Library** | 10 categories, searchable, bookmarkable tips with recommended action drawers. |
| 🛤️ **Structured Learning Paths** | Beginner, Intermediate, and Advanced tracks with module completion tracking. |

### 🔵 Admin Panel
| Feature | Description |
|---------|-------------|
| ⚙️ **Admin Console** | Educational analytics: total learners, average awareness score, quiz completion distribution charts, most-missed topics. |
| 📝 **Content Manager** | Inspect, add, and delete quiz questions and security tips. |

### 🟢 Backend (Node.js + Express + MongoDB)
- JWT-secured REST API
- Bcryptjs password hashing (cost 10)
- Helmet HTTP security headers
- Express-rate-limit brute-force protection
- MongoDB Mongoose schemas
- Database seeder script

---

## 🧰 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | Component-based SPA architecture |
| **Vite 6** | Lightning-fast build tool & dev server |
| **Tailwind CSS v3** | Dark SOC cybersecurity theme, glassmorphism |
| **Lucide React** | Clean vector icon library |
| **Recharts** | Radar and bar charts for score visualization |
| **React Router v6** | Client-side routing |
| **Canvas-Confetti** | Badge unlock celebration animations |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | NoSQL data persistence |
| **JWT (jsonwebtoken)** | Stateless authentication tokens |
| **Bcryptjs** | Secure password hashing |
| **Helmet** | HTTP security headers |
| **Express-Rate-Limit** | Brute-force API protection |
| **Dotenv** | Environment variable management |

---

## 🏗️ System Architecture

```
                        ┌──────────────────────────────┐
                        │      CYBERSHIELD PORTAL       │
                        └──────────────┬───────────────┘
                                       │
               ┌───────────────────────┴───────────────────────┐
               │                                               │
   ┌───────────▼───────────┐                     ┌────────────▼────────────┐
   │  FRONTEND (client/)   │                     │   BACKEND (server/)     │
   │  React 18 + Vite 6    │ ◄── REST API/JWT ─► │  Node.js + Express      │
   │  Tailwind CSS v3      │                     │  Mongoose + MongoDB      │
   │  Recharts + Lucide    │                     │  Helmet + Rate Limiter   │
   └───────────┬───────────┘                     └────────────┬────────────┘
               │                                               │
   ┌───────────▼───────────┐                     ┌────────────▼────────────┐
   │  Client Demo Mode     │                     │  Database Seeder        │
   │  (localStorage)       │                     │  npm run seed           │
   └───────────────────────┘                     └─────────────────────────┘
```

> **Dual Execution Mode:** The client automatically falls back to `localStorage`-based demo mode if the backend is offline — perfect for offline viva demonstrations.

---

## 📁 Project Structure

```text
cybershield/
├── .env.example                        ← Copy to server/.env and configure
├── .gitignore
├── README.md
├── package.json                        ← Root orchestration scripts
│
├── client/                             ← Frontend React Application
│   ├── public/
│   │   └── favicon.svg                 ← CyberShield shield icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx              ← Responsive nav with score indicator
│   │   │   ├── Footer.jsx              ← Footer with disclaimer
│   │   │   └── BadgeModal.jsx          ← Badge unlock celebration popup
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx         ← Dark/light mode with localStorage
│   │   │   ├── AuthContext.jsx          ← JWT + Demo mode auth
│   │   │   └── ProgressContext.jsx      ← Scores, badges, activity tracking
│   │   ├── data/
│   │   │   ├── quizzes.js              ← Quiz questions & categories
│   │   │   ├── scenarios.js            ← 10 branching scenarios
│   │   │   ├── phishingEmails.js       ← Simulated phishing inbox
│   │   │   ├── tips.js                 ← 10-category security tips
│   │   │   ├── modules.js              ← Learning modules content
│   │   │   └── badges.js               ← Badge definitions
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx         ← Hero, stats, features, rationale
│   │   │   ├── DashboardPage.jsx       ← Score gauge, radar chart, badges
│   │   │   ├── PhishingModule.jsx      ← Interactive phishing simulator
│   │   │   ├── PasswordModule.jsx      ← Local password analyzer
│   │   │   ├── UrlAnalyzerPage.jsx     ← URL heuristic inspector
│   │   │   ├── ScenariosPage.jsx       ← Branching decision scenarios
│   │   │   ├── QuizPage.jsx            ← Multi-tier quiz engine
│   │   │   ├── TipsPage.jsx            ← Searchable tips library
│   │   │   ├── LearningPathsPage.jsx   ← Learning tracks
│   │   │   ├── AdminDashboardPage.jsx  ← Admin analytics + content manager
│   │   │   ├── AboutPage.jsx           ← Project philosophy & stack
│   │   │   └── NotFoundPage.jsx        ← Custom 404 page
│   │   ├── utils/
│   │   │   ├── passwordEvaluator.js    ← Zero-trust Shannon entropy math
│   │   │   └── urlAnalyzer.js          ← Educational URL heuristics engine
│   │   ├── App.jsx                     ← React Router v6 routes
│   │   ├── index.css                   ← Tailwind + glassmorphism styles
│   │   └── main.jsx                    ← DOM root renderer
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── server/                             ← Backend Express API
    ├── src/
    │   ├── config/
    │   │   └── db.js                   ← Mongoose connection
    │   ├── controllers/
    │   │   ├── authController.js       ← Register, login, JWT generation
    │   │   ├── quizController.js       ← Fetch questions, submit quiz
    │   │   └── adminController.js      ← Admin stats & content management
    │   ├── middleware/
    │   │   ├── auth.js                 ← JWT verify + Admin role check
    │   │   ├── rateLimiter.js          ← Brute-force protection
    │   │   └── errorHandler.js         ← Centralized error handling
    │   ├── models/
    │   │   ├── User.js                 ← Bcrypt-hashed user schema
    │   │   ├── QuizQuestion.js         ← Quiz question schema
    │   │   ├── Scenario.js             ← Branching scenario schema
    │   │   └── Tip.js                  ← Security tip schema
    │   ├── routes/
    │   │   ├── authRoutes.js           ← /api/auth/*
    │   │   ├── quizRoutes.js           ← /api/quiz/*
    │   │   └── adminRoutes.js          ← /api/admin/* (Admin-only)
    │   ├── seed/
    │   │   └── seed.js                 ← Database seeder script
    │   └── server.js                   ← Express app entry point
    ├── .env.example
    └── package.json
```

---

## 🚀 Installation & Running Locally

### Prerequisites
- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **npm** v9+
- **MongoDB** *(optional — app works offline in Demo Mode)*

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/cybershield.git
cd cybershield
```

### Step 2: Install All Dependencies

```bash
# Windows
cmd /c "npm run install:all"

# Mac / Linux
npm run install:all
```

### Step 3A: Run Frontend Only (Demo Mode — No MongoDB Needed)

```bash
# Windows
cmd /c "cd client && npm run dev"

# Mac / Linux
cd client && npm run dev
```

Open → **[http://localhost:5173](http://localhost:5173)**

### Step 3B: Run Full Stack (React + Express + MongoDB)

```bash
# 1. Configure server environment variables:
cp .env.example server/.env
# Edit server/.env with your MONGO_URI and JWT_SECRET

# 2. Seed the database with default users & quiz data:
cmd /c "cd server && npm run seed"

# 3. Start both frontend & backend concurrently:
npm install        # installs concurrently at root
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000/api |
| Health Check | http://localhost:5000/api/health |

---

## 🔐 Environment Variables

Create `server/.env` from the template:

```bash
cp .env.example server/.env
```

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Express server port | `5000` |
| `NODE_ENV` | Runtime environment | `development` |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/cybershield` |
| `JWT_SECRET` | JWT signing secret (change this!) | `a_long_random_secret_string_here` |
| `CLIENT_URL` | Allowed CORS origin | `http://localhost:5173` |

> ⚠️ **NEVER commit your real `.env` file to Git.** The `.gitignore` already excludes it.

---

## 🗄️ Database Setup

Run the seeder to populate MongoDB with default data:

```bash
# Windows
cmd /c "cd server && npm run seed"

# Mac / Linux
cd server && npm run seed
```

This creates:

| Account | Email | Password | Role |
|---------|-------|----------|------|
| Student | `alex.student@college.edu` | `StudentPassword123!` | student |
| Admin | `admin@cybershield.edu` | `AdminPassword123!` | admin |

---

## 🔒 Security Features

| Control | Implementation |
|---------|---------------|
| **Zero-Trust Client Analytics** | Password entropy & URL heuristics computed 100% locally in browser — no sensitive data sent to server |
| **Password Hashing** | `bcryptjs` with cost factor 10 — no plaintext storage |
| **JWT Authentication** | Signed tokens with 30-day expiry — Bearer header verification on protected routes |
| **Admin Authorization** | Role-based middleware (`adminOnly`) restricts admin routes to admin users only |
| **API Rate Limiting** | Auth routes: 20 req/15min · API routes: 200 req/15min |
| **HTTP Security Headers** | `helmet` sets X-Frame-Options, X-Content-Type-Options, CSP |
| **CORS Policy** | Restricts cross-origin access to configured `CLIENT_URL` only |
| **Defensive Content** | All simulations use 100% fictional demo data — no real credential collection |

---

## 🌍 Deployment

### Frontend → Vercel (Recommended)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Set **Framework**: `Vite`
4. Set **Root Directory**: `client`
5. Deploy → Your frontend is live at `https://cybershield.vercel.app`

### Backend → Render

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect your GitHub repo
3. Set **Root Directory**: `server`
4. Set **Start Command**: `npm start`
5. Add Environment Variables from `.env.example`
6. Deploy

### Database → MongoDB Atlas

1. Create a free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a database user and get the connection string
3. Update `MONGO_URI` in your Render environment variables

---

## 🎓 Viva Q&A Guide

### Q1: What is the main objective of CyberShield?
**A:** CyberShield addresses the human element in cybersecurity — over 85% of breaches involve human error (phishing clicks, weak passwords, social engineering). Instead of displaying static information, it builds defensive habits through interactive simulations, quizzes, and branching scenarios.

### Q2: How does the Password Analyzer evaluate strength without sending the password to a server?
**A:** It uses client-side JavaScript to compute **Shannon Entropy** using the formula $E = L \times \log_2(R)$, where $L$ = password length and $R$ = character pool size (26 lowercase + 26 uppercase + 10 digits + 32 symbols). It then checks for common dictionary patterns and estimates brute-force crack time at 10 billion guesses/second — entirely inside the browser. Zero network calls.

### Q3: Why does HTTPS (the padlock icon) NOT guarantee a website is safe?
**A:** HTTPS only encrypts the communication channel between your browser and the server. It does NOT verify the legitimacy of the domain. Phishers can obtain free HTTPS certificates for malicious lookalike domains (e.g., `paypal-login-verify.com` could have HTTPS). The URL itself must still be inspected critically.

### Q4: What is Business Email Compromise (BEC)?
**A:** BEC is a social engineering attack where criminals impersonate executives via spoofed or compromised email accounts to request urgent wire transfers or gift cards. Scenario #3 in CyberShield trains users to recognize lookalike domains (`company-corp-group.com` vs `company.com`) and enforce out-of-band telephone verification before any financial transaction.

### Q5: What is the difference between Phishing and Spear Phishing?
**A:** Generic phishing is a mass, indiscriminate campaign (e.g., fake parcel notifications). Spear phishing is precisely targeted at specific individuals or organizations using intelligence harvested from LinkedIn, company websites, or social media (OSINT) to create highly convincing, personalized emails.

### Q6: What is Multi-Factor Authentication (MFA) and why is it superior to passwords alone?
**A:** MFA requires two or more independent verification factors: **Something You Know** (password), **Something You Have** (TOTP authenticator app, hardware key), or **Something You Are** (biometrics). Even if a password is leaked in a breach, an attacker cannot authenticate without the second factor — blocking 99%+ of automated account takeover attacks.

### Q7: What is Smishing?
**A:** Smishing is phishing via SMS text messages. Attackers spoof parcel delivery services, banks, or telecom operators to send links to credential-harvesting pages. CyberShield Simulation #4 demonstrates a classic `$0.99 redelivery fee` smishing attack.

### Q8: What is "Quishing"?
**A:** QR Code Phishing — attackers paste malicious QR sticker overlays on top of legitimate public codes (restaurant menus, parking meters, coffee shop tables) to redirect victims to phishing pages. Scenario #6 covers this threat.

### Q9: How does rate limiting protect the API?
**A:** `express-rate-limit` middleware tracks requests per IP. Auth endpoints (login/register) are limited to 20 requests per 15 minutes, preventing automated brute-force password guessing. General API routes allow 200 requests per 15 minutes.

### Q10: What is the Dual Execution Mode in CyberShield?
**A:** CyberShield can run in two modes: (1) **Full Production Mode** — React frontend + Express backend + MongoDB storing persistent user data with JWT authentication. (2) **Client Demo Mode** — if the backend is offline, the app automatically manages all state via `localStorage`, enabling instant offline demonstrations without any server setup.

---

## 🔮 Future Enhancements

- [ ] AI-powered dynamic phishing email generator using Google Gemini API
- [ ] WebAuthn / FIDO2 hardware key authentication demo
- [ ] PDF completion certificate generator (Awareness Score ≥ 85)
- [ ] Organization leaderboard with team awareness rankings
- [ ] Dark web breach lookup integration (Have I Been Pwned API)
- [ ] Incident response simulation module

---

## 👥 Contributors

| Name | Role |
|------|------|
| Your Name | Full-Stack Developer, System Designer |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with 💙 as a Final-Year Cybersecurity Capstone Project<br/>
  <strong>"Learn. Detect. Protect."</strong>
</p>
