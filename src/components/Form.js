import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerInputText(event) {
        this.props.setInputText(event.target.value);
    }

    submitHandler(event) {
        event.preventDefault();
        let todos = this.props.todos;
        this.props.setTodos([
            ...todos,
            {
                text: this.props.inputText,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
    }

    statusHandler(event) {
        const status = event.target.value;
        this.props.setStatus(status);
    }


    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="todo-input"
                        onChange={(event) => this.handlerInputText(event)}
                    />
                    <button
                        className="todo-button"
                        type="submit"
                        onClick={(event) => this.submitHandler(event)}
                    >
                        <i className="fas fa-plus-square"/>
                    </button>
                    <div className="select">
                        <select name="todos" onClick={(event) => this.statusHandler(event)} className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}
