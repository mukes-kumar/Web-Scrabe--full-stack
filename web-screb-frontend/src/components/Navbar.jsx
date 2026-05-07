import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Newspaper, Bookmark, LogOut, LogIn, UserPlus, Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar glass" style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1000,
      height: "70px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid var(--glass-border)",
      borderRadius: "0"
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "var(--primary)",
          fontSize: "1.5rem",
          fontWeight: "800"
        }}>
          <Newspaper size={28} />
          <span style={{ color: "white" }} className="logo-text">HN</span>Scraper
        </Link>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <Link to="/" className="nav-link">Home</Link>

          {user ? (
            <>
              <Link to="/bookmarks" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Bookmark size={18} /> Bookmarks
              </Link>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span style={{ color: "white", fontSize: "0.875rem", fontWeight: "600" }}>{user.name}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{user.email}</span>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <LogOut size={18} />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                <LogIn size={18} /> Login
              </Link>
              <Link to="/register" className="register-btn">
                <UserPlus size={18} /> Join
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{
          display: "none",
          background: "transparent",
          color: "white"
        }}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu glass" style={{
          position: "absolute",
          top: "70px",
          left: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          borderTop: "1px solid var(--glass-border)",
          borderRadius: "0 0 16px 16px"
        }}>
          {user && (
            <div style={{ padding: "0 0 15px 0", borderBottom: "1px solid var(--glass-border)" }}>
              <div style={{ color: "white", fontSize: "1rem", fontWeight: "600" }}>{user.name}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{user.email}</div>
            </div>
          )}

          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>

          {user ? (
            <>
              <Link to="/bookmarks" className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Bookmark size={20} /> Bookmarks
              </Link>
              <button onClick={handleLogout} className="logout-btn" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "10px", padding: "12px" }}>
                <LogOut size={20} /> Logout
              </button>
            </>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: "center" }}>
                <LogIn size={20} /> Login
              </Link>
              <Link to="/register" className="register-btn" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: "center" }}>
                <UserPlus size={20} /> Join
              </Link>
            </div>
          )}
        </div>
      )}

      <style>{`
        .nav-link {
          color: var(--text-main);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .logout-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .logout-btn:hover {
          background: #ef4444;
          color: white;
        }
        .login-btn, .register-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .login-btn {
          color: white;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
        }
        .register-btn {
          background: var(--primary);
          color: white;
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .logo-text {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
