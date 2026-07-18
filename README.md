# 📸 Mini Post Maker

A modern **MERN Stack** social media application inspired by the core posting experience of platforms like **Instagram**. This project recreates the complete post creation workflow, allowing users to upload images with captions, preview them before publishing, and instantly view them in a dynamic feed.

Unlike basic CRUD applications, **Mini Post Maker** follows a more production-oriented architecture by integrating **ImageKit** for cloud-based image storage. Images are uploaded to ImageKit, and only the optimized CDN URLs are stored in **MongoDB**, keeping the database lightweight while ensuring fast and reliable image delivery.

> **A complete full-stack implementation of a modern social media posting workflow using React, Node.js, Express.js, MongoDB, and ImageKit.**

---

## ✨ Features

* 📸 Upload images with custom captions.
* 🖼️ Live image preview before publishing.
* ☁️ Cloud image storage using **ImageKit**.
* 🔗 Store optimized ImageKit CDN URLs in MongoDB.
* 📰 Dynamic feed displaying uploaded posts instantly.
* ⚡ RESTful API integration using Axios.
* 🎨 Modern glassmorphism-inspired responsive UI.
* 📱 Mobile-friendly responsive design.
* 💾 MongoDB database integration using Mongoose.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* Multer

### Database

* MongoDB
* Mongoose

### Cloud Storage

* ImageKit

### Tools

* Git
* GitHub
* VS Code

---

## 🏗️ Architecture

```text
User
   │
   ▼
React Frontend
   │
   ▼
Express REST API
   │
   ├────────► ImageKit
   │             │
   │             ▼
   │      Optimized Image URL
   │
   ▼
MongoDB
(Store Caption + Image URL)
   │
   ▼
React Feed
(Display Uploaded Posts)
```

---

## 📂 Project Structure

```text
Mini-Post-Maker/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── uploads/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/PriyanshiVerma98/Mini-Post-Maker.git
```

```bash
cd Mini-Post-Maker
```

---

## 📦 Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PRIVATE_KEY=your_private_key

```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm run dev
```

Application will run on:

* Frontend → http://localhost:5173
* Backend → http://localhost:3000

---


## 💡 How It Works

1. User selects an image and writes a caption.
2. The image is uploaded securely to **ImageKit Cloud Storage**.
3. ImageKit returns an optimized CDN URL.
4. The backend stores the caption and image URL in **MongoDB**.
5. The Feed page fetches all posts from the database.
6. Images are rendered directly from ImageKit, ensuring fast loading and optimized delivery.

---

## 📚 What I Learned

During this project, I gained practical experience in:

* Building a complete MERN Stack application.
* Designing and consuming RESTful APIs.
* Uploading media using Multer.
* Integrating ImageKit for cloud-based image storage.
* Managing images through optimized CDN URLs.
* Working with MongoDB and Mongoose.
* Connecting frontend and backend using Axios.
* Designing responsive user interfaces with Tailwind CSS.
* Structuring scalable full-stack applications following modern development practices.

---

## 👩‍💻 Author

**Priyanshi Verma**

**Full Stack MERN Developer**

* 🌐 Portfolio: *(Add Portfolio URL)*
* 💼 LinkedIn: *(Add LinkedIn URL)*
* 💻 GitHub: https://github.com/PriyanshiVerma98

---

## ⭐ Show Your Support

If you enjoyed this project or found it helpful, consider giving it a **⭐ Star** on GitHub.

It motivates me to build more full-stack applications and contribute to open-source projects.

Happy Coding! 🚀
