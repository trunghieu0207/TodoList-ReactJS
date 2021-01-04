import React, {useState} from 'react';

const Todo = (props) => {
    const deleteHandler = () => {
        props.setTodo(props.toDos.filter((todo) => todo.id !== props.toDo.id));
    }

    const completeHandler = () => {
        props.setTodo(props.toDos.map((item) => {
            if (item.id === props.toDo.id) {
                return {
                    ...item, completed: !item.completed,
                }
            }

            return item;
        }));
    }

    const [bgCompleteBtn,  setBgCompleteBtn] = useState('');

    const styleCompleteBtn = {
        backgroundColor: `${bgCompleteBtn}`
    }

    return (
        <div className={'todo'}>
            <li className={`todo-item ${props.toDo.completed ? 'completed' : ''}`}>{props.toDo.text}</li>
            <button onClick={completeHandler} style={styleCompleteBtn} className={'complete-btn'} onMouseEnter={() => setBgCompleteBtn('rgb(9 160 123)')} onMouseLeave={() => setBgCompleteBtn('')}><i className={'fas fa-check'}/></button>
            <button onClick={deleteHandler} className={'trash-btn'}><i className={'fas fa-trash'} /></button>
        </div>
    );
}

export default Todo;