import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div classname="home">
      <div className="about">
        <h2>Hey My Name is Abhishek </h2>
        <div classname="prompt">
          {" "}
          <p>A Web Developer 💻 </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <span>
              ReactJs , Redux , HTML ,CSS , NPM , BOOTSTRAP ,MataerialUI{" "}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
