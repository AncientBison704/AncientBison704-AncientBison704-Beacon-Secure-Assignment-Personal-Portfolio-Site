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
            entry.target.classList.add('slide-in-left');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.remove('slide-in-left');
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
              entry.target.classList.add('slide-in-right');
            } else {
              entry.target.classList.remove('visible');
              entry.target.classList.remove('slide-in-right');
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
              entry.target.classList.add('slide-in-right');
            } else {
              entry.target.classList.remove('visible');
              entry.target.classList.remove('slide-in-right');
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
      <div className="project_container">
        <div className="project_content" ref={projectContentRef}>
          <Image src={Bookar} alt="Bookar Project" width={860} height={450} className="project_image" />
          <div className="project_text">
            <h3 className="project_header1"><span className="highlight">Featured Project</span></h3>
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
        <div className="project_content_flipped" ref={projectContentFlippedRef}>
          <Image src={IMDB} alt="IMDB" width={860} height={450} className="project_image_flipped" />
          <div className="project_text_flipped">
            <h3 className="project_header_flipped"><span className="highlight">Featured Project</span></h3>
            <h4 className="project_subheader_flipped">IMDB Reviews Sentiment Analyzer</h4>
            <div className="project_description_box_flipped">
              <p>
                In this project, I implemented a naive Sentiment Analysis model using Logistic Regression models created from scratch using NumPy as well as Sci-kit APIs.
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
        <div className="project_content2" ref={projectContent2Ref}>
          <Image src={Police_Violence} alt="Police Violence" width={860} height={450} className="project_image" />
          <div className="project_text2">
            <h3 className="project_header1"><span className="highlight">Featured Project</span></h3>
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
     </div>
      
    
  );
};

export default Projects;
