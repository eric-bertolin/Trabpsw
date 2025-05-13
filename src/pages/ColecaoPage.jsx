import { useSelector } from 'react-redux';
import React from 'react';

function ColecaoPage({ setCurrentPage }) {
  const cartas = useSelector(state => state.colecao);

  return (
    <div className="container text-center my-4">
      {cartas.length === 0 ? (
        <div>
          <h3 className="mb-4">VOCÊ AINDA NÃO TEM CARTAS</h3>
          <p>ADICIONE AQUI:</p>
          <button className="btn btn-primary mt-2" onClick={() => setCurrentPage('pesquisar')}>
            Ir para Pesquisa de Cartas
          </button>
        </div>
      ) : (
        <div className="slider-container">
          {cartas.map((carta, index) => (
            <img key={index} src={carta.imagem} alt={carta.nome} className="cardimg" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColecaoPage;
