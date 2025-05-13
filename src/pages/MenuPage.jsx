import React from 'react';

const MenuPage = () => (
  <>
    <h1>NOVIDADES EM MTG</h1>
    <p>Nova coleção!</p>
    <div className="slider-container mt-3 mb-5">
      <img src="IMGS/COLECOESNOVAS/COLECOESNOVAS1.webp" alt="MAGIC AETHERDRIFT" />
      <img src="IMGS/COLECOESNOVAS/COLECOESNOVAS2.webp" alt="MAGIC DUSKMOURN" />
      <img src="IMGS/COLECOESNOVAS/COLECOESNOVAS3.webp" alt="MAGIC BLOOMBURROW" />
      <img src="IMGS/COLECOESNOVAS/COLECOESNOVAS4.webp" alt="MAGIC ASSASSINS CREED" />
    </div>
    <h1 className="mt-5">DECKS QUENTES DA SEMANA</h1>
    <div className="slider-container mt-3 mb-5">
      <img src="IMGS/MELHORESDECKS/MELHORESDECKS.webp" alt="MAGIC ESPER PIXIE" />
      <img src="IMGS/MELHORESDECKS/MELHORESDECKS2.jpg" alt="MAGIC GRUUL AGRO" />
      <img src="IMGS/MELHORESDECKS/MELHORESDECKS3.jpg" alt="MAGIC OVERLORD ZUR" />
    </div>
    <h1 className="mt-5">DECKS FAVORITOS DE TODOS OS TEMPOS</h1>
    <div className="slider-container mt-3">
      <img src="IMGS/MELHORESDECKSEVER/MELHORESDECKSEVER1.jpg" alt="MAGIC RED DECK WINS" />
      <img src="IMGS/MELHORESDECKSEVER/MELHORESDECKSEVER2.jpg" alt="MAGIC DIMIR MIDRANGE" />
    </div>
  </>
);

export default MenuPage;