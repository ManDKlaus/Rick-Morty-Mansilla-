import { useState } from 'react';
import { useSelector } from 'react-redux';
import "./Characters.css";
import NavSet from './NavSet.jsx';
import Cards from './Cards.jsx';

export default function Characters() {

// ------------- Ver Mosaico Char / Mosaico Fav / Ambas Carrusel
    
    const [isCarousel, setIsCarousel] = useState(false);

// ----------------------------- Traigo Listas
          
    const { editChar } = useSelector(s => s);
    const { editFav } = useSelector(s => s);

  return (
    <div className='expositionCards' >
        <NavSet setIsCarousel={setIsCarousel} />
        <div id="container-list">
            <h1 className='titulos' >Personajes</h1>
            <Cards 
                className={isCarousel ? 'mosaico' : 'carrusel'}
                title="Personajes"
                list={editChar}
            />
            <h1 className='titulos' >Favoritos</h1>
            <Cards 
                className={isCarousel ? 'mosaico' : 'carrusel'}
                title="Favoritos"
                list={editFav}
            />
        </div>
    </div>
  )
}
