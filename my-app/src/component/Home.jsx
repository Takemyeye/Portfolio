import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './styles/home.css'
import Header from "./components/Header";

const Home = () => {

  return (
    <div>
        <div className="back">
          <Header />
          <div className="main">
            <div className="leftPanel"></div>
            <div className="rightPanel">
                <div className="text-me">
                  <h1>Hi there,</h1>
                  <div className="name">I'm Oleh <span className="span">Bratok</span></div>
                    <div>Web Develuper</div>
                      <button className="btn">abaut me</button>
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
                          <a href="https://www.facebook.com/sushitalyalbano/">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                          <a href="https://web.whatsapp.com/">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                          </a>
                        </div>
                </div>
              <div className="work">
                <div className="information">
                  <div className="inf-text">1+</div>
                    <h6>Years of Experiance</h6>
                </div>
                  <div className="space">|</div>
                    <div className="information">
                      <div className="inf-text">3+</div>
                        <h6>Projects compleated</h6>
                    </div>
                      <div className="space">|</div>            
                        <div className="information"> 
                          <div className="inf-text">5+</div>
                            <h6>Happy clients</h6>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;