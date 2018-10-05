class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked = (index, event) => {
        this.props.onTodoChecked({ index: index });
    }

    render() {
        return (
            <div className="item-row" key={new Date() + '_' + this.props.text + '_' + this.props.index} index={this.props.index} >
                <label className="check-flag">
                        <span className="check-flag-label">{this.props.text}</span>
                    <span className="checkbox">
                        <input className="checkbox-native" type="checkbox" onChange={this.handleChecked.bind(null, this.props.index)}  />
                            <span className="checkmark" >
                                <svg viewBox="0 0 24 24">
                                <path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                            </span>
                        </span>
                    </label>
                </div>
        );
    }
}