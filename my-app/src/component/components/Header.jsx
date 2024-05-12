import React  from "react";
import './styles/header.css';
import { Link } from "react-router-dom";

const Header= () => {

  return (
    <header>
      <Link to={"/"}>
        <div className="title">P</div>
      </Link>
        
          <div className="conteiner">
          <Link to={"/"}>
            <div className="navigation">Home</div>
          </Link>
            <div className="navigation">Abaut me</div>
            <div className="navigation">My services</div>
            <div className="navigation">Skills</div>
            <div className="navigation">Contact</div>
            <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
              <div className="navigation">Blog</div>
            </a>
        </div>
    </header>
  );
};

export default Header;