
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add todo':
            // throw new Error('Action.type = ABC no esta implementada');
            return [...initialState, action.payload];
        case 'Remove todo':
            return initialState.filter(e => e.id !== action.payload);
        case 'Flip todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, done: !todo.done}
                }
                return todo;
            })
        default:
            return initialState;
    }
}