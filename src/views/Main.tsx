import "../styles/Main.css";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Home from "./Home";

export default function Main() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-center">
          <Link to="/" className="title-link">
            <span className="title">Gabriel's Blog</span>
          </Link>
          <div className="nav">
            <a className="nav-button">
              <span>Posts</span>
            </a>

            <div className="divider"></div>

            <a
              className="nav-button"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>

            <a
              className="nav-button"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>

            <a
              className="nav-button"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>
      </header>
      <Home />
      <footer className="footer">
        <div className="footer-center">
          <span>2024-present © Gabriel Inacio</span>
        </div>
      </footer>
    </div>
  );
}
