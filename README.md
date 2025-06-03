# 🛍️ Myntra React Clone

A full-stack e-commerce web application inspired by [Myntra](https://www.myntra.com/), built using **React + Redux** for the frontend and **Node.js + Express** for the backend.

> 🚀 This is a personal project to learn and implement concepts of frontend architecture, Redux state management, API integration, routing, and server setup without a database.

---

## 📁 Project Structure
```
├── 2-Actual-Backend/ # Node.js + Express server
├── 3-myntra-react-clone/ # React + Redux frontend (Vite)
├── Pre-Model/ # Model logic or mock data (optional use)
└── .gitignore
```
---

## ✨ Features

### Frontend (React + Redux Toolkit)
- React 19 + Vite-powered
- Redux Toolkit for global state management
- Routing with `react-router-dom`
- Responsive design using Bootstrap
- Components for product listing, filters, cart, etc.

### Backend (Node.js + Express)
- Simple REST API without a database
- Hardcoded or mock data served via endpoints
- Runs on `http://localhost:8000`

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/myntra-clone.git
cd myntra-clone
```
### 2. Install Frontend Dependencies

```bash
cd 3-myntra-react-clone
npm install
```

### 3. Start the Frontend
```bash
npm run dev
```
Frontend will start on http://localhost:5173

### 4. Install & Start Backend
```bash
cd ../2-Actual-Backend
npm install
node index.js
```
---

### API Overview
| Endpoint        | Method | Description             |
| --------------- | ------ | ----------------------- |
| `/api/products` | GET    | Fetch product list      |
| `/api/cart`     | POST   | Add item to cart (mock) |
| `/api/login`    | POST   | Simulate login endpoint |

Note: These endpoints are for demo use and operate on static or mock data.
---
### ⚙️ Tech Stack
| Layer    | Tech                                     |
| -------- | ---------------------------------------- |
| Frontend | React 19, Redux Toolkit, Vite, Bootstrap |
| Routing  | React Router v7                          |
| Backend  | Node.js, Express                         |
| Icons    | react-icons                              |
| Linting  | ESLint                                   |

---

### 📌 TODO (Future Enhancements)

- Connect with a real database (e.g., MongoDB or PostgreSQL)
- Add authentication with JWT
- Integrate product search and filter features
- Implement real-time cart updates
- Stripe or Razorpay integration for checkout

---
 ### 🧠 Learning Outcomes
-Mastered Redux Toolkit with scalable architecture
-Understood Vite-based React project structuring
-Implemented backend API using Express
-Practiced full-stack integration and debugging

### 🧔 Author
Mahim Yadav
Coordinator, Coding Club – IIT Jammu

Feel free to reach out for feedback, collaboration, or just to talk code.
>"Build projects. Break stuff. Learn fast."



