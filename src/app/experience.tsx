import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('task1');
  const [animate, setAnimate] = useState(false);

  const handleTabClick = (tab: 'task1' | 'task2' | 'task3') => {
    setAnimate(false); 
    setActiveTab(tab); 
    setTimeout(() => setAnimate(true), 0);
  };

  const renderTabContent = () => {
    return (
      <div className={`work-experience-text ${animate ? 'slide-in-right' : ''}`}>
        {activeTab === 'task1' && (
          <>
            <strong>Front End Intern @ <span className="highlight">Beacon Secure</span></strong><br />
            <em>June 2024 - August 2024</em><br />
            <ul className="bullet-list">
              <li>Developed Personal Portfolio Site as a project using <span className="highlight">Next.js</span></li>
              <li>Worked on the <span className="highlight">product side</span> of things as a front end developer</li>
              <li>Learned about web testing, code reviews and learned <span className="highlight">Best Practices</span> for Front-End Development</li>
            </ul>
          </>
        )}
        {activeTab === 'task2' && (
          <>
            <strong>PartnerLinQ Intern @ <span className="highlight">Systems Limited</span></strong><br />
            <em>June 2022 - August 2022</em><br />
            <ul className="bullet-list">
              <li>Leveraged <span className="highlight">Azure Cloud Services</span> to deploy <span className="highlight">MERN stack </span>applications, ensuring seamless functionality and scalability.</li>
              <li>Actively participated in the <span className="highlight">development </span> and <span className="highlight">maintenance </span>  of MERN stack projects, contributing to the enhancement of web applications.</li>
              <li>Earned <span className="highlight">Azure AI 900 certification </span>, validating proficiency in implementing <span className="highlight"> AI solutions </span> on the Azure Platform</li>
            </ul>
          </>
        )}
        {activeTab === 'task3' && (
          <>
            <strong>RoboWars Event Head @ <span className="highlight">SPADES LUMS</span></strong><br />
            <em>December 2022 - January 2024</em><br />
            <ul className="bullet-list">
              <li>Spearheaded the flagship event <span className="highlight">Robowars</span> at Psifi 2023 as <span className="highlight">Event Head. </span></li>
              <li>Directed a cross-functional team of 8 members to <span className="highlight">Organize </span> and <span className="highlight">Manage </span>  an event featuring over <span className="highlight">30 </span>participating teams</li>
              <li>Orchestrated the <span className="highlight">Design </span>and <span className="highlight">Implementation </span> of a cutting-edge <span className="highlight">Robotic Boat</span>, serving as the focal point of the competition.</li>
            </ul>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="work_experience">
      <h2><span className="highlight">02.</span> <span className="work_experience_text2">My Work Experience</span></h2>
      <div className="about_me_line2"></div>
      <div className="work_experience_content">
        <div className="tabs">
          <div className="tab_slider"></div>
          <div className={`tab ${activeTab === 'task1' ? 'active' : ''}`} onClick={() => handleTabClick('task1')}>Beacon Secure</div>
          <div className={`tab ${activeTab === 'task2' ? 'active' : ''}`} onClick={() => handleTabClick('task2')}>Systems Limited</div>
          <div className={`tab ${activeTab === 'task3' ? 'active' : ''}`} onClick={() => handleTabClick('task3')}>SPADES</div>
        </div>
        <div className="tab_content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Experience;
