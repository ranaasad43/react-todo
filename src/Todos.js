import React from 'react';

const Todos = ({todos,deltodo}) =>{
  const todolist = todos.length ? (
    todos.map(todo =>{
      return (
        <ul className="list-group" key={todo.id}>
          <li onClick={()=>{deltodo(todo.id)}} className="list-group-item">{todo.content}</li>
        </ul>
      )
    })
  ) : (
    <p className="center">You dont have any todos</p>
  ) 
  return (
    <div className="todos">
      {todolist}
    </div>
  )
}

export default Todos;