import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MailApp from './MailApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MailApp />
  </StrictMode>
);
