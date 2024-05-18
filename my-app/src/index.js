import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActiveProvider } from './component/components/ActiveContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </React.StrictMode>
);
