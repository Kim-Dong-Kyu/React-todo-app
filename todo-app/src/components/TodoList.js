import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo =>(
                <TodoListItem todo={todo} key={todo.id} onRemove ={onRemove}></TodoListItem>
            ))
            }
        </div>
    );
};

export default TodoList;