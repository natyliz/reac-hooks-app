import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
    const [ formState, setFormState] =useState({
      name: '',
      email: ''  
    });
    const {name, email} =formState;
    //useEffect realiza cambios especificos cuando se ejecuta algo

    useEffect(() => {

    },[]);
    useEffect(() => {



    },[formState]);

    useEffect(() => {
      // el retunn dentro del useEffect es para realizar un tipo de limpieza



    },[email]);

    const handleInputChange= ({target}) => {
      setFormState({
          ...formState,
          [target.name]: target.value
      })
      //console.log(formState);

    }

  return (
    <>
    <h1>useEffect</h1>
    <hr/>
    <div>
        <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={ handleInputChange}/>
    </div>

    <div>
        <input
        type="text"
        name="email"
        className="form-control"
        placeholder="email@gmail.com"
        autoComplete="off"
        value={email}
        onChange={ handleInputChange}/>
    </div>
    {(name==='123') && <Message/>}
    </>
  )
}
