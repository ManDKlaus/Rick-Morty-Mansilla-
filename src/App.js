import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards.jsx' ;
import Nav from "./components/Nav.jsx";
import Login from './components/Login.jsx' ;
import Favorites from "./components/Favorites.jsx"
import About from './components/About.jsx' ;
import Detail from './components/Detail.jsx' ;
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

export default function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '@Model101';
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      };
   };

   function logout() {      
         setAccess(false);
         navigate('/');
   };

   useEffect(()=>{
      !access && navigate("/");
   },[access]);

   function onSearch(id) {
      let id1 = document.getElementById("img");
      id1.style.display = "none";
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id);
            if(exist) {
               alert("Ya existe");
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         };
      });
   };

   function onClose(id) {
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=> ch.id !== id);
      });
   };

   return (
      <div className='App'>
         {
            location.pathname === "/" ? null : <Nav logout={logout} onSearch={onSearch} />
         }
         <Routes>
            <Route path="/" element={<Login login={login}/>}></Route>
            <Route 
               path="/home"
               element={<Cards onClose={onClose} characters={characters} />}>                              
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/favorites" element={<Favorites onClose={onClose} />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
         </Routes>
      </div>
   );
};