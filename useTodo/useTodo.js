import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init);

    // lo grabamos en el LocalStorage
    // para que persistan los datos
    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
      }, [todos])

    const handleAddTodo = ( todo ) => {
        // Recibimos el nuevo TODO del formulario
        // console.log( todo );
        const action = {
            type: '(TODO) Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        // console.log( id );
        const action = {
            type: '(TODO) Delete Todo',
            payload: id,
        }

        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        // console.log( id );
        dispatch( {
            type: '(TODO) Done Todo',
            payload: id,
        } );
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => todo.done === false ).length;

  return {
    ...todos,
    todos,
    todosCount,
    pendingTodosCount,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
