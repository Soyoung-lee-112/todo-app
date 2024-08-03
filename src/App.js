
import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },

  ])
  const nextId = useRef(4);
  // id 값은 렌더링되는 정보가 아니기 때문데 useRef로 감싸준다.
  //이 값은 화면에 보이지도 않고, 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없다.
  // 단순히 새로운 항목을 만들 때 참조되는 값일 뿐!

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    }, [todos]);
  
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
      );
    },
    [todos],
  )
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
     
   </div>
  );
}

export default App;
