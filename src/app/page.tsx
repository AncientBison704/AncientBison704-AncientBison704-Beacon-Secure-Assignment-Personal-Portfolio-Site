import Image from 'next/image';
import Github from '../../public/github.png';
import Linkedin from '../../public/linkedin.png';
import Twitter from '../../public/twitter.png';
import profilePicture from '../../public/profile_pic.jpg'

export default function Home() {
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
          <h2>01. About Me</h2>
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
            <li> Boxing</li>
            <li> Leetcoding</li>
            <li> Tech Support</li>
          </ul>
          <ul className="hobby-list">
            <li> Formula 1</li>
            <li> Gaming</li>
            <li> Eating</li>
          </ul>
        </div>
        </div>
        
        <div className="about_me_extra">
          {/* Empty square with border */}
          <Image src={profilePicture} alt="ProfilePicture" width={400} height={300} className="profile_picture" />
        </div>
        <div className="about_me_line"></div>
      </div>
      <div className="work_experience">
        <h2><span className="highlight">02.</span> <span className="work_experience_text">Work Experience</span></h2>
      </div>
      <div className="image-stack">
        <Image src={Github} alt="Image 1" width={30} height={30} className="stacked-image" />
        <Image src={Linkedin} alt="Image 2" width={30} height={30} className="stacked-image" />
        <Image src={Twitter} alt="Image 3" width={30} height={30} className="stacked-image" />
      </div>
    </div>
  )
}