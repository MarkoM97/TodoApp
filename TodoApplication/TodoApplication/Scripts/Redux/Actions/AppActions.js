const addTodoAction = (text) => {
    return {
        type: 'ADD_TODO',
        text: text
    }
}
const removeTodoAction = (index) => {
    return {
        type: 'REMOVE_TODO',
        index: index
    }
}