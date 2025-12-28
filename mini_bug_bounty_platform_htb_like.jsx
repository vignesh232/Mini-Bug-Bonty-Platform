// MINI BUG BOUNTY / LAB PLATFORM (HTB-LIKE)
// Tech Stack: React + Node.js + Express + MongoDB (MVP)
// This is a STARTER PLATFORM you can publish on GitHub

/* =========================
   1. PLATFORM FEATURES
========================= */
// ✔ User Registration / Login
// ✔ Labs (Challenges)
// ✔ Flag Submission
// ✔ Points & Leaderboard
// ✔ Bug Report Submission
// ✔ Admin Panel (basic)

/* =========================
   2. PROJECT STRUCTURE
========================= */
// bugbounty-platform/
// ├── backend/
// │   ├── server.js
// │   ├── models/
// │   │   ├── User.js
// │   │   ├── Lab.js
// │   │   └── Report.js
// │   ├── routes/
// │   │   ├── auth.js
// │   │   ├── labs.js
// │   │   └── reports.js
// │   └── middleware/auth.js
// ├── frontend/
// │   ├── src/App.jsx
// │   ├── src/pages/
// │   │   ├── Login.jsx
// │   │   ├── Dashboard.jsx
// │   │   ├── Labs.jsx
// │   │   └── ReportBug.jsx
// │   └── src/components/
// └── README.md

/* =========================
   3. BACKEND (server.js)
========================= */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bugbounty');

app.use('/api/auth', require('./routes/auth'));
app.use('/api/labs', require('./routes/labs'));
app.use('/api/reports', require('./routes/reports'));

app.listen(5000, () => console.log('Server running on port 5000'));

/* =========================
   4. LAB MODEL (Lab.js)
========================= */

const { Schema, model } = require('mongoose');

const labSchema = new Schema({
  title: String,
  description: String,
  difficulty: String,
  flag: String,
  points: Number
});

module.exports = model('Lab', labSchema);

/* =========================
   5. BUG REPORT MODEL (Report.js)
========================= */

const reportSchema = new Schema({
  user: String,
  title: String,
  severity: String,
  description: String,
  poc: String,
  status: { type: String, default: 'Open' }
});

module.exports = model('Report', reportSchema);

/* =========================
   6. FRONTEND (App.jsx)
========================= */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Labs from './pages/Labs';
import ReportBug from './pages/ReportBug';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/labs' element={<Labs />} />
        <Route path='/report' element={<ReportBug />} />
      </Routes>
    </BrowserRouter>
  );
}

/* =========================
   7. BUG REPORT PAGE
========================= */

export default function ReportBug() {
  return (
    <div>
      <h2>Submit Bug Report</h2>
      <input placeholder='Title' />
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
      <textarea placeholder='Description'></textarea>
      <textarea placeholder='PoC'></textarea>
      <button>Submit</button>
    </div>
  );
}

/* =========================
   8. SCORING LOGIC
========================= */
// Easy   → 10 points
// Medium → 20 points
// Hard   → 40 points
// Insane → 80 points

/* =========================
   9. README (What You Publish)
========================= */
// 🚀 Mini Bug Bounty Platform
// - Practice labs like HTB
// - Submit vulnerabilities
// - Earn points & ranking
// - Built for learning & portfolio

/* =========================
   10. NEXT UPGRADES
========================= */
// 🔐 JWT Authentication
// 🏆 Leaderboard
// 🧪 Vulnerable Docker Labs
// 📄 CVE-style reports
// ⚙️ GitHub Actions CI
