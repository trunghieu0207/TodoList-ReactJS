import React from 'react';

const Form = ({setInputText, setToDos, toDos, inputText}) => {
    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, {text: inputText, completed: false, id: Math.random() * 1000}]);
    }
    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;