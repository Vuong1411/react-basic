import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import App from './App';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
