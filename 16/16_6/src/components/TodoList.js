import React from 'react';
import style from './TodoList.css';

const TodoList = props =>
    <div className={style.TodoList}>
        {props.taskList.map((task, i) => 
        <div className={style.task} key={task.id}>{task.text}</div> 
        )}
    </div>
export default TodoList;