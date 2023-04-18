import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav, actChar } from "../redux/actions";
import { useEffect, useState } from "react";

export default function Card( props ) {

   const { 
      id,
      e,
   } = props;
   const dispatch = useDispatch();
   const { editChar, editFav } = useSelector((s)=> s);

// ------------------- Sacar N° de episodio

   const separo = e.episode && e.episode.split("/")
   const episodio = Array.isArray(separo) && separo[separo.length-1]

// ------------------- Agregar y Sacar de Favoritos

   function handleFavorite () {
      if(e.isFav === true){
         e.isFav = false;
         dispatch(removeFav(e.id));
      } else {
         e.isFav = true;
         dispatch(addFav(e));
      };
   };
 

// ---------------------------- ver Card o Detalle
   
   const [card, setCard] = useState(false);

   function cardDet (e) {
      e.preventDefault()
      let CardsDet = document.getElementsByClassName("detalle");
      if(CardsDet[0]) {
         CardsDet[0].className = "card";
         setCard(false);
      } else {
         setCard(true);
      };
   };

   function center (e) {
      e.preventDefault();
      
      setTimeout(()=> {         
         const elem = e.target.parentNode.parentNode; // Card
         const parent = elem.parentNode;              // container
         const offsetLeft = elem.offsetLeft;          // position
         const parentWidth = parent.offsetWidth;      // medida del container
         const centeredPosition = offsetLeft - (parentWidth - 180) / 2;
            parent.scrollLeft = centeredPosition;
      },200);
   };

   return (
      <div className={card ? 'detalle' : 'card'} >
         <div 
            id="name" 
            onClick={ center } 
            onDoubleClick={ cardDet } 
         >
               <h3 className="contenido" >N° {e.id}</h3>
               <h2 className="contenido" >{e.name}</h2>
            <div className="contenido" >
               <h3>Estado:</h3>
               <h2>{e.status}</h2>
            </div>
            <div className="contenido" >
               <h3>Especie:</h3>
               <h2>{e.species}</h2>
            </div>
            <div className="contenido" >
               <h3>Género:</h3>
               <h2>{e.gender}</h2>
            </div>
            <div className="contenido" >
               <h3>Origen:</h3>
               <h2>{e.origin}</h2>
            </div>
            <div className="contenido" >
               <h3>Aparece en:</h3>
               <h2>Episodio {episodio}</h2>
            </div>
            <img src={e.image} alt={e.name} />
         </div>
            {
               e.isFav === true ? (
                  <button
                     cursor="pointer"
                     className="izq"
                     onClick={ handleFavorite }>
                        ❤️
                  </button>
               ) : (
                  <button
                     cursor="pointer"
                     className="izq"
                     onClick={ handleFavorite }>
                        🤍
                  </button>
               )
            }
      </div>
   );
};