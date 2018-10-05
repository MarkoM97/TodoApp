const appReducer = (state = { persisted: todayString, todos: [] }, action) => {
    let todos = state.todos.slice();
    let persisted = state.persisted;
    switch (action.type) {
        case 'ADD_TODO':
            todos.splice(0,0,action.text);
            break;
        case 'REMOVE_TODO':
            todos.splice(action.index, 1);
            break;
    }
    const newState = { persisted: persisted, todos: todos };
    return newState;
}