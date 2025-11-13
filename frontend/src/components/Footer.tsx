import type { CSSProperties } from "react";

const footerStyle: CSSProperties = {
  backgroundColor: "hsla(0, 0%, 0%, 0.8)",
  color: "#fff",
  padding: "2rem 1rem",
  marginTop: "auto",
};

const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  textAlign: "center",
};

const logoStyle: CSSProperties = {
  margin: "0 auto",
  height: "36px",
};

const metaStyle: CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(255,255,255,0.75)",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <img
          src="/industry_nav_logo.png"
          alt="ACM Industry logo"
          style={logoStyle}
        />
        <strong>Demo Website</strong>
        <span style={metaStyle}>
          © {year} ACM Industry • Built for CI/CD training demos
        </span>
      </div>
    </footer>
  );
}
