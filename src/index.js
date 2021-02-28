import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next'

ReactDOM.render(
  <Suspense fallback={(<div>Laddar.</div>)} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
