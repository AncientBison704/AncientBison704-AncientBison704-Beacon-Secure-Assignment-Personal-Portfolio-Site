
import React from 'react';
import MoreProjects from './MoreProjects';
import White_Github from '../../public/white_github.png';
import Folder_Image from '../../public/folder.png';

const projectData = [
  {
    title: 'Custom Shell',
    description: 'Developed a custom shell in C, featuring command execution, piping, and redirection.',
    techStack: ['Docker', 'C', 'Linux'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Handwritten Digits Classifier',
    description: 'Classified Digit Images using K-Nearest-Neighours.',
    techStack: ['Python', 'KNNS', 'Numpy', 'Sci-Kit'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Transformer From Scratch',
    description: 'Implemented using SastaGPT and trained on The Godfather Movie Script.',
    techStack: ['SastaGPT', 'PyTorch', 'Numpy'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Library Management System',
    description: 'Implemented a system which allowed users to borrow and return books, while also having an interface for staff.',
    techStack: ['React', 'Node', 'HTML', 'CSS', 'Mongo'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Audio Classifier',
    description: 'Implementation of Neural Network to classify tens of thousands of audio samples from the AudioMNIST dataset.',
    techStack: ['Neural Network', 'PyTorch', 'Numpy'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'House Price Prediction',
    description: 'In this project, I have implemented multivariate linear regression to predict the median price of homes in a Boston suburb.',
    techStack: ['React', 'Node.js', 'CSS'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Auction App',
    description: 'Implemented a Real Time Auction App using MERN stack and socket.io',
    techStack: ['React', 'Node.js', 'CSS', 'Socket.IO'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Classification Models from Scratch',
    description: 'In this project, I implement some classification models and compare their decision boundaries after tuning their hyperparameters.',
    techStack: ['NumPy', 'Pandas', 'KNN', 'Decision Tree'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  },
  {
    title: 'Simple ChatBot',
    description: 'This Project I Implemented a simple chat application using sockets and TCP/IP.',
    techStack: ['Python', 'TCP/IP', 'Sockets'],
    githubIcon: White_Github,
    folderIcon: Folder_Image
  }
];

const ParentComponent = () => {
  return (
    <div>
      <MoreProjects projects={projectData} />
    </div>
  );
};

export default ParentComponent;
