import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import styles from './App.module.css';
import TodoForm from './components/TodoForm';
import "./App.css";
import Search from './components/Search';
import Filter from './components/Filter';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao acessar o localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(key)) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error("Erro ao inicializar o localStorage", error);
    }
  }, [key, initialValue]);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function App() {
  const initialTodos = [
    { id: 1, text: 'Criar funcionalidade', category: "Trabalho", isCompleted: false },
    { id: 2, text: 'Estudar React', category: "Estudo", isCompleted: false }
  ];
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);

  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("All")
  const [sort,setSort] = useState("Asc");


  const addTodo = (text, category) => {
    const newTodos = [...todos, { id: Math.floor(Math.random() * 10000), text, category, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id)=>{
    const filteredTodos = [...todos];
    filteredTodos.map((todo)=>
    todo.id === id ? (todo.isCompleted =  !todo.isCompleted):todo
  );
  setTodos(filteredTodos);
  }

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div>
        <Header />
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} />
        <div className={styles.main}>
          <div className='todo'>
            <p className='text-center text-2xl'> Conteudo</p>
            


            <div className='todo-list'>
              {todos.filter((todo)=> filter ==="All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted ).filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo }/>
              ))}
            </div>
          </div>
          <TodoForm addTodo={addTodo} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
