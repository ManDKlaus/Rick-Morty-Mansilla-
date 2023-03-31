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
          <p>...pero ya que estás de chismoso. Necesito tu ayuda.</p>
          <p>¿Me ayudas a devolverle los recuerdos a Rick?</p>
          <button id="si" onClick={cambia}>SI</button>
          <p id="oculto">En la barra de navegación puedes ingresar números del 1 al 826 y agregar personajes en su memoria. También puedes jugar un poco y agregarlos a favoritos!!</p>
    </div>
  );
};
