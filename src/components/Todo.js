import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.completedHandler = this.completedHandler.bind(this);
    }

    deleteHandler() {
        this.props.setTodos(
            this.props.todos.filter((todo) => todo.id !== this.props.todo.id)
        );
    }

    completedHandler() {
        this.props.setTodos(
            this.props.todos.map((item) => {
                if (item.id === this.props.todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }

    render() {
        return (
            <div className={"todo"}>
                <li
                    className={`todo-item ${
                        this.props.todo.completed ? "completed" : ""
                    }`}
                >
                    {this.props.todo.text}
                </li>
                <button className={"complete-btn"} onClick={this.completedHandler}>
                    <i className={"fas fa-check"}/>
                </button>
                <button className={"trash-btn"} onClick={this.deleteHandler}>
                    <i className={"fas fa-trash"}/>
                </button>
            </div>
        );
    }
}
