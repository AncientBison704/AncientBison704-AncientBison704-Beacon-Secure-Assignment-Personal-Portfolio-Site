"use client";

import { useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import Github from '../../public/github.png';
import Linkedin from '../../public/linkedin.png';
import Twitter from '../../public/twitter.png';
import Navbar from './navbar';
import AboutMe from './about_me';
import Experience from './experience';
import Projects from './project';
import MoreProjects from './MoreProjects';


export default function Home() {
  const [activeTab, setActiveTab] = useState('task1');
  const [sliderStyle, setSliderStyle] = useState({ top: '0px', height: '0px' });
  const [animationFinished, setAnimationFinished] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    const tabHeight = document.querySelector('.tab')?.clientHeight || 0;
    const tabIndex = ['task1', 'task2', 'task3'].indexOf(activeTab);
    setSliderStyle({
      top: `${tabIndex * (tabHeight + 10)}px`,
      height: `${tabHeight}px`
    });

    const images = document.querySelectorAll('.stackedImage');
    images.forEach((image, index) => {
      const imgElement = image as HTMLImageElement;
      imgElement.style.animationDelay = `${0.5 + index * 0.5}s`;
      imgElement.classList.add('slideInVertical');
    });

    const animationDuration = 1000;
    setTimeout(() => {
      setAnimationFinished(true);
    }, images.length * 500 + animationDuration);

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000); 

    return () => clearTimeout(timer);

  }, [activeTab]);

  return (
    <div className="container">
      <Navbar />
      <div className="content fadeIn">
        <h3 className="intro">Hello, my name is</h3>
        <h1 className="name">Abdulhaseeb Khan.</h1>
        <h1 className="nextLine">I Love coding!<br/></h1>
        <p className="description">
          I am a Final Year Computer Science Student at Lahore University of Management Science. Mainly interested in Web Development and NLP.<br/><br/>
          I enjoy learning new skills and implementing them in real life!
        </p>
        <a href="#contact" className="getInTouch">Get In Touch</a>
      </div>
      <a href="mailto:abdulhaseeb494@gmail.com" className="email">abdulhaseeb494@gmail.com</a>
      <AboutMe/>
      <Experience />
      <div className="projectContainerHeader">
        <h2><span className="highlight">03.</span> <span className="workExperienceText2">My Projects</span></h2>
        <div className="aboutMeLine3"></div>
      </div>
      <Projects/>
      <MoreProjects />
      <div className="imageStack">
        <Image src={Github} alt="GitHub" width={30} height={30} className={`stackedImage ${animationFinished ? 'show' : ''}`} />
        <Image src={Linkedin} alt="LinkedIn" width={30} height={30} className={`stackedImage ${animationFinished ? 'show' : ''}`} />
        <Image src={Twitter} alt="Twitter" width={30} height={30} className={`stackedImage ${animationFinished ? 'show' : ''}`} />
      </div>
    </div>
  );
}
