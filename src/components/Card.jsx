import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav, removeChar, addChar, addRemoved } from "../redux/actions";
import { useEffect, useState } from "react";

export default function Card( props ) {

   const { 
      id,
      e,
      isFav, 
      setIsFav,
   } = props;
   const dispatch = useDispatch();
   const {characters} = useSelector((s)=> s);

// ------------------- Sacar N° de episodio

const separo = e.episode[0].split("/")
const episodio = separo[separo.length-1]

// ------------------- Agregar y Sacar de Favoritos

   function handleFavorite () {
      if(isFav === true){
         setIsFav(false);
         dispatch(addChar(e));
         dispatch(removeFav(e.id));
      } else {
         setIsFav(true);
         dispatch(addFav(e));
         dispatch(removeChar(e.id));
      };
   };

//Asegura estén marcados las card de Favoritos   
   const {myFavorites} = useSelector((s)=> s);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === e.id) {
            setIsFav(true);
         };
      });
   }, [myFavorites]);

// ----------------------- Eliminar Personaje

   function eliminar() {
      dispatch(addRemoved(e));
      dispatch(removeChar(e.id));      
      dispatch(removeFav(e.id));
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
         if(elem.className === "card") {
            parent.scrollLeft = centeredPosition;
         } else {
            parent.scrollLeft = centeredPosition + 214.8;
         }
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
         <div id="bttns">
            {
               isFav === true ? (
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
            <button
               cursor="pointer"
               className="der"
               onClick={ eliminar }>
                  🗑
            </button>
         </div>
      </div>
   );
};