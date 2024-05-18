import React, { useContext } from "react";
import ActiveContext from "./ActiveContext"; 

const AbautMe = () =>{
  const { isAbaut } = useContext(ActiveContext);
  const { IsExperience } = useContext(ActiveContext); 


  const abautMe = [
   'I am Oleg Bratok, born in 2005, and a graduate of Enrico Fermi School in Frascati. I have one year of experience working at Impactium as a frontend developer. I possess skills in creating and maintaining modern web applications using up-to-date technologies and tools.',
   'Frontend Developer Impactium | [start: December] 2023 - [end: April] 2024.',
   'Enrico Fermi School Frascati | [2024]',
   'Russian (native), Ucraine (native), English (intermediate level) Italian (hight level).',
   'Committed to continuous learning and professional development. Capable of working in a fast-paced environment and solving complex problems.'
  ];
  const experience = [
    'Proficient in modern Frontend framework (React) and Backend technologie (Node.js).',
    'Skilled in integrating various development aspects to deliver cohesive and functional web applications.',
    'Strong analytical skills and the ability to troubleshoot complex issues efficiently.',
    'Effective communicator and team player, capable of working in diverse team settings to achieve project goals.',
    'Committed to staying updated with the latest industry trends and technologies to maintain a competitive edge'
  ];

  return(
    <div className="main2">
      <div className={`abaut ${isAbaut ? 'active' : ''}`}>
        <div className="descriptionAbaut">
          <h1>About Me<span>.</span><span style={{ fontSize: '25px' }}>.</span><span className="span" style={{ fontSize: '20px' }}>.</span></h1>
            <div className="text-full-stack"><span>Summary: </span>{abautMe[0]}</div>
            <div className="text-full-stack"><span>Work Experience: </span>{abautMe[1]}</div>
            <div className="text-full-stack"><span>Education: </span>{abautMe[2]}</div>
            <div className="text-full-stack"><span>Languages: </span>{abautMe[3]}</div>
            <div className="text-full-stack"><span>Additional Information: </span>{abautMe[4]}</div>
              <a href="/resume.txt" download="Oleh_Bratok_Resume.txt">
                <button className="btn">want to see more?</button>
              </a>
        </div>
      </div>
      <div className={`experience ${IsExperience ? 'active' : ''}`}>
        <h1 className="h1">Professional Experience</h1>
          <div className="text-full-stack"><span>Comprehensive Expertise: </span>{experience[0]}</div>
          <div className="text-full-stack"><span>Adaptability: </span>{experience[1]}</div>
          <div className="text-full-stack"><span>Problem-Solving: </span>{experience[2]}</div>
          <div className="text-full-stack"><span>Collaboration: </span>{experience[3]}</div>
          <div className="text-full-stack"><span>Continuous Learning: </span>{experience[4]}</div>
      </div>
    </div>
  )
}
export default AbautMe;