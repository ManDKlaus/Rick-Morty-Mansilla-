import "./SearchBar.css";
import {useState} from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function handleChange (event) {
      setId(event.target.value);
   };

   return (
      <div id='search'>
         <input
            id="input"
            onChange={handleChange}
            type='search'
            name='search' 
            value={id}
            placeholder="Número de personaje"/>
         <button 
            className='botNav'
            onClick={()=>onSearch(id) }>Agregar
         </button>
      </div>
   );
};
