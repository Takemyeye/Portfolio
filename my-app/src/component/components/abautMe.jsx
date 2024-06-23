import React, { useContext } from 'react';
import ActiveContext from './ActiveContext';

const AbautMe = () => {
  const { isAbout, isExperience, language } = useContext(ActiveContext);

  const phrases = {
    en: {
      aboutMe: 'About Me',
      professionalExperience: 'Professional Experience',
      summary: 'Summary',
      workExperience: 'Work Experience',
      education: 'Education',
      languages: 'Languages',
      additionalInformation: 'Additional Information',
      comprehensiveExpertise: 'Comprehensive Expertise',
      adaptability: 'Adaptability',
      problemSolving: 'Problem-Solving',
      collaboration: 'Collaboration',
      continuousLearning: 'Continuous Learning',
      downloadButton: 'Want to see more?',
    },
    ru: {
      aboutMe: 'Обо мне',
      professionalExperience: 'Профессиональный опыт',
      summary: 'Краткое описание',
      workExperience: 'Опыт работы',
      education: 'Образование',
      languages: 'Языки',
      additionalInformation: 'Дополнительная информация',
      comprehensiveExpertise: 'Обширная экспертиза',
      adaptability: 'Адаптивность',
      problemSolving: 'Решение проблем',
      collaboration: 'Сотрудничество',
      continuousLearning: 'Постоянное обучение',
      downloadButton: 'Хотите узнать больше?',
    },
    it: {
      aboutMe: 'Chi sono',
      professionalExperience: 'Esperienza professionale',
      summary: 'Sommario',
      workExperience: 'Esperienza lavorativa',
      education: 'Educazione',
      languages: 'Lingue',
      additionalInformation: 'Informazioni aggiuntive',
      comprehensiveExpertise: 'Competenze complete',
      adaptability: 'Adattabilità',
      problemSolving: 'Risoluzione dei problemi',
      collaboration: 'Collaborazione',
      continuousLearning: 'Apprendimento continuo',
      downloadButton: 'Vuoi saperne di più?',
    },
  };

  const abautMe = {
    en: [
      'I am Oleg Bratok, born in 2005, and a graduate of Enrico Fermi School in Frascati. I have one year of experience working at Impactium as a frontend developer. I possess skills in creating and maintaining modern web applications using up-to-date technologies and tools.',
      'Frontend Developer at Impactium | [start: December] 2023 - [end: April] 2024.',
      'Enrico Fermi School Frascati | [2024]',
      'Russian (native), Ukrainian (native), English (intermediate level), Italian (high level).',
      'Committed to continuous learning and professional development. Capable of working in a fast-paced environment and solving complex problems.',
    ],
    ru: [
      'Я Олег Браток, родился в 2005 году, окончил школу Энрико Ферми во Фраскати. У меня год опыта работы в Impactium в качестве фронтенд-разработчика. Владею навыками создания и поддержки современных веб-приложений с использованием актуальных технологий и инструментов.',
      'Фронтенд-разработчик в Impactium | [начало: Декабрь] 2023 - [конец: Апрель] 2024.',
      'Школа Энрико Ферми, Фраскати | [2024]',
      'Русский (родной), украинский (родной), английский (средний уровень), итальянский (высокий уровень).',
      'Готов к непрерывному обучению и профессиональному развитию. Способен работать в быстром темпе и решать сложные задачи.',
    ],
    it: [
      'Sono Oleh Bratok, nato nel 2005, laureato alla scuola Enrico Fermi di Frascati. Ho un anno di esperienza lavorativa in Impactium come sviluppatore frontend. Possiedo competenze nella creazione e manutenzione di moderne applicazioni web utilizzando tecnologie e strumenti aggiornati.',
      'Sviluppatore frontend in Impactium | [inizio: Dicembre] 2023 - [fine: Aprile] 2024.',
      'Scuola Enrico Fermi Frascati | [2024]',
      'Russo (nativo), ucraino (nativo), inglese (livello intermedio), italiano (livello alto).',
      'Impegnato nell apprendimento continuo e nello sviluppo professionale. Capace di lavorare in un ambiente frenetico e risolvere problemi complessi.',
    ],
  };
  
  const experience = {
    en: [
      'Proficient in modern Frontend framework (React) and Backend technologies (Node.js).',
      'Skilled in integrating various development aspects to deliver cohesive and functional web applications.',
      'Strong analytical skills and the ability to troubleshoot complex issues efficiently.',
      'Effective communicator and team player, capable of working in diverse team settings to achieve project goals.',
      'Committed to staying updated with the latest industry trends and technologies to maintain a competitive edge.',
    ],
    ru: [
      'Опытный в современном фронтенд-фреймворке (React) и бэкенд-технологиях (Node.js).',
      'Умение интегрировать различные аспекты разработки для создания согласованных и функциональных веб-приложений.',
      'Сильные аналитические навыки и способность эффективно устранять сложные проблемы.',
      'Эффективный коммуникатор и командный игрок, способный работать в различных командных средах для достижения целей проекта.',
      'Готов к постоянному обновлению с последними тенденциями и технологиями отрасли для поддержания конкурентного пре',
    ],
    it: [      'Competente nel moderno framework frontend (React) e nelle tecnologie di backend (Node.js).',
    'Abile nell integrare vari aspetti dello sviluppo per fornire applicazioni web coerenti e funzionali.',
    'Forte capacità analitiche e capacità di risolvere efficientemente problemi complessi.',
    'Comunicatore efficace e giocatore di squadra, capace di lavorare in diverse ambientazioni di squadra per raggiungere gli obiettivi del progetto.',
    'Impegnato a rimanere aggiornato con le ultime tendenze e tecnologie del settore per mantenere un vantaggio competitivo.',
  ],
};

const currentPhrases = phrases[language];

return (
  <div className='main2'>
    <div id='about' className={`abaut ${isAbout ? 'active' : ''}`}>
      <div className='descriptionAbaut'>
        <h1 className='h1'>
          {currentPhrases.aboutMe}
          <span>.</span>
          <span style={{ fontSize: '25px' }}>.</span>
          <span className='span' style={{ fontSize: '20px' }}>.</span>
        </h1>
        <div className='text-full-stack'>
          <span>{currentPhrases.summary}: </span>
          {abautMe[language][0]}
        </div>
        <div className='text-full-stack'>
          <span>{currentPhrases.workExperience}: </span>
          {abautMe[language][1]}
        </div>
        <div className='text-full-stack'>
          <span>{currentPhrases.education}: </span>
          {abautMe[language][2]}
        </div>
        <div className='text-full-stack'>
          <span>{currentPhrases.languages}: </span>
          {abautMe[language][3]}
        </div>
        <div className='text-full-stack'>
          <span>{currentPhrases.additionalInformation}: </span>
          {abautMe[language][4]}
        </div>
        <a href="/resume.pdf" download="Oleh_Bratok_Resume.pdf">
          <button className='btn'>{currentPhrases.downloadButton}</button>
        </a>
      </div>
    </div>
    <div id='experience' className={`experience ${isExperience ? 'active' : ''}`}>
      <h1 className='h1'>{currentPhrases.professionalExperience}</h1>
      <div className='text-full-stack'>
        <span>{currentPhrases.comprehensiveExpertise}: </span>
        {experience[language][0]}
      </div>
      <div className='text-full-stack'>
        <span>{currentPhrases.adaptability}: </span>
        {experience[language][1]}
      </div>
      <div className='text-full-stack'>
        <span>{currentPhrases.problemSolving}: </span>
        {experience[language][2]}
      </div>
      <div className='text-full-stack'>
        <span>{currentPhrases.collaboration}: </span>
        {experience[language][3]}
      </div>
      <div className='text-full-stack'>
        <span>{currentPhrases.continuousLearning}: </span>
        {experience[language][4]}
      </div>
    </div>
  </div>
);
};

export default AbautMe;