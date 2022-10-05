import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from 'react';

const App = () => {

  const[todos, setTodos] = useState([
    {
      id :1 ,
      text : '리액트 공부하기', 
      checked : true, 
    },
    {
      id : 2,
      text  : 'AWS 공부하기', 
      checked : true,
    }
  ]);

  return( 
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
    )
};


export default App;
