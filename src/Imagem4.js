import adriana from './imagem/adrianafoto.png';

import React from 'react';
//import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(adriana.png); // /logo.84287d09.png

function Imagem4() {
  // Import result is the URL of your image
  return <img src={adriana} alt="Adriana" height="350" />;


}



export default Imagem4;