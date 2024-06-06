import React, { useContext, useMemo, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext"; 

const translations = {
  en: {
    react: 'Soul Swap Online Shop',
    scss: 'Soul Swap Online Shop',
    cpp: 'Cisco Certification',
    git: 'All my Project',
    download: 'Download Resume',
    description:'Description',
    skills:'My Skills'
  },
  ru: {
    react: 'Интернет-магазин Soul Swap',
    scss: 'Интернет-магазин Soul Swap',
    cpp: 'Сертификация Cisco',
    git: 'Все мои проекты',
    download: 'Скачать резюме',
    description: 'Описание',
    skills: 'Мои навыки'
  },
  it: {
    react: 'Negozio online Soul Swap',
    scss: 'Negozio online Soul Swap',
    cpp: 'Certificazione Cisco',
    git: 'Tutti i miei progetti',
    download: 'Scaricare Curriculum',
    description: 'Descrizione',
    skills: 'Le mie competenze'
  }
};

const LeftPanel = () => {
  const { isActive,language } = useContext(ActiveContext); 
  

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const headerPhrase = useMemo(() => translations[language], [language]);

  return(
    <div className="leftPanel">
      <div className="conteinerLeft">
        <div className="imgCircle">
          <div className="img"></div>
        </div>
          <a href="/resume.txt" download="Oleh_Bratok_Resume.txt">
            <button className="download">{headerPhrase.download} <FontAwesomeIcon icon={faDownload} /></button>
          </a>      
        </div>
      <div className="mobile">
        <div className={`conteinerRight ${isActive ? 'active' : ''}`}>        
          <div className="text-skills">
            <h4>{headerPhrase.Description}</h4>
              <div className="descriotion"><Link to={"https://github.com/Takemyeye/SS"}>{headerPhrase.react}</Link></div>
              <div className="descriotion"><Link to={"https://github.com/Takemyeye/SS"}>{headerPhrase.scss}</Link></div>
              <div className="descriotion"><Link to={"https://www.netacad.com/"}>{headerPhrase.cpp}</Link></div>
              <div className="descriotion"><Link to={"https://github.com/Takemyeye"}>{headerPhrase.git}</Link></div>
          </div>
            <div className="skills">
              <h4>{headerPhrase.skills}</h4>
                <div className="ui"></div>
                <div className="ui"></div>
                <div className="ui"></div>
                <div className="ui"></div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default LeftPanel;