import React, { useContext } from "react";
import ActiveContext from "./ActiveContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const RightPanel = () => {
  const { setIsabaut } = useContext(ActiveContext); 

  const handleAbautClick = () => {
    setIsabaut(true);
    setTimeout(() => {
      setIsabaut(false);
    }, 1000); 
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  const handleAboutMeClick = () => {
    handleAbautClick();
    scrollToBottom();
  };

  return (
    <div className="rightPanel">
      <div className="text-me">
        <h1>Hi there,</h1>
          <div className="name">I'm Oleh <span className="span" style={{ animation: 'none' }}>Bratok</span></div>        
          <div>Web Developer</div>
            <button onClick={handleAboutMeClick}>About Me</button>
              <div className="socium">
                <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://t.me/takemyeye" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a href="https://github.com/Takemyeye" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://web.whatsapp.com/">
                  <FontAwesomeIcon icon={faWhatsapp}/>
                </a>
              </div>
      </div>
      <div className="work">
        <div className="information">
          <div className="inf-text">1+</div>
          <h6>Years of Experience</h6>
        </div>
        <div className="space">|</div>
        <div className="information">
          <div className="inf-text">3+</div>
          <h6>Projects completed</h6>
        </div>
        <div className="space">|</div>            
        <div className="information"> 
          <div className="inf-text">5+</div>
          <h6>Happy clients</h6>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;