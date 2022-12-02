import joao from './imagem/jpfoto.png';

import React from 'react';
//import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(joao.png); // /logo.84287d09.png

function Imagem2() {
  // Import result is the URL of your image
  return <img src={joao} alt="Joao" height="350" />;

}



export default Imagem2;