import React from 'react';
import Todo from './Todo';
import {TodoInterface} from "../App";

type setTodos = (arg0: any) => void;

export interface ToDoListProps {
    filterTodo: TodoInterface[];
    setToDos: setTodos;
    toDos: TodoInterface[];
}

const ToDoList = (props: ToDoListProps) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filterTodo.map((toDo: TodoInterface) =>
                    <Todo toDo={toDo} key={toDo.id} setTodo={props.setToDos} toDos={props.toDos}/>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;