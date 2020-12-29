// @ts-ignore
import React, {ChangeEvent} from 'react';
import Todo from '../App';

const Form = ({setInputText, setToDos, toDos, inputText, setStatus}: {setInputText: any, setToDos: any, toDos: any, inputText: string, setStatus: any}) => {
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
                <i className="fas fa-plus-square"></i>
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