import React from 'react';
import SearchBar from './SearchBar.jsx';
import "./Nav.css";
import {Link} from "react-router-dom";

export default function Nav({onSearch, logout}) {

  function cambia(){
    let id1 = document.getElementById("img");
    id1 = "";
  }

  return (
    <div className='Nav'>
      <Link id="logo" to="/home">
        <button />
      </Link>
      <Link onClick={cambia} to="/about">
        <button
          className='botNav' >¿Quiénes somos?
        </button>
      </Link>
      <Link to="/Favorites">
        <button
          className='botFav' >Favoritos
        </button>
      </Link>
      <SearchBar onSearch={onSearch} ></SearchBar>
      <button
        id='botNav'
        onClick={logout}>
        Ocultar Proyecto Secreto<img alt="salida" src="../img/salida.png"></img>
      </button>
    </div>
  );
};
