import React, { useContext } from "react";
import './styles/header.css';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext";

const Header = () => {
  const { setIsActive } = useContext(ActiveContext); 

  const handleSkillsClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000); 
  };

  return (
    <header>
      <Link to={"/"}>
        <div className="title">S</div>
      </Link>
       <div className="austronaut"></div>
      <div className="conteiner">
        <Link to={"/"}>
          <div className="navigation">Home</div>
        </Link>
        <div className="navigation">About me</div>
        <div className="navigation">My services</div>
        <div className="navigation" onClick={handleSkillsClick}>Skills</div>
        <div className="navigation">Contact</div>
        <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
          <div className="navigation">Blog</div>
        </a>
      </div>
    </header>
  );
};

export default Header;