import React from "react";
import Todo from "./Todo";

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.todos.map((todo) => (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            todos={this.props.todos}
                            setTodos={this.props.setTodos}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
