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
      <div>
        <h2 id="h2">SHHH... ES SECRETO!!!</h2>
        <p>...pero ya que estás de chismoso por aquí...</p>
        <p>¡Hola, soy Rick!</p>
        <p>Como sabrás, Morty y yo somos agentes secretos encargados de cumplir misiones en distintas realidades y dimensiones. Somos los únicos capaces de manejar el multiverso y mantener la paz en todos los universos existentes.</p>
        <p>Aunque a veces Morty es un poco inseguro y se queja bastante, lo cierto es que somos un gran equipo.</p>
        <p>Pero no todo es trabajo y lucha. Nos gusta relajarnos y disfrutar de las cosas simples de la vida también. A mí, por ejemplo, me encanta tomar una buena copa de bourbon y recordar viejos tiempos con mis amigos. Y hablando de amigos, últimamente se me ha olvidado quiénes son mis personajes favoritos de la serie. ¡Maldita sea mi memoria!</p>
        <p>Por eso, he decidido crear una sección en nuestra página web en la que puedas elegir tus personajes favoritos de Rick and Morty. Me ayudará a recordar quiénes eran los míos y así volveremos a estar al día en la serie.</p>
        <p>Así que ya sabes, si quieres ser un verdadero fanático de Rick and Morty, únete a nuestro equipo y descubre todas las aventuras que tenemos para ti en el multiverso. ¡Wubba lubba dub dub!</p>
        <p>¿Me ayudarás?</p>
        <button id="si" onClick={cambia} >SI</button>
        <p id="oculto">En el botón del navegador "Personajes" vas a poder ver los 826 personajes de la serie. ¡Elige con cuidado!</p>
      </div>
    </div>
  );
};
