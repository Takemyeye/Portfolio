import React, { useContext, useEffect, useState } from "react";
import ActiveContext from "./ActiveContext"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const RightPanel = () => {
  const { setIsAbout, language } = useContext(ActiveContext);
  const [phrases, setPhrases] = useState({
    hi: "Hi there,",
    name: "I'm Oleh",
    webDeveloper: "Web Developer",
    aboutMe: "About Me",
    yearsOfExperience: "Years of Experience",
    projectsCompleted: "Projects completed",
    happyClients: "Happy clients",
  });

  useEffect(() => {
    const translations = {
      en: {
        hi: "Hi there,",
        name: "I'm Oleh",
        webDeveloper: "Web Developer",
        aboutMe: "About Me",
        yearsOfExperience: "Years of Experience",
        projectsCompleted: "Projects completed",
        happyClients: "Happy clients",
      },
      ru: {
        hi: "Привет,",
        name: "Я Олег",
        webDeveloper: "Веб-разработчик",
        aboutMe: "Обо мне",
        yearsOfExperience: "Годы опыта",
        projectsCompleted: "Завершенные проекты",
        happyClients: "Довольные клиенты",
      },
      it: {
        hi: "Ciao,",
        name: "Sono Oleh",
        webDeveloper: "Sviluppatore web",
        aboutMe: "Chi sono",
        yearsOfExperience: "Anni di esperienza",
        projectsCompleted: "Progetti completati",
        happyClients: "Clienti felici",
      },
    };
    setPhrases(translations[language]);
  }, [language]);

  const handleAboutClick = () => {
    setIsAbout(true);
    setTimeout(() => {
      setIsAbout(false);
    }, 1000);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleAboutMeClick = () => {
    handleAboutClick();
    scrollToBottom();
  };

  return (
    <div className="rightPanel">
      <div className="text-me">
        <h1>{phrases.hi}</h1>
        <div className="name">
          {phrases.name} <span className="span" style={{ animation: 'none', backgroundColor: 'rgba(0, 0, 0, 0.656)', borderRadius: '10px', padding: '2px' }}>Bratok</span>
        </div>
        <div>{phrases.webDeveloper}</div>
        <button onClick={handleAboutMeClick}>{phrases.aboutMe}</button>
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
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="work">
        <div className="information">
          <div className="inf-text">1+</div>
          <h6>{phrases.yearsOfExperience}</h6>
        </div>
        <div className="space">|</div>
        <div className="information">
          <div className="inf-text">3+</div>
          <h6>{phrases.projectsCompleted}</h6>
        </div>
        <div className="space">|</div>
        <div className="information">
          <div className="inf-text">5+</div>
          <h6>{phrases.happyClients}</h6>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;