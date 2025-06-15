import { Texto } from "./componentes/texto.jsx";
import { Boton } from "./componentes/Boton.jsx";
import './estilos/App.css'

import { useState, useEffect } from "react";

function App() {

  const [color, setColor] = useState('#1B1B1B');

  // Genero un color Aleatorio en Hexadecimal #8C8C8C
  const colorAleatorioHex = () => {
    const digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
      let indiceAleatorio = Math.floor(Math.random() * digitos.length);
      colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
  }
  // Establezco el valor de color usando el setColor
  const cambio = () => {
    setColor(colorAleatorioHex());
  }

  // Cada vez que haya un cambio en la variable color que se ejecute:
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // Llamo a los componentes que cree a Texto.jsx y a Boton.jsx
  return (
    <div className="contenedor">
      <Texto
        // le paso la variable color que tiene el valor del color aleatorio
        color={color} />
      {/* le paso la funcion cambio para ejecutar la funcion colorAleatorioHex */}
      {/* y establecer color con setColor */}
      <Boton cambio={cambio} />
    </div>
  )

}

export default App
