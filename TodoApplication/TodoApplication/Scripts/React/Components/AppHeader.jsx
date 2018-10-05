
class AppHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);

    }

    handleTodoSubmit(event) {
        const newTodo = event.newTodo;
        this.props.onTodoSubmit({ newTodo });
    }

    componentDidMount() {
        axios.get('/Content/Static/Quotes.json').then((response) => {
            var jsonData = response.data.quotes;
            var random = Math.floor((Math.random() * 10) + 1);
            var randomQuote = jsonData[random];

            let pattern = /\//gi;

            this.setState({ quote: randomQuote.quote, cite: randomQuote.cite, date: todayString.replace(pattern,' / ') });
        });
    }

    render() {
        return (
            <header className="header">
                <div className="wrap">
                    <span key="modal-span" className="btn-icon">
                        <TodoItemModal onTodoSubmit={this.handleTodoSubmit.bind(null)} />
                    </span>
                    <div className="header-blockquote">
                        <h1 className="header-quote">{this.state.quote}</h1>
                        <div className="header-cite">- {this.state.cite}</div>
                    </div>
                </div>
                <div className="header-inner">
                    <div className="wrap">
                        <img className="logo" src="/Content/Images/vegait-logo.svg" alt="VegaIT" />
                        <div className="date-wrap">
                            <img className="icon" src="/Content/Icons/icon-calendar.svg" alt="Calendar" />
                            <time>{this.state.date}</time>
                        </div>
                    </div>
                </div>
            </header>

        );
    }


}