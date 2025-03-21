import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'AddTodo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'DelTodo',
            payload: id
        }
        dispatch( action );
    }

    const onToogleTodo = (id) => {
        
        const action = {
            type: 'ChangeDone',
            payload: id
        }
        dispatch( action );
    }

    const todoCount = () =>{
        return todos.length
    }
    const todoPending = () =>{
        return todos.filter((todo) => todo.done === false).length
    }
  return {
    handleNewTodo,
    handleDeleteTodo,
    onToogleTodo,
    todoCount,
    todoPending,
    todos
    };
};
