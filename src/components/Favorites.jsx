import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFav } from '../redux/actions';

export default function Favorites({onClose}) {
  const {myFavorites} = useSelector((state)=> state);
  const dispatch = useDispatch();

  function closeFav(id) {
    onClose(id);
    dispatch(removeFav(id));
  };

  return (
    <div className='cards_container' >
      {myFavorites && myFavorites.map((element, id)=> {
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
  );
};