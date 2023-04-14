import "./SearchBar.css";
import { useState } from 'react';
import { addChar, filterCards } from '../redux/actions';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {

   const { removeds } = useSelector(s => s);
   const { allCharacters } = useSelector(s => s);
   const { allFavorites } = useSelector(s => s);
   const dispatch = useDispatch()

   const [id, setId] = useState("");

   function handleChange (event) {
      setId(event.target.value);
   };

   function onSearch (id) {
      axios
         .get(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
         if (data.name) {
            let existRem = removeds.find((ch) => ch.id === data.id);
            let existChar = allCharacters.find((ch) => ch.id === data.id);
            let existFav = allFavorites.find((ch) => ch.id === data.id);
            if(existChar || existFav || existRem) {
               alert("Ya lo agregaste");
            } else {
               dispatch(addChar(data));
            }
         } else {
            alert('¡No hay personajes con este ID!');
         };
      });
      
      setTimeout(()=> {
         const e = document.getElementById("switch1")
         filterCards(e)
      }, 50)
   };

   function searchOne () {
      let contador = 0;
      for (let i = 1; i <= 826; i++) {
         axios
            .get(`http://localhost:3001/rickandmorty/character/${i}`)
            .then(({ data }) => {
               if (data.name && contador < 1) {
                  let existRem = removeds.find((ch) => ch.id === data.id);
                  let existChar = allCharacters.find((ch) => ch.id === data.id);
                  let existFav = allFavorites.find((ch) => ch.id === data.id);
                  if(!existChar && !existFav && !existRem) {
                     contador++
                     dispatch(addChar(data));
                  }
               }
         });
      }
      
      setTimeout(()=> {
         const e = document.getElementById("switch1")
         filterCards(e)
      }, 50)
   };

   function searchTen () {
      let contador = 0;
      for (let i = 1; i <= 826; i++) {
         axios
            .get(`http://localhost:3001/rickandmorty/character/${i}`).then(({ data }) => {
               if (data.name && contador < 10) {
                  let existRem = removeds.find((ch) => ch.id === data.id);
                  let existChar = allCharacters.find((ch) => ch.id === data.id);
                  let existFav = allFavorites.find((ch) => ch.id === data.id);
                  if(!existChar && !existFav && !existRem) {
                     contador++
                     dispatch(addChar(data));
      
                     setTimeout(()=> {
                        const e = document.getElementById("switch1")
                        filterCards(e)
                     }, 50)
                  }
               }
         });
      }
   };

   return (
      <div id='search'>
         <input
            id="inpSearch"
            onChange={handleChange}
            type='search'
            name='search' 
            value={id}
            placeholder="N° de personaje"/>
         <div>
            <button 
               className='botNav'
               onClick={ ()=>onSearch(id) }>
                  Buscar
            </button>
                              <button 
                                 className='oculto'
                                 onClick={ ()=>onSearch(id) }>
                                    ➕
                              </button>
            <button 
               className='botNav'
               onClick={ searchOne }>
                  +1
            </button>
            <button 
               className='botNav'
               onClick={ searchTen }>
                  +10
            </button>
         </div>
      </div>
   );
};
