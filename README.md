# HN Scraper - Full Stack MERN Application

A professional Web Scraper application built with the MERN stack that fetches trending tech stories from Hacker News (YCombinator). It features JWT authentication, automated scraping, and a personal bookmarking system.

---

## 🚀 Features

### **Backend**
- **Automated Scraper**: Scrapes the top 10 stories from Hacker News on server startup and via a manual API trigger.
- **Story Management**: Stores Title, URL, Points, Author, and Posted Time in MongoDB.
- **JWT Authentication**: Secure Register and Login system with encrypted passwords (bcrypt).
- **Bookmark API**: Authenticated system to save/remove stories from a user's personal collection.
- **Professional Architecture**: Follows Controller-Service-Model-Middleware pattern.

### **Frontend**
- **Modern UI/UX**: Premium dark-themed design with Glassmorphism and responsive layouts.
- **Real-time Notifications**: Integrated `react-hot-toast` for API response feedback.
- **Protected Routes**: Secure navigation ensuring personal bookmarks are only accessible to logged-in users.
- **Public View**: Allows anyone to see trending news, encouraging user engagement.
- **Responsive Navbar**: Mobile-ready hamburger menu with user profile display.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite), Axios, React Router 7, Lucide-React, React Hot Toast.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Cheerio (Scraper), Joi (Validation), JWT.
- **Design**: Vanilla CSS with modern Glassmorphism.

---

## 📸 Screenshots

> [!TIP]
> Add your screenshots here to make the README more impressive.

### **1. Home Page (Trending Stories)**
<!-- ADD IMAGE HERE: path/to/home_page_screenshot.png -->
![Home Page Placeholder](https://via.placeholder.com/800x450.png?text=Home+Page+with+Story+Cards)

### **2. Mobile Responsive Menu**
<!-- ADD IMAGE HERE: path/to/mobile_menu_screenshot.png -->
![Mobile Menu Placeholder](https://via.placeholder.com/300x600.png?text=Mobile+Responsive+Menu)

### **3. Authentication (Login/Register)**
<!-- ADD IMAGE HERE: path/to/auth_screenshot.png -->
![Auth Page Placeholder](https://via.placeholder.com/800x450.png?text=Premium+Login+UI)

---

## ⚙️ Installation & Setup

### **1. Backend Setup**
1. Navigate to the backend folder:
   ```bash
   cd web-screb-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Create a `config/config.env` file and add:
   ```env
   PORT = 8000
   DB_LOCAL_URI = your_mongodb_connection_string
   JWT_SECRET = your_secret_key
   JWT_EXPIRES_TIME = 7d
   SERVICE_URL = /api/web-scraper/v1
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### **2. Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd web-screb-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Create a `.env` file in the root of the frontend folder:
   ```env
   VITE_API_URL = http://localhost:8000/api/web-scraper/v1
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📋 Assignment Requirements Met

- [x] Scrape `https://news.ycombinator.com` for top 10 stories.
- [x] Store Title, URL, Points, Author, and Posted Time.
- [x] Implement Manual Scrape API (`POST /api/scrape`).
- [x] JWT Authentication (Register/Login).
- [x] Bookmark stories with persistence via Backend API.
- [x] Display stories list in React with required fields.
- [x] Professional Folder Structure and Clean Code.
- [x] Impressive and Responsive UI Design.

---

## 📄 License
This project is built for assignment purposes. Feel free to use and modify.
