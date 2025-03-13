import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css'; // Adjusted path to import index.css from src
import App from '../App'; // Adjusted path to import App
import reportWebVitals from '../reportWebVitals'; // Adjusted path to import reportWebVitals

const IndexPage = () => {
  return <App />;
};

export default IndexPage; // Ensure this is a default export

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);

reportWebVitals();
