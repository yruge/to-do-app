import { useState } from 'react'
import folderIcon from './assets/illustration-data-folder-icon.png'
import './App.css'


export default function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const [checked, setChecked] = useState(false);


  const [open, isOpen] = useState(false);

  function handleInput() {

    if(todo !== "") {
    setList([...list, todo]);
    setTodo("");
    }
  } 

  function deleteTodo(targetIndex) {
    setList((prevList) => (prevList.filter((_, i) => i !== targetIndex)));
  }

  return (
    <>
      <div className="container">
        <div onClick={() => isOpen(true)} className='folder'>
          <img src={folderIcon} alt="folder-icon" />
          <p>To-Do App</p>
        </div>

        {open && (
          <div className="modal-content" onClose={() => isOpen(false)}>
            <button className='close-button' onClick={() => isOpen(false)}>&times;</button>
            <h1>Task List</h1>
            <div className='todo'>
              <div className="todo-action">
              <input type="text" value={todo} placeholder='Enter task' onChange={(e) => setTodo(e.target.value)}  onKeyDown={(e) => {if(e.key === "Enter") {handleInput()}}}/>
              <button className="to-do-button" onClick={handleInput}>Add</button>
              </div>
              
              <ul>
                {list.map((lists, index) => (
                  <label className='list' key={index}>
                    <input className="check" type="checkbox"/>
                    <span className='checkmark'></span>
                    <span className='content'>{lists}</span>
                    <button onClick={() => {deleteTodo(index)}}>Remove</button>
                  </label>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
