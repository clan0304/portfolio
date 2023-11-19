import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import Barista from '../../assets/barista.jpg';
import Climbing from '../../assets/climbing.jpg';
import Busking from '../../assets/busking.jpg';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sang mo</h2>
        <div className="prompt">
          <p>
            A Software/Web developer with a passion for learning and creating.
          </p>
          <a href="https://www.linkedin.com/in/sang-mo-chun-b753b1247/">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/clan0304">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
        <p>Email: clan0304@gmail.com</p>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol ssName="skills_title" className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Next.js 13, Redux, HTML, CSS, BootStrap, MaterialUI,
              TailwindCSS, TypeScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End, Database</h2>
            <span>Node.js, PHP, MySQL, MongoDB, Prisma, Java Spring</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, Java</span>
          </li>

          <button
            onClick={() => {
              navigate('/projects');
            }}
          >
            See my Projects!
          </button>
        </ol>
      </div>
      <div className="aboutme">
        <h1>About Me</h1>

        <div className="aboutme_listcontainer">
          <div className="aboutme_list">
            <img src={Barista} alt="aboutme" width="300px" height="400px" />
            <h3>Coffee</h3>
          </div>
          <div className="aboutme_list">
            <img src={Busking} alt="aboutme" width="300px" height="400px" />
            <h3>Music</h3>
          </div>
          <div className="aboutme_list">
            <img src={Climbing} alt="aboutme" width="300px" height="400px" />
            <h3>Sports</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
