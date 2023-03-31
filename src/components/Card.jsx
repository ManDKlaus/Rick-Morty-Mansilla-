import "./Card.css";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
   const {id, name, image, onClose} = props;
   const [isFav, setIsFav] = useState(false);
   const {myFavorites} = useSelector((s)=> s);
   const dispatch = useDispatch();

   function handleFavorite () {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      };
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         };
      });
   }, [myFavorites]);

   function superClose() {
      onClose(id);
      dispatch(removeFav(id));
   };

   return (
      <div className="card" >
         <Link id="name" to={`/detail/${id}`} >
            <h2>N°{id}</h2>
            <h2>{name}</h2>
            <img src={image} alt={name} />
         </Link>
         <div id="bttns">
         {
            isFav ? (
               <button
                  cursor="pointer"
                  className="izq"
                  onClick={handleFavorite}>
                     ❤️
               </button>
            ) : (
               <button
                  cursor="pointer"
                  className="izq"
                  onClick={handleFavorite}>
                     🤍
               </button>
            )
         }
         <button
            cursor="pointer"
            className="der"
            onClick={superClose}>
               🗑
         </button>
         </div>
      </div>
   );
};