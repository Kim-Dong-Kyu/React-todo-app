import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';


/*렉 만들기 함수 */ 
function createBulkTodos(){
  const array = [];
  for(let i = 1  ;  i <= 2500; i++){
    array.push({
      id :1, 
      text : `할 일 ${i}`, 
      checked : false,
    });
  }
  return array;
}

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

  const nextId = useRef(4);

  /*일정 추가  event*/ 
  const onInsert = useCallback(
     text =>{
        const todo = {
            id : nextId.current, 
            text, 
            checked :false,
        };
        setTodos(todos.concat(todo));
        nextId.current +=1;
        }, [todos],
  );

  /*삭제 event*/ 
  const onRemove = useCallback(
     id => {
        setTodos(todos.filter(todo => todo.id !== id));
     }, [todos],
  )

  /*토글 이벤트*/ 
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} :todo, 
        ),
      );
    }, [todos], 
  )

  return( 
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove ={onRemove} onToggle ={onToggle}></TodoList>
    </TodoTemplate>
    )
};


export default App;
