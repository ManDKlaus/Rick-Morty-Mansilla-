import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav.jsx";
import Login from './components/Login.jsx' ;
import Locations from "./components/Locations.jsx"
import About from './components/About.jsx' ;
import Episodes from './components/Episodes.jsx' ;
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Characters from './components/Characters';
import axios from 'axios';

export default function App() {
   
   const [ access , setAccess ] = useState ( false ) ;
   const navigate = useNavigate ( ) ;
   const location = useLocation();/* 
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '@Model101'; */

   function login(inputs) {
      axios.get(`http://localhost:3001/rickandmorty/login?password=${inputs.password}&email=${inputs.email}`)
         .then(({data}) => {
            if (data.access) {
               setAccess(data.access);
               navigate('/home');
            };
      })
   };

   function logout() {
      axios.get(`http://localhost:3001/rickandmorty/login?password=546&email=5454`)
         .then(({data}) => {
            if (!data.access) {   
               setAccess(data.access);            
               navigate('/');
            };
      })
   };

   useEffect(()=>{
      !access && navigate("/");
   },[access]);

   return (
      <div className='App'>
         {
            location.pathname === "/" ? null : <Nav logout={logout} />
         }
         <Routes>
            <Route
               path="/"
               element={<Login login={login}/>}
            />
            <Route 
               path="/home"
               element={<About />}                              
            />
            <Route 
               path="/personajes"
               element={<Characters />}                              
            />
            <Route
               path="/locaciones"
               element={<Locations />}
            />
            <Route 
               path="/episodios" 
               element={<Episodes />}
            />
         </Routes>
      </div>
   );
};