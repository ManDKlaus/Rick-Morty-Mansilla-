import React from 'react';
import NavSet from './NavSet.jsx';
import "./Locations.css";
import { useSelector } from 'react-redux';

export default function Locations() {
  return (
    <div className='expositionLocations' >
       <NavSet />
       <div className='container' >
          <h1 className='titulos' >Locaciones</h1>
          {/* 
          <div className={isCarousel ? 'mosaico' : 'carrusel'} >
             <button onClick={movIzq} id="izq" >IZQ</button>
             {characters && characters.map((e, id)=>{
                return (
                   <Card
                      key={id}
                      id={id}
                      e={e}
                      isFav="true"
                      setIsFav={setIsFav}
                   ></Card>
                )
             })}
             <button onClick={movDer} id="der" >DER</button>
          </div>
          <h1 className='titulos' >Favoritos</h1>
          <div className={isCarousel ? 'mosaico' : 'carrusel'} >
             <button onClick={movIzq} id="izq" >IZQ</button>
             {myFavorites && myFavorites.map((e, id)=> {
                return (
                   <Card
                   key={id}
                   id={e.id}
                   e={e}
                   isFav={isFav}
                   setIsFav={setIsFav}
                   ></Card>
                )}
             )}
             <button onClick={movDer} id="der" >DER</button>
          </div> */}
       </div>
    </div>
  );
};