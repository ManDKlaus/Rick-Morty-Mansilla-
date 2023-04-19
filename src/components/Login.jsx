import React, {useState } from 'react';
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
        <div className='inputBox' >
          <label>Email Secreto</label>
          <input
            name="email" 
            value={inputs.email} 
            onChange={handleChange}
          />
          {/* <p className="dangers">{errors.email}</p> */}
        </div>
        <div className='inputBox' >
          <label>Contraseña Secreta</label>
          <input 
            name="password" 
            value={inputs.password} 
            onChange={handleChange}        
          />
          {/* <p id="danger" className="dangers">{errors.password}</p> */}
        </div>
        {
          Object.keys(errors).length === 0 ? (
            <Link to= "/home">
              <button id='ingresar' type="submit" >
                Ingresar
              </button>
            </Link>
          ) : null
        }
      </form>
    </div>
  );
};
