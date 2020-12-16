import "./App.css";
import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], inputText: "", filterHandler: [], status: "all" };
        this.setTodos = this.setTodos.bind(this);
        this.setInputText = this.setInputText.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.setFilterTodos = this.setFilterTodos.bind(this);
    }

    setInputText(inputText) {
        this.setState({
            inputText: inputText,
        });
    }

    componentDidMount() {
        this.filterHandler();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.state.status || this.state.todos.length !== prevState.todos.length) {
            this.filterHandler();
        }
    }

    setTodos(value) {
        this.setState({
            todos: value,
        });
    }

    setFilterTodos(todos) {
        this.setState({
            filterHandler: todos,
        });
    }

    setStatus(status) {
        this.setState({
            status: status,
        });
    }

    filterHandler() {
        switch (this.state.status) {
            case "completed":
                this.setFilterTodos(
                    this.state.todos.filter((todo) => todo.completed === true)
                );
                break;
            case "uncompleted":
                this.setFilterTodos(
                    this.state.todos.filter((todo) => todo.completed === false)
                );
                break;
            default:
                this.setFilterTodos(this.state.todos);
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Todo List</h1>
                </header>
                <Form
                    setTodos={this.setTodos}
                    setInputText={this.setInputText}
                    todos={this.state.todos}
                    inputText={this.state.inputText}
                    setStatus={this.setStatus}
                    filterHanlder={this.filterHandler}
                />
                <ToDoList
                    todos={this.state.todos}
                    setTodos={this.setFilterTodos}
                    filterHandler={this.state.filterHandler}
                />
            </div>
        );
    }
}

export default App;
