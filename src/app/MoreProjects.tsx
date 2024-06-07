import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import White_Github from '../../public/white_github.png'
import Folder_Image from '../../public/folder.png'

const MoreProjects = () => {
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.other_projects_container');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible1(elementTop < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible1) {
      const gridItems = document.querySelectorAll('.grid_item');
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 300);
      });
    }
  }, [isVisible1]);

  return (
    <div className="other_projects_container">
      <h3 className="highlight text-center">Other Noteworthy Projects</h3>
      <div className={`grid_container ${isVisible1 ? 'fade-in' : ''}`}>
        <div className="grid_item">
          <div className="grid_item-content">
            <div className="top-left-icon">
              <Image src={Folder_Image} alt="Folder Icon" width={70} height={50} />
            </div>
            <div className="top-right-icon">
              <Image src={White_Github} alt="GitHub Icon" width={40} height={40} />
            </div>
            <h4 className="project_header">Custom Shell</h4>
            <p className="project_body">Developed a custom shell in C, featuring command execution, piping, and redirection.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">Docker</span>
              <span className="highlight">C</span>
              <span className="highlight">Linux</span>
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
            <h4 className="project_header">Handwritten Digits Classifier</h4>
            <p className="project_body">Classified Digit Images using K-Nearest-Neighours.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">Python</span>
              <span className="highlight">KNNS</span>
              <span className="highlight">Numpy</span>
              <span className="highlight">Sci-Kit</span>
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
            <h4 className="project_header">Transformer From Scratch</h4>
            <p className="project_body">Implemented using SastaGPT and trained on The Godfather Movie Script.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">SastaGPT</span>
              <span className="highlight">PyTorch</span>
              <span className="highlight">Numpy</span>
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
            <h4 className="project_header">Library Management System</h4>
            <p className="project_body">Implemented a system which allowed users to borrow and return books, while also having an interface for staff.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">React</span>
              <span className="highlight">Node</span>
              <span className="highlight">HTML</span>
              <span className="highlight">CSS</span>
              <span className="highlight">Mongo</span>
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
            <h4 className="project_header">Audio Classifier</h4>
            <p className="project_body">Implementation of Neural Network to classify tens of thousands of audio samples from the AudioMNIST dataset.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">Neural Network</span>
              <span className="highlight">PyTorch</span>
              <span className="highlight">Numpy</span>
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
            <h4 className="project_header">House Price Prediction</h4>
            <p className="project_body">In this project, I have implemented multivariate linear regression to predict the median price of homes in a Boston suburb.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">React</span>
              <span className="highlight">Node.js</span>
              <span className="highlight">CSS</span>
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
            <h4 className="project_header">Auction App</h4>
            <p className="project_body">Implemented a Real Time Auction App using MERN stack and socket.io</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">React</span>
              <span className="highlight">Node.js</span>
              <span className="highlight">CSS</span>
              <span className="highlight">Socket.IO</span>
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
            <h4 className="project_header">Classification Models from Scratch</h4>
            <p className="project_body">In this project, I implement some classification models and compare their decision boundaries after tuning their hyperparameters.</p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">NumPy</span>
              <span className="highlight">Pandas</span>
              <span className="highlight">KNN</span>
              <span className="highlight">Decision Tree</span>
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
            <h4 className="project_header">Simple ChatBot</h4>
            <p className="project_body">This Project I Implemented a simple chat application using sockets and TCP/IP. </p>
            <div className="highlighted_tech_stack_new">
              <span className="highlight">Python</span>
              <span className="highlight">TCP/IP</span>
              <span className="highlight">Sockets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
