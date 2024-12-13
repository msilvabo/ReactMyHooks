
export const todoReducer = (initialState, action = {}) => {
    switch (action.type) {
        case 'ADDTODO':
            return [...initialState,action.payload]
        case 'DELTODO':
            return initialState.filter( todo => todo.id !== action.payload );
        case 'TOGLETODO':    
        // console.log('TOGLETODO');
        
            return initialState.map( todo => {
                
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }
}