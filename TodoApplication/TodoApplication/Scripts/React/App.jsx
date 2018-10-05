class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AppContainerConnection />
            </Provider>
        );
    }
};
ReactDOM.render(
    <App/>, document.getElementById('app')
);

                                    
if (window.devToolsExtension) {
window.devToolsExtension.open();}