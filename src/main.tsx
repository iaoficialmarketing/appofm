import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <CookieBanner />
  </StrictMode>
);
