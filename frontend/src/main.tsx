import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router";
import App from './App.tsx';
import './index.css';

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
