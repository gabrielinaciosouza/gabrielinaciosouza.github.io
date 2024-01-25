import { Link } from "react-router-dom";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <main className="main">
      <AnimatedBackground />
      <div className="home-wrapper">
        <div className="center">
          <h2 className="home-title">👋 Hi! I'm Gabriel</h2>
          <p className="description ">
            A full-stack developer, focuses on Flutter and Spring Boot (Java). I
            have an absolute passion for architecture and unit testing. I have
            worked on large-scale projects with thousands of daily accesses and
            over millions of dollars in sales, particularly in the food delivery
            and marketplace sectors within the banking and financial
            environment.
          </p>
          <Link to="/posts">
            <button className="button">
              <span>Take a look at my blog!</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </main>
  );
}
