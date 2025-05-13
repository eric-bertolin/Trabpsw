import React from 'react';

const ComunidadePage = () => (
  <>
    <h1>DECKS NOVOS</h1>
    <div className="slider-container mt-3 mb-5">
      <img className="cardimg rounded img-fluid" src="IMGS/MELHORESDECKS/MELHORESDECKS.webp" alt="MAGIC ESPER PIXIE" />
      <img className="cardimg rounded img-fluid" src="IMGS/MELHORESDECKS/MELHORESDECKS2.jpg" alt="MAGIC GRUUL AGRO" />
      <img className="cardimg rounded img-fluid" src="IMGS/MELHORESDECKS/MELHORESDECKS3.jpg" alt="MAGIC OVERLORD ZUR" />
    </div>
    <h1 className="mt-5">DECKS MAIS BEM AVALIADOS</h1>
    <div className="slider-container mt-3">
      <img className="cardimg rounded img-fluid" src="IMGS/MELHORESDECKSEVER/MELHORESDECKSEVER1.jpg" alt="MAGIC RED DECK WINS" />
      <img className="cardimg rounded img-fluid" src="IMGS/MELHORESDECKSEVER/MELHORESDECKSEVER2.jpg" alt="MAGIC DIMIR MIDRANGE" />
    </div>
  </>
);

export default ComunidadePage;