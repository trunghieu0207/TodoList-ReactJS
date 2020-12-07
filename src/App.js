import './App.css';
import React, {useState} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState('');
    return (
        <div className="App">
            <header>
                <h1>Ed's Todo List {inputText}</h1>
            </header>
            <Form setInputText={setInputText}/>
            <ToDoList/>
        </div>
    );
}

export default App;
