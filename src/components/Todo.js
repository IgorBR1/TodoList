import React from 'react'

const Todo = ({todo,removeTodo,completeTodo}) => {
  return (
    <div>
    
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content p-2">
        <p>{todo.text}</p>
        <p className='category'> ({todo.category})</p>
            </div>
          <div className="">
            <button className=' btn btn-active ml-2 mr-2' onClick={()=>completeTodo(todo.id)}> Completar</button>
            <button className='btn btn-active' onClick={()=>removeTodo(todo.id)}> X </button>

          </div>

      </div>
    </div>
  )
}

export default Todo