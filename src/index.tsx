import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { appStarted } from './shared/config/init';


appStarted();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
