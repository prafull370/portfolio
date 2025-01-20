import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Prafull Kumar</h1>
        <p>Developer | Admin | SDE</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Hi, I'm Prafull Kumar, a passionate developer skilled in C, Java, SQL, MongoDB, and React. I have experience working on AI-driven projects and am currently applying for roles at Cloud Analogy specializing in Salesforce development.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>AI Drive</h3>
          <p>Developed using MERN stack and OpenAI to provide AI-powered file management solutions.</p>
        </div>
        <div className="project">
          <h3>Image Generator</h3>
          <p>Created an image generation tool leveraging the MERN stack for efficient processing and storage.</p>
        </div>
        <div className="project">
          <h3>AI Question Generator</h3>
          <p>Built an AI-based system to generate and validate questions using machine learning techniques.</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>C</li>
          <li>Java</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:prafullkumar370@gmail.com">prafullkumar370@gmail.com</a></p>
        <p>Phone: <a href="tel:7895242536">7895242536</a></p>
      </section>

      <footer>
        <p>&copy; 2024 Prafull Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;