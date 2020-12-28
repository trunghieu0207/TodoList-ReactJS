import "./App.css";
import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], inputText: "", filter: 'all' };
        this.setTodos = this.setTodos.bind(this);
        this.setInputText = this.setInputText.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    setInputText(inputText) {
        this.setState({
            inputText: inputText,
        });
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

    handleChangeFilter(status) {
        this.setState({
            filter: status,
        });
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevState.todos !== this.state.todos) || (this.state.filter !== prevState.filter)) {
            this.saveToLocalStorage();
        }
    }

    componentDidMount() {
        this.getFromLocalStorage();
    }

    getFromLocalStorage() {
        if (localStorage.getItem('todos') == null) {
            localStorage.setItem('todos', JSON.stringify([]));
        }
        const todos = localStorage.getItem('todos');
        this.setState({
            todos: JSON.parse(todos),
        })
    }

    filterTodosToDisplay() {
        switch (this.state.filter) {
            case "completed":
                return this.state.todos.filter((todo) => todo.completed === true)
            case "uncompleted":
                return this.state.todos.filter((todo) => todo.completed === false);
            default:
                return this.state.todos;
        }
    }

    render() {
        const todos = this.filterTodosToDisplay();
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
                    onChangeFilter={this.handleChangeFilter}
                    filter={this.state.filter}
                    filterHanlder={this.filterTodosToDisplay}
                />
                <ToDoList
                    todos={todos}
                    setTodos={this.setTodos}
                    filterHandler={this.state.filterHandler}
                />
            </div>
        );
    }
}

export default App;
