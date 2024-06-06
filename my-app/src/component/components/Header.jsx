import React, { useContext, useState, useEffect, useMemo } from "react";
import './styles/header.css';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faEarthAmericas, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

const translations = {
  en: {
    home: 'Home',
    aboutMe: 'About me',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    blog: 'Blog',
    language:'Language'
  },
  ru: {
    home: 'Домой',
    aboutMe: 'Обо мне',
    experience: 'Опыт',
    skills: 'Навыки',
    contact: 'Контакты',
    blog: 'Блог',
    language:'Язык'
  },
  it: {
    home: 'Home',
    aboutMe: 'Chi sono',
    experience: 'Esperienza',
    skills: 'Competenze',
    contact: 'Contatti',
    blog: 'Blog',
    language:'Lingua'
  }
};

const Header = () => {
  const { setIsActive, setIsAbout, setIsExperience, language, handleLanguageChange } = useContext(ActiveContext); 
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSkillsClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000); 
  };

  const handleAboutClick = () => {
    setIsAbout(true);
    setTimeout(() => {
      setIsAbout(false);
    }, 1000); 
  };

  const handleExperienceClick = () => {
    setIsExperience(true);
    setTimeout(() => {
      setIsExperience(false);
    }, 1000); 
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const headerPhrase = useMemo(() => translations[language], [language]);

  return (
    <header>
      <div className={`changeLanguage ${languageMenuOpen ? 'open' : ''}`} onClick={toggleLanguageMenu}>
        <div className="textLanguage">{headerPhrase.language}</div>
          <div className={`Language ${languageMenuOpen ? 'open' : ''}`}>
            <p onClick={() => handleLanguageChange('it')}>It</p>
            <p onClick={() => handleLanguageChange('en')}>Eng</p>
            <p onClick={() => handleLanguageChange('ru')}>Ru</p>  
              <div className='iconLanguage'>
                <FontAwesomeIcon icon={faEarthEurope} />
                <FontAwesomeIcon icon={faEarthAmericas} />
                <FontAwesomeIcon icon={faEarthAsia} />
              </div>
          </div>
      </div>
      <Link to={"/"}>
        <div className="mobile">
          <div className="title">S</div>
        </div>
      </Link>
      <div className="austronaut"></div>
      <div className="conteiner">
        <Link to={"/"}>
          <div className="mobile">
            <div className="navigation">{headerPhrase.home}</div>
          </div>
        </Link>
        <a href="#about">
          <div className="navigation" onClick={handleAboutClick}>{headerPhrase.aboutMe}</div>
        </a>
        <a href="#experience">
          <div className="navigation" onClick={handleExperienceClick}>{headerPhrase.experience}</div>
        </a>
        <div className="navigation" onClick={handleSkillsClick}>{headerPhrase.skills}</div>
        <Link to={"https://mail.google.com/mail/u/0/#search/takemyeyehz%40gmail.come?compose=new"}>
          <div className="navigation">{headerPhrase.contact}</div>
        </Link>
        <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
          <div className="mobile">
            <div className="navigation">{headerPhrase.blog}</div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;