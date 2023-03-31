import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Login.css";

const reqEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const reqPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({login}) {

  const [inputs, setInputs] = useState({
    email:"",
    password:"",
  });
  const [errors, setErrors] = useState({
    email:"",
    password:"",
  });
  

  function validate(inputs){
    const errors={};

    /* if(!inputs.email){                                       // Comento porque 
      errors.email = "Debe escribir su email secreto";          // no se implementa nunca
    };                                                          // porq hasta no escribir
    if(!inputs.password){                                       // mail y contraseña correcta
      errors.password = "Debe escribir su contraseña secreta";  // no aparece el botón
    }; */
    if(!reqEmail.test(inputs.email)){
      errors.email = "Ahora escribe tu email secreto";
    };
    if(!reqPass.test(inputs.password)){
      errors.password = "Ahora escribe tu contraseña secreta";
    };
    return errors;
  };

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  /* function handleSubmit (e) {  // Comento porque 
    e.prevent.default();          // no se implementa nunca
    const aux = Object.keys(errors);

    if(aux.length === 0) {
      setInputs({
        email:"",
        password:"",
      });
      setErrors({
        email:"",
        password:"",
      });
      login(inputs);
      return alert("Ok");
    };
    return alert("Error");
  }; */

  return (
    <div className='Login'>
      <form /* onSubmit={handleSubmit} */ id='form'>
        <input
          name="email" 
          value={inputs.email} 
          onChange={handleChange} 
          placeholder="Email Secreto"
        />
        <p className="dangers">{errors.email}</p>
        <input 
          name="password" 
          value={inputs.password} 
          onChange={handleChange} 
          placeholder="Contraseña Secreta"           
        />
        <p id="danger" className="dangers">{errors.password}</p>
        {
          Object.keys(errors).length === 0 ? (
            <Link to= "/home">
              <button id='ingresar' type="submit" >Ingresar</button>
            </Link>
          ) : null
        }
      </form>
    </div>
  );
};
