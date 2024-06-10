import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import White_Github from '../../public/white_github.png';
import Folder_Image from '../../public/folder.png';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubIcon: StaticImageData;
  folderIcon: StaticImageData;
}

const MoreProjects = () => {
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.otherProjectsContainer');
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
      const gridItems = document.querySelectorAll('.gridItem');
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 500);
      });
    }
  }, [isVisible1]);

  const projectData: Project[] = [
    {
      title: 'Custom Shell',
      description: 'Developed a custom shell in C, featuring command execution, piping, and redirection.',
      techStack: ['Docker', 'C', 'Linux'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Handwritten Digits Classifier',
      description: 'Classified Digit Images using K-Nearest-Neighours.',
      techStack: ['Python', 'KNNS', 'Numpy', 'Sci-Kit'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Transformer From Scratch',
      description: 'Implemented using SastaGPT and trained on The Godfather Movie Script.',
      techStack: ['SastaGPT', 'PyTorch', 'Numpy'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Library Management System',
      description: 'Implemented a system which allowed users to borrow and return books, while also having an interface for staff.',
      techStack: ['React', 'Node', 'HTML', 'CSS', 'Mongo'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Audio Classifier',
      description: 'Implementation of Neural Network to classify tens of thousands of audio samples from the AudioMNIST dataset.',
      techStack: ['Neural Network', 'PyTorch', 'Numpy'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'House Price Prediction',
      description: 'In this project, I have implemented multivariate linear regression to predict the median price of homes in a Boston suburb.',
      techStack: ['React', 'Node.js', 'CSS'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Auction App',
      description: 'Implemented a Real Time Auction App using MERN stack and socket.io',
      techStack: ['React', 'Node.js', 'CSS', 'Socket.IO'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Classification Models from Scratch',
      description: 'In this project, I implement some classification models and compare their decision boundaries after tuning their hyperparameters.',
      techStack: ['NumPy', 'Pandas', 'KNN', 'Decision Tree'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    },
    {
      title: 'Simple ChatBot',
      description: 'This Project I Implemented a simple chat application using sockets and TCP/IP.',
      techStack: ['Python', 'TCP/IP', 'Sockets'],
      githubIcon: White_Github,
      folderIcon: Folder_Image,
    }
  ];

  return (
    <div className="otherProjectsContainer">
      <h3 className="highlight text-center">Other Noteworthy Projects</h3>
      <div className={`gridContainer ${isVisible1 ? 'fadeIn' : ''}`}>
        {projectData.map((project, index) => (
          <div className="gridItem" key={index}>
            <div className="gridItemContent">
              <div className="topLeftIcon">
                <Image src={project.folderIcon} alt="Folder Icon" width={70} height={50} />
              </div>
              <div className="topRightIcon">
                <Image src={project.githubIcon} alt="GitHub Icon" width={40} height={40} />
              </div>
              <h4 className="projectHeader">{project.title}</h4>
              <p className="projectBody">{project.description}</p>
              <div className="highlightedTechStackNew">
                {project.techStack.map((tech, i) => (
                  <span className="highlight" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
