import './App.css';
import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export interface TodoInterface {
    completed: boolean;
    text: string;
    id: number;
}

function App() {
    const [inputText, setInputText] = useState('');
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTodo, setFilterTodo] = useState([]);


    useEffect(() => {
        getFromLocalStorage();
    }, []);

    useEffect(() => {
        filterHandler();
        saveToLocalStorage();
    }, [toDos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodo(toDos.filter((todo: TodoInterface) => todo.completed));
                break;
            case 'uncompleted':
                setFilterTodo(toDos.filter((todo: TodoInterface) => !todo.completed));
                break;
            default:
                setFilterTodo(toDos);
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }

    const getFromLocalStorage = () => {
        const dataFromLocal = localStorage.getItem('toDos');
        if (dataFromLocal === null) {
            localStorage.setItem('toDos', JSON.stringify([]))
        } else {
            setToDos(JSON.parse(dataFromLocal));
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                toDos={toDos}
                setToDos={setToDos}
                setInputText={setInputText}
                setStatus={setStatus}/>
            <ToDoList toDos={toDos} setToDos={setToDos} filterTodo={filterTodo}/>
        </div>
    );
}

export default App;
