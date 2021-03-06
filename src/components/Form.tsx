import React from 'react';
import {TodoInterface} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

type SetFunction = (arg: any) => void;

interface FormInputParams {
    setInputText: SetFunction;
    setToDos: SetFunction;
    toDos: TodoInterface[];
    inputText: string;
    setStatus: SetFunction
}

const Form = ({setInputText, setToDos, toDos, inputText, setStatus}: FormInputParams) => {
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setToDos([...toDos, {text: inputText, completed: false, id: Math.random() * 1000}]);
    }

    const statusHandler = (e: any) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <FontAwesomeIcon icon={faPlusSquare} />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;