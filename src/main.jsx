import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './components/ToastProvider';
import './brand.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode ajuda a pegar problemas comuns em dev
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
