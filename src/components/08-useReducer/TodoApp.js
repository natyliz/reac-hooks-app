import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     descripcion: 'Aprender React',
    //     done: false
    
    // }];

}

export const TodoApp = () => {
    const [todos,dispatch] = useReducer(todoReducer, [], init);
    //dispatch, es una funcion que le mando una accion y sabe a q reducer mandarle la informacion, y cuando cambie el state va a redibujar lo que cambie 
    //console.log(todos);
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
       
    }, [todos]); // si los todos cambian tiene que volver a grabar el local storage
    

    const handleDelete = (todoId) => {
       // console.log(todoId);
        const action = {
            type:'delete',
            payload :todoId

        };

        dispatch(action);
        

    };

    const handleToggle = (TodoId) => {
        dispatch ({
            type:'toggle',
            payload :TodoId

        });
            
    };
    //console.log(description);
    const handleSubmit = (e) => {
        e.preventDefault(); // permite evitar el posteo del formulario o el refresh
        if(description.trim().length<=1){
            return;

        }
        const newTodo ={
            id: new Date().getTime(),
            descripcion: description,
            done: false
        
        };
        const action = {
            type:'add',
            payload :newTodo

        }

        
        dispatch(action);
        reset();

    }
  return (
    <div>
        <h1>TodoApp ( {todos.length} )</h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList 
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                    tye="text" 
                    name ="description"
                    className="form-control"
                    placeholder="Aprender"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                    />
                    <button type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                </form>

            </div>
            

        </div>
        
    </div>
  )
}
