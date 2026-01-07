import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode ajuda a pegar problemas comuns em dev
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
