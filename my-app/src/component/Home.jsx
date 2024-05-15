import React from "react";
import RightPanel from "./components/rightPanel";
import LeftPanel from "./components/leftPanel";
import AbautMe from "./components/abautMe";
import "./styles/home.css";
import Header from "./components/Header";

const Home = () => {

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
          <AbautMe/>
      </div>
    </div>
  );
};

export default Home;
