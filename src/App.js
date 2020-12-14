import './App.css';
import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTodo, setFilterTodo] = useState([]);

    useEffect(() => {
        console.log('aloo')
    }, [toDos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
               setFilterTodo(toDos.filter((todo) => todo.completed === true));
               break;
            case 'uncompleted':
                setFilterTodo(toDos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilterTodo(toDos);
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
            <ToDoList toDos={toDos} setToDos={setToDos}/>
        </div>
    );
}

export default App;
