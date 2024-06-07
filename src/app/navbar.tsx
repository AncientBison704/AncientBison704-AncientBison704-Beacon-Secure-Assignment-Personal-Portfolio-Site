
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#about"><span className="number">01.</span> About</a></li>
        <li><a href="#experience"><span className="number">02.</span> Experience</a></li>
        <li><a href="#projects"><span className="number">03.</span> Projects</a></li>
        <li><a href="#contact"><span className="number">04.</span> Contact</a></li>
        <li><a href="#resume" className="resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
