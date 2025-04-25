import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const titles = [
    "I'm a Software Developer",
    "I'm a Web Developer",
    "I'm an AI and ML Engineer",
    "I'm a Frontend Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    const currentText = titles[index];
    const timeout = setTimeout(() => {
      setText(
        deleting
          ? currentText.substring(0, subIndex - 1)
          : currentText.substring(0, subIndex + 1)
      );
      setSubIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && subIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <>
<header>
  <h1>Ramya</h1>
  <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    <i className="fas fa-bars"></i>
  </div>
  <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#internship" onClick={() => setMenuOpen(false)}>Internship</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Find Me</a>
  </nav>
</header>

<section className="home" id="home">
        <div className="home-content">
          <h2>Hello 👋, I'm <span>Ramya</span></h2>
          <p className="typewriter">{text}<span className="cursor">|</span></p>
        </div>
        <div className="home-image">
          <img src="../src/assets/girl.png" alt="Ramya Illustration" />
        </div>
</section>

<section id="about" className="about" data-aos="fade-up">
  <h2 className="section-title">About Me</h2>
  <div className="about-container">
    <div className="about-text" data-aos="fade-right">
    <p>
        I’m a  <span className="highlight">B.Tech student</span> at Parul University with a strong academic background 
        (<span className="highlight">CGPA 8.22</span>) and a passion for building impactful tech solutions.
      </p>
      <p>
        With hands-on experience in <span className="highlight">full-stack development</span> (ReactJS, NodeJS, ExpressJS, MySQL, MongoDB) and 
        a growing interest in <span className="highlight">AI/ML</span>, I love crafting innovative apps that solve real-world problems.
      </p>
      <p>
        From intelligent systems like <span className="highlight">plant disease detection</span> to sleek UI design, 
        I bring both logic and creativity to every project.
      </p>
      <p>
        I’m a <span className="highlight">fast learner</span>, a <span className="highlight">team player</span>, and always up for 
        exciting new tech challenges!
      </p>
    </div>

    <div className="about-image-container" data-aos="fade-left">
      <img src="../src/assets/profilell.jpg" alt="Ramya's photo" className="about-img" />
      <div className="resume-btn-container">
        <a href="/Ramya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          📄 Download Resume
        </a>
      </div>
    </div>
  </div>
</section>


<section id="internship" className="internship">
  <h2 className="section-title">Internship Experience</h2>
  <div className="internship-item">
    <h3>AI & Machine Learning Intern <span>@ InternDev Pvt Ltd</span></h3>
    <p>
      I gained hands-on experience in <span className="highlight">AI and Machine Learning</span>, working on data analysis, model development,
      and deployment using <span className="highlight">Python</span>, <span className="highlight">TensorFlow</span>, and 
      <span className="highlight">scikit-learn</span>.
    </p>
    <p>
      Contributed to the development and optimization of machine learning models and enhanced my technical and problem-solving skills.
    </p>
    <p className="skills"><strong>Key Skills:</strong> AI, ML, TensorFlow, scikit-learn &nbsp;|&nbsp; <span className="highlight">3-month Internship</span></p>
  </div>
</section>

    {/* Projects */}
<section className="projects" id="projects" data-aos="fade-up">
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">
    <div className="project-card" data-aos="zoom-in">
      <img src="../src/assets/plant.png" alt="Plant Leaf Disease Detection" className="project-img" />
      <div className="project-content">
        <h3>Plant Leaf Disease Detection</h3>
        <p>
        Developed a deep learning-based system for detecting and classifying plant leaf diseases using image analysis. 
        The model, trained on the PlantVillage dataset, helps farmers quickly identify diseases and take timely action, reducing crop loss. 
         this project combines AI with agriculture for practical, real-world applications.
        </p>
        <div className="tech-stack">
          <span className="tech-item">Python</span>
          <span className="tech-item">TensorFlow</span>
          <span className="tech-item">OpenCV</span>
        </div>
        <a
          href="https://github.com/gavinolla-Ramya/Plant-leaf-disease-detection-using-ML-"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in">
      <img src="../src/assets/sign.png" alt="sign language " className="project-img" />
      <div className="project-content">
        <h3>Sign Language Detection</h3>
        <p>
        Developed an intelligent real-time system capable of recognizing and translating hand gestures into text using computer vision and deep learning, aimed at bridging the communication gap for the hearing and speech impaired.
        </p>
        <div className="tech-stack">
        <span className="tech-item">Python</span>
          <span className="tech-item">TensorFlow</span>
          <span className="tech-item">OpenCV</span>
        </div>
        <a
          href="https://github.com/gavinolla-Ramya/Sign-language-detection"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>
    </div>
    <div className="project-card" data-aos="zoom-in">
      <img src="../src/assets/weather.png" alt="weather app " className="project-img" />
      <div className="project-content">
        <h3>Weather App</h3>
        <p>
        A responsive web application that displays real-time weather data for any location using OpenWeatherMap API. It shows temperature, humidity, weather conditions, and more with a clean, intuitive UI.
        </p>
        <div className="tech-stack">
        <span className="tech-item">HTML</span>
          <span className="tech-item">CSS</span>
          <span className="tech-item">Javascript</span>
          <span className="tech-item">API</span>
        </div>
        <a
          href="https://github.com/gavinolla-Ramya/Weather-App-"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>


<section id="skills" className="skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <img src="../src/assets/html.png" alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/css.png" alt="CSS" />
      <p>CSS</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/js.png" alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/react.png" alt="React" />
      <p>ReactJS</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/node.png" alt="Node.js" />
      <p>NodeJS</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/express.png" alt="ExpressJS" />
      <p>ExpressJS</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/mongodb.png" alt="MongoDB" />
      <p>MongoDB</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/mysql.png" alt="MySQL" />
      <p>MySQL</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/python3.png" alt="Python" />
      <p>Python</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/ml.png" alt="Machine Learning" />
      <p>Machine Learning</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/DSA.png" alt="Deep Learning" />
      <p>DSA</p>
    </div>
    <div className="skill-card">
      <img src="../src/assets/git.png" alt="Git & GitHub" />
      <p>Git & GitHub</p>
    </div>
  </div>
</section>
{/* Tools */}
<section id="tools" className="tools">
  <h2>Tools</h2>
  <div className="tools-grid">
    <div className="tool-card">
      <img src="../src/assets/vscode.png" alt="VS Code" />
      <p>VS Code</p>
    </div>
    <div className="tool-card">
      <img src="../src/assets/postman.png" alt="Postman" />
      <p>Postman</p>
    </div>
    <div className="tool-card">
      <img src="../src/assets/window.png" alt="Windows" />
      <p>Windows</p>
    </div>
  </div>
</section>


<section id="contact">
  <h2>Find Me</h2>
  <p className="section-intro">
    Let's connect and build something great together!
  </p>
  <div className="contact-logos">
    {/* <a href="mailto:gavinollaramya@example.com" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/mail1.png" alt="Email" className="contact-logo" />
    </a> */}
    <a href="https://www.linkedin.com/in/gavinolla-ramya" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/linkedin1.png" alt="LinkedIn" className="contact-logo" />
    </a>
    <a href="https://github.com/gavinolla-Ramya" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/github.png" alt="GitHub" className="contact-logo" />
    </a>
    <a href="https://leetcode.com/u/gavinollaramya9/" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/leetcode.png" alt="LeetCode" className="contact-logo"/>
    </a>
    <a href="https://www.hackerrank.com/profile/gavinollaramya9" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/hackerrank1.png" alt="HackerRank" className="contact-logo" />
    </a>
  </div>
</section>

<footer className="footer">
<div className="footer-left">Designed & Developed by <span>Ramya</span></div>
  <div className="footer-center">© {new Date().getFullYear()} All rights reserved</div>
  <div className="footer-right">
  <a href="mailto:gavinollaramya@example.com" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/mail1.png" alt="Email" />
    </a>
    <a href="https://www.linkedin.com/in/gavinolla-ramya" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/linkedin1.png" alt="LinkedIn" />
    </a>
    <a href="https://github.com/gavinolla-Ramya" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/github.png" alt="GitHub" />
    </a>
  </div>
  
    
 
</footer>


    </>
  );
}

export default App;
