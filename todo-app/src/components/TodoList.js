import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo =>(
                <TodoListItem todo={todo} key={todo.id}></TodoListItem>
            ))
            }
        </div>
    );
};

export default TodoList;