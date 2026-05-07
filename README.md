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
<img width="1599" height="814" alt="image" src="https://github.com/user-attachments/assets/dadfec49-d76c-4df6-9cd5-e439606d6086" />


### **2. Mobile Responsive Menu**
<!-- ADD IMAGE HERE: path/to/mobile_menu_screenshot.png -->
<img width="320" height="537" alt="image" src="https://github.com/user-attachments/assets/1ba0fa89-a941-487f-b383-4df5187f2a99" />


### **3. Authentication (Login/Register)**
<!-- ADD IMAGE HERE: path/to/auth_screenshot.png -->
<img width="1405" height="822" alt="image" src="https://github.com/user-attachments/assets/1f006946-3307-405c-8e8f-e5e5fdb0a901" />
<img width="1009" height="789" alt="image" src="https://github.com/user-attachments/assets/dbd1cc1f-beaf-4440-808a-a71e5269c073" />


### **4. Authorizations User (BookMarks See Own)**
<img width="1041" height="776" alt="image" src="https://github.com/user-attachments/assets/2a916d7f-501d-4ff0-b6bc-ee16f25caa4c" />


---

## ⚙️ Installation & Setup

> [!CAUTION]
> **Security Warning**: Never push your `.env` files to GitHub. They contain sensitive credentials (like MongoDB URIs and JWT Secrets). Both folders include a `.env.example` file as a template.

### **1. Backend Setup**
1. Navigate to the backend folder:
   ```bash
   cd web-screb-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Environment Configuration**:
   - Locate the `.env.example` file in the backend root.
   - Create a new file named `.env` in the same folder.
   - Copy the contents from the example and fill in your actual values:
     - `DB_LOCAL_URI`: Your MongoDB connection string.
     - `JWT_SECRET`: A secure random string for token encryption.
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
3. **Environment Configuration**:
   - Locate the `.env.example` file in the frontend root.
   - Create a new file named `.env` in the same folder.
   - Copy the contents and ensure the `VITE_API_URL` points to your running backend.
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
