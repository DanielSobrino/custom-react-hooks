import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (todo) => {
        dispatch({
            type: 'Add todo',
            payload: todo,
        });
    }
    
    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'Remove todo',
            payload: id,
        });
    }
    
    const handleFlipTodo = (id) => {
        dispatch({
            type: 'Flip todo',
            payload: id,
        });
    }
        
    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleFlipTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}


