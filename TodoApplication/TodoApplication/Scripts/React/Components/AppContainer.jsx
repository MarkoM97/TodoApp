

const { connect, Provider } = ReactRedux; // import {connect, Provider} from 'react-redux';
const { createStore, compose } = Redux; // import {createStore} from 'redux';
const { map } = _; // import {map} from 'lodash'
const { Component } = React; // import {Component} from 'react';
const { Modal } = ReactModal;
//const { Axios } = Axios;

class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);

    }

    removeTodo(event) {
        setTimeout(() => {
            this.props.dispatch(removeTodoAction(event.index))
        }, 1200);
    }

    addTodo(event) {
        this.props.dispatch(addTodoAction(event.newTodo));
    }

    render() {
        return (
            <div className="page-wrap">
                <AppHeader onTodoSubmit={this.addTodo.bind(null)} />
                {/* list of todo items */}
                <main className="main">
                    <div id="todos-list" className="wrap">
                        <TodoItemList todos={this.props.todos} onTodoChecked={this.removeTodo.bind(null)} />
                    </div>
                </main>
                {/* footer */}
                <footer className="footer">
                    <div className="wrap">
                        <span className="copy">© 2018 Vega IT Sourcing</span>
                    </div>
                </footer>
            </div>
            );
    }
}