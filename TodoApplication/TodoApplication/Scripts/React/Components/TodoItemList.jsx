class TodoItemList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChecked = this.handleChecked.bind(this);

    }

    handleChecked = (event) => {
        const index = event.index;
        this.props.onTodoChecked({index});
    }

    render() {
        const todoNodes = this.props.todos.map((todo, index) => (<TodoItem key={new Date() + '_' +todo+'_'+index} index={index} text={todo} onTodoChecked={this.handleChecked.bind(null)}>{todo}</TodoItem>))
        return (
            <div className="todo-item-list">
            {todoNodes}
            </div>
        );
    }

}