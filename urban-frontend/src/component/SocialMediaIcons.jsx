import React from "react";

const SocialMediaIcons = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon bg-primary"
        title="Facebook"
      >
        <i className="fab fa-facebook-f text-white"></i>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon bg-info"
        title="Twitter"
      >
        <i className="fab fa-twitter text-white"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon bg-primary"
        style={{ backgroundColor: "#0077b5" }}
        title="LinkedIn"
      >
        <i className="fab fa-linkedin-in text-white"></i>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
        title="Instagram"
      >
        <i className="fab fa-instagram text-white"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
