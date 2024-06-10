import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Bookar from '../../public/Bookar.png'
import IMDB from '../../public/Sentiment_Analyzer.png'
import Police_Violence from '../../public/Police_Violence.png'
import White_Github from '../../public/white_github.png'

const Projects = () => {
  
    const projectContentFlippedRef = useRef(null);

    useEffect(() => {
      const observerFlipped = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('slideInLeft');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.remove('slideInLeft');
          }
        },
        {
          threshold: 0.1, // Adjust this value as needed
        }
      );
  
      if (projectContentFlippedRef.current) {
        observerFlipped.observe(projectContentFlippedRef.current);
      }
  
      return () => {
        if (projectContentFlippedRef.current) {
          observerFlipped.unobserve(projectContentFlippedRef.current);
        }
      };
    }, []);

    const projectContentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              entry.target.classList.add('slideInRight');
            } else {
              entry.target.classList.remove('visible');
              entry.target.classList.remove('slideInRight');
            }
          },
          {
            threshold: 0.1, // Adjust this value as needed
          }
        );
    
        if (projectContentRef.current) {
          observer.observe(projectContentRef.current);
        }
    
        return () => {
          if (projectContentRef.current) {
            observer.unobserve(projectContentRef.current);
          }
        };
      }, []);

      const projectContent2Ref = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              entry.target.classList.add('slideInRight');
            } else {
              entry.target.classList.remove('visible');
              entry.target.classList.remove('slideInRight');
            }
          },
          {
            threshold: 0.1, // Adjust this value as needed
          }
        );
    
        if (projectContent2Ref.current) {
          observer.observe(projectContent2Ref.current);
        }
    
        return () => {
          if (projectContent2Ref.current) {
            observer.unobserve(projectContent2Ref.current);
          }
        };
      }, []);

  return (
    <div className="container">
      <div className="projectContainer">
        <div className="projectContent" ref={projectContentRef}>
          <Image src={Bookar} alt="Bookar Project" width={860} height={450} className="projectImage" />
          <div className="projectText">
            <h3 className="projectHeader1"><span className="highlight">Featured Project</span></h3>
            <h4 className="projectSubheader">Bookar: Sports Booking App</h4>
            <div className="projectDescriptionBox">
              <p>
                The Bookar Sports Field Booking allows anyone to easily book field across the country along with providing easy access to Field Owners to Create their own listings.
              </p>
            </div>
            <div className="highlightedTechStack">
              <span className="highlight">React.js</span> <span className="highlight">MongoDB</span> <span className="highlight">Express.js</span> <span className="highlight">Node.js</span> <span className="highlight">Figma</span>
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="whiteGithubImage" />
        </div>
      </div>
      <div className="projectContainer">
        <div className="projectContentFlipped" ref={projectContentFlippedRef}>
          <Image src={IMDB} alt="IMDB" width={860} height={450} className="projectImageFlipped" />
          <div className="projectTextFlipped">
            <h3 className="projectHeaderFlipped"><span className="highlight">Featured Project</span></h3>
            <h4 className="projectSubheaderFlipped">IMDB Reviews Sentiment Analyzer</h4>
            <div className="projectDescriptionBoxFlipped">
              <p>
                In this project, I implemented a naive Sentiment Analysis model using Logistic Regression models created from scratch using NumPy as well as Sci-kit APIs.
              </p>
            </div>
            <div className="highlightedTechStackFlipped">
              <span className="highlight">NumPy </span> <span className="highlight">Sci-Kit Learn</span> <span className="highlight">Logistic Regression</span> 
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="whiteGithubImageFlipped" />
        </div>
      </div>
      <div className="projectContainer">
        <div className="projectContent2" ref={projectContent2Ref}>
          <Image src={Police_Violence} alt="Police Violence" width={860} height={450} className="projectImage" />
          <div className="projectText2">
            <h3 className="projectHeader1"><span className="highlight">Featured Project</span></h3>
            <h4 className="projectSubheader">Modelling "Police Violence" Dataset</h4>
            <div className="projectDescriptionBox">
              <p>
                This Project aimed to investigate the Mapping Police Violence Dataset that encompasses all reported police violence incidents in the United States of America from 2013 to 2024 using data science techniques.
              </p>
            </div>
            <div className="highlightedTechStack">
              <span className="highlight">Random Forrest </span> <span className="highlight">Binary Classification</span> <span className="highlight">EDA</span><span className="highlight">SMOTE</span> 
            </div>
          </div>
          <Image src={White_Github} alt="GitHub" width={40} height={40} className="whiteGithubImage" />
        </div>
      </div>
     </div>
      
    
  );
};

export default Projects;
