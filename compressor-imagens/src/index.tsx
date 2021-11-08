import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ImageContextProvider } from './context';
import reportWebVitals from './reportWebVitals';
import ResetStyles from './resetStyles';

ReactDOM.render(
  <React.StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
    <ResetStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
