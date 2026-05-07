import React from "react";
import { Bookmark, ExternalLink, User, Clock, Star } from "lucide-react";

const StoryCard = ({ story, isBookmarked, onBookmarkToggle, isBookmarkLoading }) => {
  return (
    <div className="story-card glass" style={{
      padding: "24px",
      marginBottom: "20px",
      transition: "transform 0.3s ease, border-color 0.3s ease",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <a 
            href={story.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "700",
              lineHeight: "1.4",
              display: "block",
              marginBottom: "12px",
              transition: "color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.color = "var(--primary)"}
            onMouseOut={(e) => e.target.style.color = "white"}
          >
            {story.title} <ExternalLink size={14} style={{ display: "inline", verticalAlign: "middle" }} />
          </a>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", color: "var(--text-muted)", fontSize: "0.875rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Star size={14} fill={story.points > 0 ? "var(--primary)" : "none"} color={story.points > 0 ? "var(--primary)" : "currentColor"} />
              {story.points} points
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <User size={14} />
              {story.author}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={14} />
              {story.postedAt}
            </span>
          </div>
        </div>

        <button 
          onClick={() => onBookmarkToggle(story._id)}
          disabled={isBookmarkLoading}
          style={{
            background: isBookmarked ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
            color: isBookmarked ? "white" : "var(--text-muted)",
            padding: "10px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid " + (isBookmarked ? "var(--primary)" : "var(--glass-border)"),
            transition: "all 0.3s ease"
          }}
        >
          <Bookmark size={20} fill={isBookmarked ? "white" : "none"} />
        </button>
      </div>

      <style>{`
        .story-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 102, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default StoryCard;
