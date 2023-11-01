import React from "react"
import { useState } from "react"
import "./index.css"
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: false },
]
export default function App() {
  const [items, setItem] = useState(initialItems)

  function addNewItem(newItem) {
    setItem((prevItems) => {
      return [...prevItems, newItem]
    })
  }
  function deleteItem(id) {
    setItem((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id))
  }

  function packedHandler(id) {
    console.log("Inside Packed Handler")
    setItem((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item
      })
    )
  }
  return (
    <div>
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        packedHandler={packedHandler}
      />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🏝️ FAR AWAY 🧳</h1>
}

function Form({ addNewItem }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function submitHandler(e) {
    e.preventDefault()
    if (!description) return
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    }
    setDescription("")
    setQuantity(1)

    //Passing Formdata

    addNewItem(newItem)
  }
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value))
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option key={num}>{num}</option>
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <button>ADD</button>
    </form>
  )
}

function PackingList({ items, deleteItem, packedHandler }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              description={item.description}
              quantity={item.quantity}
              packed={item.packed}
              deleteItem={deleteItem}
              id={item.id}
              packedHandler={packedHandler}
            />
          )
        })}
      </ul>
    </div>
  )
}

function Item(item) {
  console.log(item)
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => {
          item.packedHandler(item.id)
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={(e) => {
          console.log(item.id)
          item.deleteItem(item.id)
        }}
      >
        ❌
      </button>
    </li>
  )
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}
