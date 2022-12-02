import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Imagem from './Imagem'
import Imagem2 from './Imagem2'
import Imagem3 from './Imagem3'
import Imagem4 from './Imagem4'
import Nomes from './Nomes'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Imagem/>
    <Imagem2/>
    <Imagem3/>
    <Imagem4/>
    <Nomes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
