import React, {useState} from 'react';
import {TodoInterface} from '../App'

type SetTodo = (arg0: any) => void;

export interface TodoProps {
    setTodo: SetTodo;
    toDos: TodoInterface[];
    toDo: TodoInterface;
}

const Todo = (props: { setTodo: SetTodo; toDos: TodoInterface[]; toDo: TodoInterface; }) => {
    const deleteHandler = () => {
        props.setTodo(props.toDos.filter((todo: TodoInterface) => todo.id !== props.toDo.id));
    }

    const completeHandler = () => {
        props.setTodo(props.toDos.map((item: TodoInterface) => {
            if (item.id === props.toDo.id) {
                return {
                    ...item, completed: !item.completed,
                }
            }

            return item;
        }));
    }

    const [bgCompleteBtn, setBgCompleteBtn] = useState('');

    const styleCompleteBtn = {
        backgroundColor: `${bgCompleteBtn}`
    }

    return (
        <div className={'todo'}>
            <li className={`todo-item ${props.toDo.completed ? 'completed' : ''}`}>{props.toDo.text}</li>
            <button onClick={completeHandler} style={styleCompleteBtn} className={'complete-btn'}
                    onMouseEnter={() => setBgCompleteBtn('rgb(9 160 123)')} onMouseLeave={() => setBgCompleteBtn('')}><i
                className={'fas fa-check'}/></button>
            <button onClick={deleteHandler} className={'trash-btn'}><i className={'fas fa-trash'}/></button>
        </div>
    );
}

export default Todo;