import React from 'react';
const TodoList = props =>
    <div>
        {props.taskList.map((task, i) => 
        <div key={task.id}>{task.id} - {task.text}</div> 
        )}
    </div>
export default TodoList;