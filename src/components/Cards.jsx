import { useState } from 'react';
import Card from './Card.jsx';
import "./Cards.css";
import { useSelector } from 'react-redux';

export default function Cards( {className, title} ) {

// ----------------------------- Traigo Listas
   
   const { characters } = useSelector(s => s);
   const { myFavorites } = useSelector(s => s);

// --------------------- Defino que Lista se muestra

   var list = [];
   var boolean = false;
   var idbttn = "";
   switch (title) {
      case "Favoritos":
         list = myFavorites;
         idbttn = "Fav"
         boolean = true;
         break;
      case "Personajes Agregados":
         list = characters;
         idbttn = "Char"
         break;   
      default:
         list = characters;
         break;
   }

// ------------------------------ Carrusel (mover)

   //Botón Izquierdo
   function movIzq (e) {
      const carrusel = document.getElementsByClassName("container")
      if(e.target.id === "izqFav") {
         carrusel[1].scrollLeft -= 190
      } else {
      carrusel[0].scrollLeft -= 190
      }
   }
   //Botón Derecho
   function movDer (e) {
      const carrusel = document.getElementsByClassName("container")
      if(e.target.id === "derFav") {
         carrusel[1].scrollLeft += 190
      } else {
      carrusel[0].scrollLeft += 190
      }
   }

// ------------------------ Creo estado para Favoritos

   //estado local para pasar por prop a cada card si es fav o no.
   //La función que lo setea está en Card.
   const [isFav, setIsFav] = useState(false);

   return (
            <div className={className} >
               <button onClick={movIzq} className="irIzq" id={"izq"+idbttn} >IZQ</button>
               <div className='container' >
               {list && list.map((e, id)=>{
                  return (
                     <Card
                        key={id}
                        id={id}
                        e={e}
                        isFav={boolean}
                        setIsFav={setIsFav}
                     />
                  )
               })}
               </div>
               <button onClick={movDer} className="irDer" id={"der"+idbttn} >DER</button>
         </div>
   );
};
