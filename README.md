# 📺 StreamSentra — Frontend

A modern and responsive video-streaming dashboard built with **Next.js**, integrated with a Kafka-powered backend, Cloudinary video delivery, and secure JWT authentication.  
Designed for speed, clarity, and a delightful user experience.

---

## 🚀 Tech Stack

### Frontend
<p align="left">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,vercel" />
</p>

### Backend & Cloud
<p align="left">
  <img src="https://skillicons.dev/icons?i=nestjs" />  
</p>

- **Cloudinary** – Video upload & optimized delivery  
- **Kafka** – Asynchronous events & processing  
- **JWT Auth** – Secure user authentication  

---

## ✨ Features

### 👤 User-Facing Experience
- Clean and elegant UI  
- Fully responsive (mobile & desktop)  
- Dark mode support  
- Smooth video playback  
- Beautiful homepage promoting the platform  

### 🔐 Authentication
- Secure login and registration  
- JWT-based session handling  
- Automatic redirect if user is not authenticated  

### 🎞️ Video Management
- Upload videos to Cloudinary  
- View all your videos in a responsive grid  
- Watch videos directly in the dashboard  
- Open video source link  
- Loading, empty states, and error handling  

---

## 📁 Project Structure

frontend/
│── app/
│ ├── auth/
│ │ ├── login/
│ │ └── register/
│ ├── video/
│ │ ├── create/
│ │ └── get-all/
│ └── page.tsx
│
│── context/
│ └── AuthContext.tsx
│
│── server/
│ └── api.ts
│
│── components/
│
└── public/

---

## 🔧 Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_API_URL=https://your-backend-url.com


---

## ▶️ Run Locally

```bash
git clone https://github.com/TheRealCocky/stremaforge-client
cd stremaforge-client
npm install
npm run dev


App running at:
👉 http://localhost:3000

🧩 API Integration

This frontend consumes the official StreamSentra backend:

➡️ Backend Repository:
https://github.com/TheRealCocky/stremaforge-server

Endpoints used:

POST /auth/register
POST /auth/login
GET  /videos
POST /videos/create


All video routes require a Bearer token.

🌐 Deployment

Optimized for Vercel:

vercel deploy


Live version:
🔗 https://streamsentra.vercel.app

🧑‍💻 Author

TheRealCocky
Full-stack developer passionate about cloud media pipelines, modern web apps, and distributed systems.

⭐ Contribute

PRs and suggestions are welcome!



