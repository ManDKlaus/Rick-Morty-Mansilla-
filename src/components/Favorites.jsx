import React from 'react';
import Card from './Card';
import "./Favorites.css"
import { useDispatch, useSelector } from 'react-redux';
import { removeFav, orderCards, filterCards, reset} from '../redux/actions';

export default function Favorites({onClose}) {
  const {myFavorites} = useSelector((state)=> state);
  const dispatch = useDispatch();

  function closeFav(id) {
    onClose(id);
    dispatch(removeFav(id));
  };

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
    <div id='favorites'>
      <div className='Nav'>
        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>Ordenar por:</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disable>Filtrar por:</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>
        <button onClick={resetBttn}>Reset</button>
      </div>

      <div id="cardsFavorites">{myFavorites && myFavorites.map((element, id)=> {
        return (
          <Card
            key={id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={()=> closeFav(element.id)}
          ></Card>
        )})}
      </div>
    </div>
  );
};