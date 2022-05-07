//import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [ formValues, handleInputChange] =useForm({
      name: '',
      email: '',
      password: ''  
    });
    const {name, email, password} =formValues;
    //useEffect realiza cambios especificos cuando se ejecuta algo

    useEffect(() => {
        console.log('email cambio');
    },[email]);

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(formValues);

    }
  return (
    <form onSubmit={handleSubmit}>
    <h1>FormWithCustomHook</h1>
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

    <div>
        <input
        type="password"
        name="password"
        className="form-control"
        placeholder="*****"
        value={password}
        onChange={ handleInputChange}/>
    </div>

    <button type="submit" className="btn btn-primary">
        Guardar
    </button>

    </form>
  )
}