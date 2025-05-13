import React from 'react';
import Carta from '../components/Carta';

const cartasExemplo = 
 [
  {
    nome: "Montanha",
    imagem: "/IMGS/CARTAS/TERRENOS/VERMELHO/MONTANHATERRENOVERMELHO.jpg",
    cor: "Vermelho",
    tipo: "Terreno"
  },
  {
    nome: "Destroy Evil",
    imagem: "/IMGS/CARTAS/BRANCAS/CARTADESTROYEVILBRANCA.jpg",
    cor: "Branco",
    tipo: "Feitiço"
  },
  {
    nome: "Sheltered by Ghosts",
    imagem: "/IMGS/CARTAS/BRANCAS/SHELTEREDBYGHOSTSBRANCA.jpg",
    cor: "Branco",
    tipo: "Feitiço"
  },
  {
    nome: "Brotherhood's End",
    imagem: "/IMGS/CARTAS/VERMELHAS/BROTHEHOODSENDVERMELHA.jpg",
    cor: "Vermelho",
    tipo: "Feitiço"
  }
]


function PesquisarCartasPage() {
  return (
    <div className="slider-container">
      {cartasExemplo.map(carta => (
        <Carta key={carta.nome} nome={carta.nome} imagem={carta.imagem} />
      ))}
    </div>
  );
}

export default PesquisarCartasPage;