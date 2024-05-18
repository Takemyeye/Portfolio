import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ActiveContext from "./ActiveContext"; 

const LeftPanel = () => {
  const { isActive } = useContext(ActiveContext); 
  const textSkills = ['Soul Swap - Online Shop',
  'Soul Swap,Portfolio,Parallax',
  'Cisco certifications',
  'All my Projects'];
  return(
    <div className="leftPanel">
      <div className="conteinerLeft">
        <div className="imgCircle">
          <div className="img"></div>
        </div>
          <a href="/resume.txt" download="Oleh_Bratok_Resume.txt">
            <button className="download">Download Resume <FontAwesomeIcon icon={faDownload} /></button>
          </a>      
        </div>
      <div className={`conteinerRight ${isActive ? 'active' : ''}`}>        
        <div className="text-skills">
          <h4>Description</h4>
            <div className="descriotion"><Link to={"https://github.com/Takemyeye/SS"}>{textSkills[0]}</Link></div>
            <div className="descriotion"><Link to={"https://github.com/Takemyeye/SS"}>{textSkills[1]}</Link></div>
            <div className="descriotion"><Link to={"https://www.netacad.com/"}>{textSkills[2]}</Link></div>
            <div className="descriotion"><Link to={"https://github.com/Takemyeye"}>{textSkills[3]}</Link></div>
        </div>
        <div className="skills">
          <h4>My Skills</h4>
            <div className="ui"></div>
            <div className="ui"></div>
            <div className="ui"></div>
            <div className="ui"></div>
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;