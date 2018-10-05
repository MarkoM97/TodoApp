class TodoItemModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { open: false, text: '' }
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false, text: '' });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleTodoSubmit() {
        if (this.state.text) {
            const newTodo = this.state.text;
            this.props.onTodoSubmit({ newTodo });
            this.setState({ open: false, text: '' });

        }
    } 

    render() {
        return (

            <div>
                <img className="icon icon-plus js-modal-init" src="/Content/Icons/icon-plus.svg" alt="Add New Item" onClick={this.onOpenModal} style={{}} />
                <ReactModal className="main-modal" overlayClassName="main-modal-overlay" isOpen={this.state.open} onClick={this.onCloseModal} center contentLabel="onRequestClose example" onRequestClose={this.onCloseModal} style={{}} ariaHideApp={false} closeTimeoutMS={350} >
                    <h2 className="todo-create-headline">Create a task today: </h2>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input className="todo-create-input" placeholder="Title..." value={this.state.text} onChange={this.handleTextChange} autoFocus />
                        <button className="todo-create-button" onClick={this.handleTodoSubmit} >Create</button>
                    </form>
                </ReactModal>

            </div>
        );
    }

}