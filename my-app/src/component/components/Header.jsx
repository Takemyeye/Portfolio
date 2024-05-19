import React, { useContext } from "react";
import './styles/header.css';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext";

const Header = () => {
  const { setIsActive, setIsabaut,setIsExperience } = useContext(ActiveContext); 

  const handleSkillsClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000); 
  };

  const handleAbautClick = () => {
    setIsabaut(true);
    setTimeout(() => {
      setIsabaut(false);
    }, 1000); 
  };
  const handleExperience = () => {
    setIsExperience(true);
    setTimeout(() => {
      setIsExperience(false);
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
  const handleExperienceClick = () => {
    handleExperience();
    scrollToBottom();
  };
  return (
    <header>
      <Link to={"/"}>
        <div className="title">S</div>
      </Link>
        <div className="austronaut"></div>
          <div className="conteiner">
            <Link to={"/"}>
              <div className="mobile">
                <div className="navigation">Home</div>
              </div>
            </Link>
            <div className="navigation" onClick={handleAboutMeClick}>About me</div>
            <div className="navigation" onClick={handleExperienceClick}>Experience</div>
            <div className="navigation" onClick={handleSkillsClick}>Skills</div>
            <Link to={"https://mail.google.com/mail/u/0/#search/takemyeyehz%40gmail.come?compose=new"}>
              <div className="navigation">Contact</div>
            </Link>
            <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
              <div className="mobile">
                <div className="navigation">Blog</div>
              </div>
            </a>
          </div>
    </header>
  );
};

export default Header;