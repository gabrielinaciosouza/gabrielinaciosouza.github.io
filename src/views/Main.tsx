import "../styles/Main.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Home from "./Home";

export default function Main() {
  return (
    <div className="main-wrapper">
      <header className="main-header">
        <div className="main-header-center">
          <Link to="/" className="main-title-link">
            <span className="main-title">Gabriel's Blog</span>
          </Link>
          <div className="main-nav">
            <NavLink to="/posts">
              <a className="main-nav-button">
                <span>Posts</span>
              </a>
            </NavLink>
            <div className="main-divider"></div>

            <a
              className="main-nav-button"
              href="mailto:gabriel.sert9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="main-icon" />
            </a>

            <a
              className="main-nav-button"
              href="https://github.com/gabrielinaciosouza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>

            <a
              className="main-nav-button"
              href="https://www.linkedin.com/in/gabriel-inacio-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="main-footer">
        <div className="main-footer-center">
          <span>2024-present © Gabriel Inacio</span>
        </div>
      </footer>
    </div>
  );
}
