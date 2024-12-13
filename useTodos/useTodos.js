import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initializer = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer( todoReducer, [], initializer);
    
    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos) );
    },
    [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'ADDTODO',
            payload: todo
        }
        dispatch(action);
    }
    
    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'DELTODO',
            payload: id

        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGLETODO',
            payload: id
        });
    }

    const todosCount = () => {
        return todos.length;
    };

    const todosPending = () => {
        return todos.filter(p=>!p.done).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount : todosCount(), // ,
        todosPending: todosPending()
    }
}
