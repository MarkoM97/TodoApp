const mapStateToProps = (state) => {
    return {todos:state.todos}
}

const persistedState = () => {

    if (localStorage.getItem('todoAppState')) {
        const persisted = JSON.parse(localStorage.getItem('todoAppState')).persisted;
        const todos = JSON.parse(localStorage.getItem('todoAppState')).todos;
        if (persisted === todayString) {
            return { persisted: persisted, todos: todos };
        }
    }
    return { persisted: todayString, todos: [] };
};

let store = createStore(appReducer, persistedState());

// Subscriber
// TODO : Add middleware
store.subscribe(() => {
    localStorage.setItem('todoAppState', JSON.stringify(store.getState()));
});


const AppContainerConnection = connect(mapStateToProps)(AppContainer)
