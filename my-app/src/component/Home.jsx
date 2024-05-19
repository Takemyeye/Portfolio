import React from "react";
import RightPanel from "./components/rightPanel";
import LeftPanel from "./components/leftPanel";
import AbautMe from "./components/abautMe";
import "./styles/home.css";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAutoprefixer} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="back">
        <Header />
        <div className="main">
          <LeftPanel />
          <RightPanel />
          <div className="switch"></div>
          <div className="switch2"></div>
        </div>
      </div>
      <AbautMe/>
      <div className="back-to-Top"  onClick={scrollToTop}>            
        <FontAwesomeIcon icon={faAutoprefixer} />
      </div>
    </div>
  );
};

export default Home;