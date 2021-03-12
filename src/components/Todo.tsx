import React, {useState} from 'react';
import {TodoInterface} from '../App'
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";


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

    const completedCss = clsx('todo-item', {
        completed: props.toDo.completed
    })


    const [bgCompleteBtn, setBgCompleteBtn] = useState('');

    const styleCompleteBtn = {
        backgroundColor: `${bgCompleteBtn}`
    }

    return (
        <div className={'todo'}>
            <li className={completedCss}>{props.toDo.text}</li>
            <button onClick={completeHandler} style={styleCompleteBtn} className={'complete-btn'}
                    onMouseEnter={() => setBgCompleteBtn('rgb(9 160 123)')} onMouseLeave={() => setBgCompleteBtn('')}>
                <FontAwesomeIcon icon={faCheck} />

            </button>
            <button onClick={deleteHandler} className={'trash-btn'}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;