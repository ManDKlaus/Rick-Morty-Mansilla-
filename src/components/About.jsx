import React, { Children } from 'react';
import "./About.css";

export default function About() {

  function cambia(){
    var id1 = document.getElementById("oculto");
    var id2 = document.getElementById("si");
    id1.style.display = "block";
    id2.style.display = "none";
  }

  return (
    <div className='About'>
          <h2 id="h2">SHHH... ES SECRETO!!!</h2>
          <p>...pero ya que estás de chismoso.</p>
          <p>¿Me ayudas a devolverle los recuerdos a Rick?</p>
          <button id="si" onClick={cambia}>SI</button>
          <p id="oculto">En el botón del navegador "Personajes" vas a poder ver los 826 personajes de la serie. ¿Te animás a recordarle cuales son los favoritos a Rick?</p>
    </div>
  );
};
