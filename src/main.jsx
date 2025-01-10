// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './components/App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
