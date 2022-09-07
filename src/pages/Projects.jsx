import React from "react";
import ProjectsItem from "../components/ProjectsItem";
import { ProjectList } from "../helper/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectsItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
