"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Github from '../../public/github.png';
import Linkedin from '../../public/linkedin.png';
import Twitter from '../../public/twitter.png';
import profilePicture from '../../public/profile_pic.jpg';
import Bookar from '../../public/Bookar.png'
import IMDB from '../../public/Sentiment_Analyzer.png'
import Police_Violence from '../../public/Police_Violence.png'
import White_Github from '../../public/white_github.png'
import Folder_Image from '../../public/folder.png'

export default function Home() {
  const [activeTab, setActiveTab] = useState('task1');
  const [sliderStyle, setSliderStyle] = useState({ top: '0px', height: '0px' });

  useEffect(() => {
    const tabHeight = document.querySelector('.tab')?.clientHeight || 0;
    const tabIndex = ['task1', 'task2', 'task3'].indexOf(activeTab);
    setSliderStyle({
      top: `${tabIndex * (tabHeight + 10)}px`,
      height: `${tabHeight}px`
    });
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'task1':
        return (
          <div className="work-experience-text">
            <strong>Front End Intern @ <span className="highlight">Beacon Secure</span></strong><br />
            <em>June 2024 - August 2024</em><br />
            <ul className="bullet-list">
              <li>Developed Personal Portfolio Site as a project using <span className="highlight">Next.js</span></li>
              <li>Worked on the <span className="highlight">product side</span> of things as a front end developer</li>
              <li>Learned about web testing, code reviews and learned <span className="highlight">Best Practices</span> for Front-End Development</li>
            </ul>
          </div>

        );
      case 'task2':
        return (
          <div className="work-experience-text">
            <strong>PartnerLinQ Intern @ <span className="highlight">Systems Limited</span></strong><br />
            <em>June 2022 - August 2022</em><br />
            <ul className="bullet-list">
              <li>Leveraged <span className="highlight">Azure Cloud Services</span> to deploy <span className="highlight">MERN stack </span>applications, ensuring seamless functionality and scalability.</li>
              <li>Actively participated in the <span className="highlight">development </span> and <span className="highlight">maintenance </span>  of MERN stack projects, contributing to the enhancement of web applications.</li>
              <li>Earned <span className="highlight">Azure AI 900 certification </span>, validating proficiency in implementing <span className="highlight"> AI solutions </span> on the Azure Platform</li>
            </ul>
          </div>
        );
      case 'task3':
        return (
          <div className="work-experience-text">
            <strong>RoboWars Event Head @ <span className="highlight">SPADES LUMS</span></strong><br />
            <em>December 2022 - January 2024</em><br />
            <ul className="bullet-list">
              <li>Spearheaded the flagship event <span className="highlight">Robowars</span> at Psifi 2023 as <span className="highlight">Event Head. </span></li>
              <li>Directed a cross-functional team of 8 members to <span className="highlight">Organize </span> and <span className="highlight">Manage </span>  an event featuring over <span className="highlight">30 </span>participating teams</li>
              <li>Orchestrated the <span className="highlight">Design </span>and <span className="highlight">Implementation </span> of a cutting-edge <span className="highlight">Robotic Boat</span>, serving as the focal point of the competition.</li>
            </ul>
          </div>
        );
      default:
        return <p>This is the content for Task 1.</p>;
    }
  };

  return (
    <div className="container">
      <nav>
        <ul className="navbar">
          <li><a href="#about"><span className="number">01.</span> About</a></li>
          <li><a href="#experience"><span className="number">02.</span> Experience</a></li>
          <li><a href="#projects"><span className="number">03.</span> Projects</a></li>
          <li><a href="#contact"><span className="number">04.</span> Contact</a></li>
          <li><a href="#resume" className="resume">Resume</a></li>
        </ul>
      </nav>
      <div className="content">
        <h3 className="intro">Hello, my name is</h3>
        <h1 className="name">Abdulhaseeb Khan.</h1>
        <h1 className="next_line">I Love coding!<br/></h1>
        <p className="description">
          I am a Final Year Computer Science Student at Lahore University of Management Science. Mainly interested in Web Development and NLP.<br/><br/>
          I enjoy learning new skills and implementing them in real life!
        </p>
        <a href="#contact" className="get-in-touch">Get In Touch</a>
      </div>
      <a href="mailto:abdulhaseeb494@gmail.com" className="email">abdulhaseeb494@gmail.com</a>
      <div className="about_me_container">
        <div className="about_me">
          <h2><span className="highlight">01.</span> <span className="work_experience_text">About Me</span></h2>
          <p>
            Hello! I am Abdulhaseeb Khan and I am Located in the city of Lahore.
          </p>
          <p>
            I am enthusiastic about <span className="highlight">front-end Development</span> and <span className="highlight">Natural Language Processing</span>. I am dedicated, work well under pressure
            and hard working. Along with this I have strong communication skills and strong attention to detail.
          </p>
          <p>
            I am pursuing my Bachelor of Computer Science from <span className="highlight">Lahore University of Management Science</span>. My current GPA is <span className="highlight">3.21</span> out of 4.
          </p>
          <p>
            I am currently working towards a publication around usability testing for an app that my team and I created.
          </p>
          <p>
            Here are some of the hobbies that I have.
          </p>
          <div className="hobbies">
            <ul className="hobby-list">
              <li>Boxing</li>
              <li>Leetcoding</li>
              <li>Tech Support</li>
            </ul>
            <ul className="hobby-list">
              <li>Formula 1</li>
              <li>Gaming</li>
              <li>Eating</li>
            </ul>
          </div>
        </div>
        <div className="about_me_extra">
          <Image src={profilePicture} alt="Profile Picture" width={400} height={300} className="profile_picture" />
        </div>
        <div className="about_me_line"></div>
      </div>
      <div className="work_experience">
        <h2><span className="highlight">02.</span> <span className="work_experience_text">My Work Experience</span></h2>
        <div className="about_me_line2"></div>
        <div className="work_experience_content">
          <div className="tabs">
            <div className="tab_slider" style={sliderStyle}></div>
            <div className={`tab ${activeTab === 'task1' ? 'active' : ''}`} onClick={() => setActiveTab('task1')}>Beacon Secure</div>
            <div className={`tab ${activeTab === 'task2' ? 'active' : ''}`} onClick={() => setActiveTab('task2')}>Systems Limited</div>
            <div className={`tab ${activeTab === 'task3' ? 'active' : ''}`} onClick={() => setActiveTab('task3')}>SPADES</div>
          </div>
          <div className="tab_content">
            {renderTabContent()}
          </div>
        </div>
      </div>
      <div className="project_container_header">
        <h2><span className="highlight">03.</span> <span className="work_experience_text">My Projects</span></h2>
        <div className="about_me_line3"></div>
      </div>
      <div className="project_container">
        <div className="project_content">
          <Image src={Bookar} alt="Bookar Project" width={780} height={450} className="project_image" />
          <div className="project_text">
            <h3 className="project_header"><span className="highlight">Featured Project</span></h3>
            <h4 className="project_subheader">Bookar: Sports Booking App</h4>
            <div className="project_description_box">
              <p>
                The Bookar Sports Field Booking allows anyone to easily book field across the country along with providing easy access to Field Owners to Create their own listings.
              </p>
            </div>
            <div className="highlighted_tech_stack">
              <span className="highlight">React.js</span> <span className="highlight">MongoDB</span> <span className="highlight">Express.js</span> <span className="highlight">Node.js</span> <span className="highlight">Figma</span>
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="white-github-image" />
        </div>
      </div>

      <div className="project_container">
        <div className="project_content_flipped">
          <Image src={IMDB} alt="IMDB" width={780} height={450} className="project_image_flipped" />
          <div className="project_text_flipped">
            <h3 className="project_header_flipped"><span className="highlight">Featured Project</span></h3>
            <h4 className="project_subheader_flipped">IMDB Reviews Sentiment Analyzer</h4>
            <div className="project_description_box_flipped">
              <p>
                 In this project, I  implemented a naive Sentiment Analysis model using Logistic Regression models created from scratch using NumPy as well as Sci-kit APIs.
              </p>
            </div>
            <div className="highlighted_tech_stack_flipped">
              <span className="highlight">NumPy </span> <span className="highlight">Sci-Kit Learn</span> <span className="highlight">Logistic Regression</span> 
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="white-github-image_flipped" />
        </div>
      </div>
      <div className="project_container">
        <div className="project_content">
          <Image src={Police_Violence} alt="Police Violence" width={780} height={450} className="project_image" />
          <div className="project_text">
            <h3 className="project_header"><span className="highlight">Featured Project</span></h3>
            <h4 className="project_subheader">Modelling "Police Violence" Dataset</h4>
            <div className="project_description_box">
              <p>
              This Project aimed to investigate the Mapping Police Violence Dataset that encompasses all reported police violence incidents in the United States of America from 2013 to 2024 using data science techniques.
              </p>
            </div>
            <div className="highlighted_tech_stack">
              <span className="highlight">Random Forrest </span> <span className="highlight">Binary Classification</span> <span className="highlight">EDA</span><span className="highlight">SMOTE</span> 
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="white-github-image" />
        </div>
      </div>
      <div className="other_projects_container">
        <h3 className="highlight text-center">Other Noteworthy Projects</h3>
        <div className="grid_container">
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="grid_item">
            <div className="grid_item-content">
              <div className="top-left-icon">
                <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="top-right-icon">
                <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div className="image-stack">
        <Image src={Github} alt="GitHub" width={30} height={30} className="stacked-image" />
        <Image src={Linkedin} alt="LinkedIn" width={30} height={30} className="stacked-image" />
        <Image src={Twitter} alt="Twitter" width={30} height={30} className="stacked-image" />
      </div>
    </div>
  );
}
