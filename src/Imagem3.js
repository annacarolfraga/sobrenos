import juan from './imagem/juanfoto.png';

import React from 'react';
//import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(juan.png); // /logo.84287d09.png

function Imagem3() {
  // Import result is the URL of your image
  return <img src={juan} alt="Juan" height="350"/>;

}



export default Imagem3;