import React from 'react';
import Todo from './Todo';

const ToDoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filterTodo.map((toDo) =>
                    <Todo toDo={toDo} key={toDo.id} setTodo={props.setToDos} toDos={props.toDos}/>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;