import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import "./Cards.css";
import { useSelector, useDispatch } from 'react-redux';
import Paginate from "./Paginate.jsx";
import axios from 'axios';
import { addChar, getFav } from "../redux/actions.js"

export default function Cards( {className, title, list} ) {

// --------------------- Defino la cantidad de cartas que se muestran por página
   
      const { numPageChar, favorites, editFav } = useSelector((state) => state);
   
      let cantPages = 42;

// --------------------- Defino que Lista se muestra
   
   var idbttn = "Char";
   if ( title === "Favoritos") {
      cantPages = Math.ceil(favorites.length / 20);
      idbttn = "Fav";
   }

   // -------------------------------- Traigo todos los personajes

   useEffect(()=>{
      dispatch(getFav());
   }, []);

   const dispatch = useDispatch();

   useEffect(() => {
      axios
      .get(`http://localhost:3001/rickandmorty/character/all?page=${numPageChar}`)
      .then((results) => {
         dispatch(addChar(results.data));
      });
   }, [numPageChar, editFav]);

   

// ------------------------------ Carrusel (mover)

   //Botón Izquierdo
   function moverCarrusel(e, cantidad) {
      const carrusel = document.getElementsByClassName("container");
      const index = e.target.id === "izq"+idbttn || e.target.id === "der"+idbttn ? 1 : 0;
      carrusel[index].scrollLeft += cantidad;
   }
   
   function movIzq(e) {
      moverCarrusel(e, -190);
   }
   
   function movDer(e) {
      moverCarrusel(e, 190);
   }

   return (
      <div className={className} >
         <button onClick={movIzq} className="irIzq" id={"izq"+idbttn} >◀</button>
         <div className='container' >
         {list && list.map((e, id)=>{
            return (
               <Card
                  key={id}
                  id={e.id}
                  e={e}
               />
            )
         })}
         </div>
         <button onClick={movDer} className="irDer" id={"der"+idbttn} >▶</button>
         <Paginate cantPages={cantPages} title={title} />
      </div>
   );
};
