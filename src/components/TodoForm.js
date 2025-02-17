
import "../App.css"
import { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("");
  const [category,setCategory] = useState("");
  
  
const handleSubmit = (e) =>{
  e.preventDefault();
  if(!value|| !category ) return;
  addTodo(value,category);
  setValue("");
  setCategory("");
}

  return (

      <div className='justify-center flex items-center align-middle'>

    <div className='todo-form'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='digite o titulo' onChange={(e) => setValue(e.target.value)} className=''/>
            <select  onChange={(e) => setCategory(e.target.value)} className='' >
                <option value="" >Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>

            </select>
            <button type='submit' className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 '> Criar tarefa</button>
        </form>
    </div>
      </div>
  )
}

export default TodoForm