# 📝 Blog App using React & Appwrite

A modern, full-stack **blogging platform** built with **React (Vite)** and **Appwrite**.  
It supports authentication, post creation, image uploads, and a clean writing experience.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- ✍️ Create, edit & delete blog posts
- 🖼 Image upload with Appwrite Storage
- 📚 Browse all published posts
- 🎨 Clean & responsive UI (Tailwind CSS)
- ⚡ Fast build using Vite
- ☁️ Backend powered by Appwrite

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Redux Toolkit
- React Hook Form
- React Router DOM

**Backend / Services**
- Appwrite (Auth, Database, Storage)

**Deployment**
- Vercel

---

## 📁 Project Structure

├── public
├── src
│ ├── appwrite
| ├── assets
│ ├── components
│ ├── conf
│ ├── pages
│ ├── store
│ ├── App.jsx
│ └── main.jsx
├── .env.sample
├── package.json
├── vite.config.js
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables  
(use `.env.sample` as reference):

VITE_APPWRITE_URL=""    
VITE_APPWRITE_PROJECT_ID=""         
VITE_APPWRITE_DATABASE_ID=""         
VITE_APPWRITE_TABLE_ID=""                  
VITE_APPWRITE_BUCKET_ID=""

---

⚠️ **Do not commit `.env` to GitHub**

---

## ▶️ Run Locally

1. Clone the repository
-> git clone https://github.com/BabaYagashka/Blog-App-using-React-and-Appwrite.git

2.Install dependencies
-> npm install

3.Start the development server
-> npm run dev

---

🌐 Deployment

This project is deployed on Vercel: https://blog-app-using-react-and-appwrite-two.vercel.app/

---

🙌 Author

Viraj Shinde

---

