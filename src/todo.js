// import logo from './assets/images/logo.svg';
import { useState } from 'react';
import './assets/css/Todo.css';

function Todo() {
  const [ input, setInput ] = useState("")
  const [ todoList, setTodoList ] = useState([])
  const [ isEdit, setIsEdit ] = useState(false)
  const [ editId, setEditId ] = useState(null)

  const addTodo = () => {
    if(input){
      const item = {
        id: todoList.length === 0 ? 1 : todoList[0].id + 1,
        text: input,
        isComplete: false
      }
      setTodoList([item,...todoList])
      setInput("")
    }
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item)=> item.id !== id ))
  }

  const editTodo = (id) => {
    setIsEdit(true)
    setEditId(id)
    setInput(todoList.filter((item)=> item.id === id)[0].text)
  }

  const updateTodo = (id) => {
    setTodoList(todoList.map(
        (item)=>{
          if(item.id === id) return {...item, text: input}
          else return item
        }
      )
    )
    setIsEdit(false)
    setEditId(null)
    setInput("")
  }
  
  const complete = (id)=>{
    setTodoList(todoList.map(
      (item)=>{
        if(item.id === id) return {...item, isComplete: !item.isComplete}
        else return item
      }
    )
  )
  }

  return (
    <div className="todo-app">
      <div className="input-section">
        <input type="text" placeholder="Add item..." onChange={(e)=>{ setInput(e.target.value) }} value={input}></input>
        {
          isEdit ? <div className="input-section">
                      <button onClick={() => updateTodo(editId)}>Update</button>
                      <button onClick={() => {setIsEdit(false); setEditId(null); setInput("");}}>Close</button>
                    </div> 
          : <button onClick={addTodo}>Add</button>
        }
      </div>
      <div className="todos">
        {
          todoList.length > 0 ? <ul className="todo-list">
            {
              todoList.map((item, index)=>{
                return (
                  <li key={index} className="li">
                    <div className='input-section'>
                      <label className="container">
                        <input type="checkbox" onChange={() => complete(item.id)} checked={item.isComplete} />
                        <span className="checkmark"></span>
                      </label>
                      <span className="todo-text" style={{color: item.isComplete && "#555", textDecoration: item.isComplete && "line-through"}}>{item.text}</span>
                    </div>
                    <div className='input-section'>
                      <button className="span-button" onClick={() => deleteTodo(item.id)}>Delete</button>
                      <button className="span-button" onClick={() => editTodo(item.id)}>Edit</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          : <h1 className="not-found"> NOT FOUND</h1>
        }
      </div>
    </div>
  )
}

export default Todo;