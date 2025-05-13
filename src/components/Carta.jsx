import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarCarta } from '../store/store';

function Carta({ imagem, nome, cor, tipo }) {
  const [showZoom, setShowZoom] = useState(false);
  const dispatch = useDispatch();

  const handleAdicionar = () => {
    dispatch(adicionarCarta({ imagem, nome, cor, tipo }));
    setShowZoom(false);
  };

  return (
    <div>
      <img
        src={imagem}
        alt={nome}
        className="cardimg"
        onClick={() => setShowZoom(true)}
        style={{ cursor: 'pointer' }}
      />

      {showZoom && (
        <div
          className="modal"
          onClick={() => setShowZoom(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}
          >
            <img src={imagem} alt={nome} style={{ width: '100%', maxHeight: '80vh' }} />
            <button className="btn btn-success mt-3" onClick={handleAdicionar}>
              Adicionar à Coleção
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carta;
