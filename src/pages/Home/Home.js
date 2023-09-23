import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sang mo</h2>
        <div className="prompt">
          <p>
            A software/Web developer with a passion for learning and creating.
          </p>
          <a href="https://www.linkedin.com/in/sang-mo-chun-b753b1247/">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
        </div>
        <p>Email: clan0304@gmail.com</p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM, BootStrap,
              MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End, Database</h2>
            <span>Node.js, PHP, Express, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
