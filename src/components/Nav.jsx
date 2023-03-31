import React from 'react';
import SearchBar from './SearchBar.jsx';
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { orderCards, filterCards, reset } from '../redux/actions';

export default function Nav({onSearch, logout}) {
  const dispatch = useDispatch();

  function cambia(){
    let id1 = document.getElementById("img");
    id1 = "";
  }

  function handleOrder(e) {
    e.preventDefault();
    const {value} = e.target;
    dispatch(orderCards(value));
  };

  function handleFilter(e) {
    e.preventDefault();
    const {value} = e.target;
    dispatch(filterCards(value));
  };

  function resetBttn() {
    dispatch(reset());
  };
  
  return (
    <div className='Nav'>
      <div id="Nav1">
        <Link id="logo" to="/home">
          <button />
        </Link>
        <Link onClick={cambia} to="/about">
          <button
            className='botNav' >¿Quiénes somos?
          </button>
          <button
            className='oculto' >❔
          </button>
        </Link>
        <Link to="/Favorites">
          <button
            className='botFav' >Favoritos
          </button>
          <button
            className='oculto' >❤️
          </button>
        </Link>
        <SearchBar onSearch={onSearch} ></SearchBar>
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
      <div id='Nav2'>
        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>Ordenar:</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>Filtrar:</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>
        <button onClick={resetBttn}>Reset</button>
        <button className='oculto' onClick={resetBttn}>♻</button>
      </div>
    </div>
  );
};
