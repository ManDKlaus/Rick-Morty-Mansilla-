import React from 'react';
import { useState } from 'react';
import { orderCards, filterCards, reset } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from "./SearchBar.jsx";
import "./NavSet.css";

export default function NavSet() {
   
    const dispatch = useDispatch();

// -------------------------------- Personajes
    
    const { editChar } = useSelector(s => s);
    const { characters } = useSelector(s => s);
    const { editFav } = useSelector(s => s);
    const { favorites } = useSelector(s => s);

// --------------- Mosaico Char / Mosaico Fav / Ambas Carrusel

    const [isCarousel, setIsCarousel] = useState(false);

    // función para cambiar entre vista de mosaico y vista de carrusel
        function handleViewChange() {
        setIsCarousel(!isCarousel);
       /*  const container = document.getElementsByClassName("container")
        const h1Anterior0 = container[0].previousElementSibling;
        if(h1Anterior0.value = "Personajes Agregados") {
            container[0].style.width = `calc(180px * ${editChar.length})`
        } else {            
            container[1].style.width = `calc(180px * ${editFav.length})`
        } */
    }

    /* function verMosaico(){
    if(document.getElementsByClassName("carrusel")) {
        let elem = document.getElementsByClassName("carrusel");
        elem[0].className = "mosaico";
    }
    }
    function verCarrusel(){
    if(document.getElementsByClassName("mosaico")) {
        let elem = document.getElementsByClassName("mosaico");
        elem[0].className = "carrusel";
    }
    } */

// ------------------------------ Filtros

    function handleOrder(e) {
        e.preventDefault();
        const {value} = e.target;
        dispatch(orderCards(value));
    };

    function handleFilter(e) {
        dispatch(filterCards(e.target));
    };

    function resetBttn() {
        dispatch(reset());
    };

    return (
        <div id='Nav2'>
            <div id="caja" >
                <SearchBar />
                <button 
                    id="btnSelect" 
                    onClick={ () =>handleViewChange } >
                        Cambiar vista
                </button>
                <div id="filtros" >
                    <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disable="true" >Ordenar:</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                    <div id="switches">
                        <h2>Estado</h2>
                        <div className='switch'>
                            <div>
                                <p>Vivo</p>
                                <input
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="Alive" 
                                    id="switch1" />
                                <label htmlFor="switch1" ></label>
                            </div>
                            <div>
                                <p>Muerto</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="Dead" 
                                    id="switch2" />
                                <label htmlFor="switch2" ></label>
                            </div>
                            <div>
                                <p>Desconocido</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="unknown" 
                                    id="switch3" />
                                <label htmlFor="switch3" ></label>
                            </div>
                        </div>
                        <h2>Género</h2>
                        <div className='switch'>
                            <div>
                                <p>Masculino</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="Male" 
                                    id="switch4" />
                                <label htmlFor="switch4" ></label>
                            </div>
                            <div>
                                <p>Femenino</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="Female" 
                                    id="switch5" />
                                <label htmlFor="switch5" ></label>
                            </div>
                            <div>
                                <p>Sin genero</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="Genderless" 
                                    id="switch6" />
                                <label htmlFor="switch6" ></label>
                            </div>
                            <div>
                                <p>Desconocido</p>
                                <input 
                                    onChange={ handleFilter } 
                                    type="checkbox" 
                                    value="unknown" 
                                    id="switch7" />
                                <label htmlFor="switch7" ></label>
                            </div>
                        </div>
                        <button 
                            onClick={ resetBttn } >
                                Reset
                        </button>
                                            <button 
                                                className='oculto' 
                                                onClick={ resetBttn } >
                                                    ♻
                                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
