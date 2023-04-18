import "./SearchBar.css";
import { useState } from 'react';
import { searchCharacter } from '../redux/actions';
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

   
   function onSearch(id) {
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          // console.log("01:::::", data);
   
          dispatch(searchCharacter(data));
        });
      }

   return (
      <div id='search'>
         <input
            id="inpSearch"
            onChange={handleChange}
            type='search'
            name='search' 
            value={id}
            placeholder="N° de personaje"
         />
         <button 
            className='botNav'
            onClick={ ()=>onSearch(id) }>
               Buscar
         </button>
      </div>
   );
};
