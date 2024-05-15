import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ActiveProvider } from './component/components/ActiveContext';

ReactDOM.render(
  <React.StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
