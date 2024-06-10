// AboutMe.tsx
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicture from '../../public/profile_pic.jpg';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const aboutMeExtraRef = useRef<HTMLDivElement>(null);
  const aboutMeLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutMeRefCurrent = aboutMeRef.current;
    const aboutMeExtraRefCurrent = aboutMeExtraRef.current;
    const aboutMeLineRefCurrent = aboutMeLineRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.1,
    });

    const observeElement = (element: Element | null) => {
      if (element) {
        observer.observe(element);
      }
    };

    observeElement(aboutMeRefCurrent);
    observeElement(aboutMeExtraRefCurrent);
    observeElement(aboutMeLineRefCurrent);

    return () => {
      if (aboutMeRefCurrent) observer.unobserve(aboutMeRefCurrent);
      if (aboutMeExtraRefCurrent) observer.unobserve(aboutMeExtraRefCurrent);
      if (aboutMeLineRefCurrent) observer.unobserve(aboutMeLineRefCurrent);
    };
  }, [aboutMeRef, aboutMeExtraRef, aboutMeLineRef]);

  return (
    <div className="aboutMeContainer">
      <div ref={aboutMeRef} className={`aboutMe ${isVisible ? 'visible' : ''}`}>
        <h2><span className="highlight">01.</span> <span className="workExperienceText">About Me</span></h2>
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
          <ul className="hobbyList">
            <li>Formula 1</li>
            <li>Gaming</li>
            <li>Eating</li>
          </ul>
        </div>
      </div>
      <div ref={aboutMeExtraRef} className={`aboutMeExtra fadeIn ${isVisible ? 'visible' : ''}`}>
        <Image src={profilePicture} alt="Profile Picture" width={400} height={300} className="profilePicture" />
      </div>
      <div ref={aboutMeLineRef} className={`aboutMeLine ${isVisible ? 'visible' : ''}`}></div>
    </div>
  );
};

export default AboutMe;
