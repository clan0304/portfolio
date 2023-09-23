import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WebIcon from '@mui/icons-material/Web';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--sideproject"
          date="07/2023 - 09/2023"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WebIcon />}
        >
          <h3 className="vertical-timeline-element-title">VET Resources</h3>
          <p>Web developer(Intern)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--sideproject"
          date="2023"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WebIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            E-Commerce Website(Cake shop)
          </h3>
          <p>Side Project(MERN Stack)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--sideproject"
          date="2023"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WebIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Website for Dance Academy
          </h3>
          <p>Side Project(MERN Stack)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduated Bachelor of Information System
          </h3>
          <p>Holmesglen Tafe</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
