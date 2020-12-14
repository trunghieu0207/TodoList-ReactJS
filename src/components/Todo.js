import React  from 'react';

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
    return (
        <div className={'todo'}>
            <li className={`todo-item ${props.toDo.completed ? 'completed' : ''}`}>{props.toDo.text}</li>
            <button onClick={completeHandler} className={'complete-btn'}><i className={'fas fa-check'}></i></button>
            <button onClick={deleteHandler} className={'trash-btn'}><i className={'fas fa-trash'}></i></button>
        </div>
    );
}

export default Todo;