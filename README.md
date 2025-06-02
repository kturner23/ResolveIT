# ResolveIT – Enterprise Help Desk Ticketing System

## Overview
**ResolveIT** is a web-based help desk ticketing system designed to streamline IT support operations within enterprise environments. This platform allows users to submit support tickets, track ticket statuses, and receive real-time updates. IT personnel can manage tickets by category, priority, and SLA targets, while also leveraging an internal knowledge base and analytics dashboard for improved resolution efficiency.

---

## Features
- Ticket submission and management dashboard
- Role-based user authentication (user/admin)
- Email and in-app notifications
- SLA tracking with escalation alerts
- Knowledge base with search, rating, and tagging
- Analytics dashboard using Chart.js
- CI/CD pipeline integration with GitHub Actions
- Hosted on Microsoft Azure

---

## Tech Stack
| Layer          | Technology             |
|----------------|------------------------|
| Frontend       | React.js               |
| Backend        | Node.js, Express.js    |
| Database       | SQL Server             |
| Deployment     | Microsoft Azure        |
| CI/CD          | GitHub Actions         |
| Notifications  | Nodemailer, React Toastify |
| Charts         | Chart.js               |

---

## Project Structure
/resolveit-helpdesk
├── /client # React frontend
├── /server # Node.js backend
├── README.md
└── .gitignore

---

## Getting Started (Local Setup)

### Prerequisites
- Node.js (v18 or later)
- SQL Server Management Studio
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/kturner23/ResolveIT.git
cd ResolveIT

# Setup frontend
cd client
npm install
npm start

# In another terminal
cd ../server
npm install
npm run dev

---

## Deployment 
The application is deployed on Microsoft Azure using Azure App Services. CI/CD is configured with GitHub Actions to automate deployment on push to the main branch.

## Contributors
Kiara Turner - Full Stack Developer & Project Lead
