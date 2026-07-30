import "./Projects.css";

function Projects() {
  return (
    <div className="projects">

      <h1>My Projects</h1>

      <div className="project-card">
        <h2>Portfolio Website</h2>
        <p>
          A responsive portfolio website built using React and CSS.
        </p>
      </div>

      <div className="project-card">
        <h2>Student Management System</h2>
        <p>
          Developed using HTML, CSS, JavaScript and MySQL.
        </p>
      </div>

      <div className="project-card">
        <h2>Weather App</h2>
        <p>
          A React application that displays weather information using an API.
        </p>
      </div>

    </div>
  );
}

export default Projects;