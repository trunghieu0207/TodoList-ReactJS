import './App.css';
import React, {useState} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [toDos, setToDos] = useState([]);
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                toDos={toDos}
                setToDos={setToDos}
                setInputText={setInputText}/>
            <ToDoList toDos={toDos} setToDos={setToDos}/>
        </div>
    );
}

export default App;
