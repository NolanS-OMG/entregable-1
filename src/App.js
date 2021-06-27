import React, { useState } from 'react';
import './App.css';
import "./styles.css"
import Data from "./quotes.json";
import QuoteBox from './QuoteBox.js';
import NewQuoteButton from './NewQuote.js';
import TwitterButton from './TwitterButton.js';

// Guardamos la lista con las citas en una variable
const quotesList = Data.quotes;

function App() {

  // Creamos 2 estados
  // chosenColor: Es una string que representa a un color en formato rgba(xxx, xxx, xxx, x) que se elige aleatoriamente
  // Donde su valor máximo es rgba(255, 127, 127, 1) y el mínimo es rgba(0, 0, 0, 1,)
  const [chosenColor, setChosenColor] = useState("rgba(" + (Math.floor(Math.random() * 256)).toString() + "," + (Math.floor(Math.random() * 256/2)).toString() + "," + (Math.floor(Math.random() * 256/2)).toString() + ",1)");
  //chosenIndex: Es un number aleatorio que siempre será menor a la cantidad de citas que existan en la lista
  // Sirve para tener un índice aleatorio de la cita
  const [chosenIndex, setChosenIndex] = useState(Math.floor(Math.random() * quotesList.length));

  return (
    // El primer div contiene a toda la pantalla
    <div className = "back-container" style={{backgroundColor: chosenColor}}>
        {/* El segundo contiene solamente al recuadro de la cita, el sutor y los botones */}
        <div className = "quote-box-container">
            {/* QuoteBox contiene la cita y el autor */}
            {/* quote = 'cita', author = 'autor', letterColor = 'Color aleatorio para la letra' */}
            <QuoteBox quote = {quotesList[chosenIndex].quote} author = {quotesList[chosenIndex].author} letterColor = {chosenColor}/>
            {/* TwitterButton contiene un botón para hacer un tweet con la cita (Aún no puede hacerlo)*/}
            {/* backgroundColor = 'Color aleatorio para el fondo' */}
            <TwitterButton backgroundColor = {chosenColor}/>
            {/* NewQouteButton contiene un botón para cambiar de color y de cita*/}
            {/* backgroundColor = 'Color aleatorio para el fondo, click = 'función para cambiar los estados chosenIndex y chosenColor' */}
            <NewQuoteButton backgroundColor = {chosenColor} click = {() => {
                setChosenIndex(Math.floor(Math.random() * quotesList.length));
                setChosenColor("rgba(" + (Math.floor(Math.random() * 256)).toString() + "," + (Math.floor(Math.random() * 256/2)).toString() + "," + (Math.floor(Math.random() * 256/2)).toString() + ",1)");
            }}/>
        </div>
    </div>
  );
}

export default App;
