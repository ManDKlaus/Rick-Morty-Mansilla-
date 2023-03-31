import React, {useState, useEffect} from 'react';
import "./Detail.css";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Detail() {

  const {id} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       };
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className='cards_container'>
      <div id="detalle">
          <img src={character.image} alt={character.name} />
          <div>
            <h1>{character.name}</h1>
            <h2>Estado: {character.status}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender}</h2>
            <h2>Originario de: {character.origin?.name}</h2>
          </div>
      </div>
    </div>
  );
};
