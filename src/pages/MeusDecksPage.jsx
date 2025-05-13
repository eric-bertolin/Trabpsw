import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MeusDecksPage = ({ setCurrentPage }) => {
  // Simulando uma lista de decks salvos futuramente
  const [decks, setDecks] = useState([]);

  return (
    <div className="container my-4 text-center">
      <h2>Meus Decks</h2>
      {decks.length === 0 ? (
        <div className="mt-4">
          <p className="text-muted">Você ainda não criou nenhum deck.</p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage('criar-deck')}
          >
            Criar novo Deck
          </button>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {/* Aqui futuramente entra o map dos decks */}
        </div>
      )}
    </div>
  );
};

export default MeusDecksPage;