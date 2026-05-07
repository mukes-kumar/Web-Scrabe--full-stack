import React, { useState, useEffect } from "react";
import api from "../services/api";
import StoryCard from "../components/StoryCard";
import { Bookmark, RefreshCw, Archive } from "lucide-react";

const Bookmarks = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/stories/bookmarks");
      setStories(data.data);
    } catch (err) {
      console.error("Failed to load bookmarks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const removeBookmark = async (storyId) => {
    try {
      await api.post(`/stories/${storyId}/bookmark`);
      setStories(prev => prev.filter(s => s._id !== storyId));
    } catch (err) {
      console.error("Failed to remove bookmark");
    }
  };

  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "10px", display: "flex", alignItems: "center", gap: "15px" }}>
          <Bookmark size={36} color="var(--primary)" fill="var(--primary)" />
          My <span style={{ color: "var(--primary)" }}>Bookmarks</span>
        </h1>
        <p style={{ color: "var(--text-muted)" }}>Your curated collection of Hacker News stories</p>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "100px" }}>
          <RefreshCw className="animate-spin" size={40} color="var(--primary)" />
        </div>
      ) : stories.length === 0 ? (
        <div className="glass" style={{ padding: "80px 40px", textAlign: "center" }}>
          <Archive size={64} style={{ marginBottom: "20px", color: "var(--text-muted)" }} />
          <h2 style={{ marginBottom: "10px" }}>No bookmarks yet</h2>
          <p style={{ color: "var(--text-muted)" }}>Start exploring and save stories you find interesting!</p>
        </div>
      ) : (
        <div className="stories-grid">
          {stories.map(story => (
            <StoryCard 
              key={story._id} 
              story={story} 
              isBookmarked={true}
              onBookmarkToggle={removeBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
