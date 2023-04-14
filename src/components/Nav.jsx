import React from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ logout }) {  
  return (
      <div id="Nav">
        <Link id="logo" to="/home">
          <button />
        </Link>
        <Link to="/home">
          <button
            className='botNav' >¿Quiénes somos?
          </button>
          <button
            className='oculto' >
              ❔
          </button>
        </Link>
        <Link to="/personajes">
          <button
            className='botFav' >
              Personajes
          </button>
          <button
            className='oculto' >
              ❤️
          </button>
        </Link>
        <Link to="/locaciones">
          <button
            className='botFav' >
              Locaciones
          </button>
        </Link>
        <Link to="/episodios">
          <button
            className='botFav' >
              Episodios
          </button>
        </Link>
        <button
          id='botNav'
          onClick={logout}>
          Ocultar Proyecto Secreto
        </button>
        <button
          id="back"
          className='oculto'
          onClick={logout}>
          ❌
        </button>
    </div>
  );
};
