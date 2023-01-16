import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [items, setItems] = useState([
    {id: 1, name: "Buy shopping"},
    {id: 2, name: "Clean bathroom"},
    {id: 3, name: "Car's MOT"}
  ])

const [newItem, setNewItem] = useState("")

const handleItemInput = (evt) => {
  setNewItem(evt.target.value)
}

const saveNewItem = (evt) => {
  evt.preventDefault()
  const newItemObj = {id: Date.now(), name: newItem}
  const newListOfItems = [...items, newItemObj]
  setItems(newListOfItems)
  setNewItem("")
}

const addItem = (id) => {
  const newItems = items.filter((item) => item.id !== id)
  setItems(newItems) 
}

  const todoListItems = items.map((item) => {
    return (
    <li key={item.id}>
      {item.name}
    <button onClick={() => {addItem(item.id)}}>Completed</button>
    </li>
    )
  })

  return (
    <div className="App">
      <h1>TODO List - {items.length === 0 ? "Finished" : "Work in process!"}</h1>
      <hr></hr>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-tem">Add a new to do</label>
        <input id="new-item type="type="text" value={newItem} onChange={handleItemInput}></input>
        <input type="submit" value="Save New Item"></input>
      </form>

      <ul>
        {todoListItems}
      </ul>

    </div>
  );
}


export default App;
