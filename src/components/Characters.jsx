import {useState} from 'react';
import "./Characters.css";
import NavSet from './NavSet.jsx';
import Cards from './Cards.jsx';
import { useSelector } from 'react-redux';

export default function Characters() {

   const { characters } = useSelector(s => s);
   const { myFavorites } = useSelector(s => s);

    // ------------- Ver Mosaico Char / Mosaico Fav / Ambas Carrusel
    
       const [isCarousel, setIsCarousel] = useState(false);

  return (
    <div className='expositionCards' >
        <NavSet setIsCarousel={setIsCarousel} />
        <div id="container-list">
            <h1 className='titulos' >Personajes Agregados <span>({characters.length})</span></h1>
            <Cards 
                className={isCarousel ? 'mosaico' : 'carrusel'}
                title="Personajes Agregados"
            />
            <h1 className='titulos' >Favoritos <span>({myFavorites.length})</span></h1>
            <Cards 
                className={isCarousel ? 'mosaico' : 'carrusel'}
                title="Favoritos"
            />
        </div>
    </div>
  )
}
