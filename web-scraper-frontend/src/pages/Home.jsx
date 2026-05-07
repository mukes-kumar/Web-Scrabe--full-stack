import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import StoryCard from "../components/StoryCard";
import { toast } from "react-hot-toast";
import { RefreshCw, Zap, AlertCircle } from "lucide-react";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [scraping, setScraping] = useState(false);
  
  const { user } = useAuth();

  const fetchStories = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/stories");
      setStories(data.data.stories);
    } catch (err) {
      setError("Failed to load stories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookmarks = async () => {
    if (!user) return;
    try {
      const { data } = await api.get("/stories/bookmarks");
      setBookmarks(data.data.map(b => b._id));
    } catch (err) {
      console.error("Failed to load bookmarks");
    }
  };

  const handleScrape = async () => {
    try {
      setScraping(true);
      const { data } = await api.post("/scrape");
      toast.success(data.message || "Scraping completed!");
      await fetchStories();
    } catch (err) {
      toast.error("Scraping failed");
    } finally {
      setScraping(false);
    }
  };

  useEffect(() => {
    fetchStories();
    fetchBookmarks();
  }, [user]);

  const toggleBookmark = async (storyId) => {
    if (!user) {
      toast.error("Please login to bookmark stories");
      return;
    }

    try {
      const { data } = await api.post(`/stories/${storyId}/bookmark`);
      
      if (data.data.isBookmarked) {
        toast.success("Added to bookmarks");
      } else {
        toast.success("Removed from bookmarks");
      }

      setBookmarks(prev => 
        prev.includes(storyId) 
          ? prev.filter(id => id !== storyId) 
          : [...prev, storyId]
      );
    } catch (err) {
      toast.error("Failed to update bookmark");
    }
  };

  return (
    <div className="container main-content">
      <div className="header-section">
        <div className="title-group">
          <h1 className="main-title">
            Trending <span style={{ color: "var(--primary)" }}>Stories</span>
          </h1>
          <p className="subtitle">Top 10 fresh tech news from Hacker News</p>
        </div>
        
        <button 
          onClick={handleScrape} 
          disabled={scraping}
          className="glass scrape-btn"
        >
          {scraping ? <RefreshCw className="animate-spin" size={20} /> : <Zap size={20} color="var(--primary)" fill="var(--primary)" />}
          {scraping ? "Scraping..." : "Scrape Now"}
        </button>
      </div>

      {loading ? (
        <div className="loader-container">
          <RefreshCw className="animate-spin" size={40} color="var(--primary)" />
        </div>
      ) : error ? (
        <div className="glass error-card">
          <AlertCircle size={48} style={{ marginBottom: "16px" }} />
          <p>{error}</p>
        </div>
      ) : (
        <div className="stories-grid">
          {stories.map(story => (
            <StoryCard 
              key={story._id} 
              story={story} 
              isBookmarked={bookmarks.includes(story._id)}
              onBookmarkToggle={toggleBookmark}
            />
          ))}
        </div>
      )}

      <style>{`
        .main-content {
          padding: 40px 20px;
        }
        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .subtitle {
          color: var(--text-muted);
        }
        .scrape-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          color: white;
          font-weight: 600;
          border: 1px solid var(--primary);
        }
        .loader-container {
          display: flex;
          justify-content: center;
          padding: 100px;
        }
        .error-card {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @media (max-width: 768px) {
          .header-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .main-title {
            font-size: 2rem;
          }
          .scrape-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
