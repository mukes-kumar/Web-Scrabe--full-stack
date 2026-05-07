import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial bookmarks when user is loaded
  const fetchUserBookmarks = async () => {
    try {
      const { data } = await api.get("/stories/bookmarks");
      setBookmarks(data.data.map(b => b._id || b));
    } catch (err) {
      console.error("Failed to fetch bookmarks");
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchUserBookmarks();
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      const { token, user: userData } = data.data;
      
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      fetchUserBookmarks(); // Load bookmarks on login
      toast.success(data.message || "Logged in successfully!");
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
      return { success: false, message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/auth/register", { name, email, password });
      const { token, user: userData } = data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setBookmarks([]); // New user has no bookmarks
      toast.success(data.message || "Registered successfully!");
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed";
      toast.error(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setBookmarks([]);
    toast.success("Logged out successfully");
  };

  const updateBookmarksGlobally = (newBookmarks) => {
    setBookmarks(newBookmarks);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      bookmarks, 
      loading, 
      login, 
      register, 
      logout, 
      updateBookmarksGlobally 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
