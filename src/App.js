import React from "react"
import { useState } from "react"
import Logo from "./Components/Logo"
import Form from "./Components/Form"
import PackingList from "./Components/PackingList"
import Stats from "./Components/Stats"
import "./index.css"
const initialItems = []
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
        setItem={setItem}
      />
      <Stats items={items} />
    </div>
  )
}

//Ignore ---- All these Comp Moved into a Indivisual Files

// function Logo() {
//   return <h1>🏝️ FAR AWAY 🧳</h1>
// }

// function Form({ addNewItem }) {
//   const [description, setDescription] = useState("")
//   const [quantity, setQuantity] = useState(1)

//   function submitHandler(e) {
//     e.preventDefault()
//     if (!description) return
//     const newItem = {
//       id: Date.now(),
//       description,
//       quantity,
//       packed: false,
//     }
//     setDescription("")
//     setQuantity(1)

//     //Passing Formdata

//     addNewItem(newItem)
//   }
//   return (
//     <form className="add-form" onSubmit={submitHandler}>
//       <h3>What do you need for your 😍 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => {
//           setQuantity(Number(e.target.value))
//         }}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
//           return <option key={num}>{num}</option>
//         })}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => {
//           setDescription(e.target.value)
//         }}
//       />
//       <button>ADD</button>
//     </form>
//   )
// }

// function PackingList({ items, deleteItem, packedHandler, setItem }) {
//   const [sortBy, setSortby] = useState("input")
//   let sortedItems
//   if (sortBy === "input") sortedItems = items

//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description))

//   if (sortBy === "packed")
//     sortedItems = items.slice().sort((a, b) => a.packed - b.packed)
//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => {
//           return (
//             <Item
//               key={item.id}
//               description={item.description}
//               quantity={item.quantity}
//               packed={item.packed}
//               deleteItem={deleteItem}
//               id={item.id}
//               packedHandler={packedHandler}
//             />
//           )
//         })}
//       </ul>
//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
//           <option value="input">Sort Items by Input</option>
//           <option value="description">Sort Items by description</option>
//           <option value="packed">Sort Items by packed status</option>
//         </select>
//         <button
//           onClick={() => {
//             if (sortedItems.length) {
//               const confirm = window.confirm("Want to Clear your Items ? ")
//               if (confirm) setItem([])
//             } else {
//               alert("No Items ☹ Start Adding your Items into your bag 🎒 ")
//             }
//           }}
//         >
//           Clear List 🚮
//         </button>
//       </div>
//     </div>
//   )
// }

// function Item(item) {
//   console.log(item)
//   return (
//     <li>
//       <input
//         type="checkbox"
//         onClick={() => {
//           item.packedHandler(item.id)
//         }}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button
//         onClick={(e) => {
//           console.log(item.id)
//           item.deleteItem(item.id)
//         }}
//       >
//         ❌
//       </button>
//     </li>
//   )
// }
// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <footer className="stats">
//         <em>Start Adding your Items into your bag , for your new journey ✈</em>
//       </footer>
//     )

//   const numOfItems = items.length
//   const packedItems = items.filter((item) => item.packed === true)
//   const packedPercentage = Math.round((packedItems.length / numOfItems) * 100)
//   return (
//     <footer className="stats">
//       <em>
//         {packedPercentage === 100
//           ? "✈ Ready to Go ... !"
//           : `💼 You have ${numOfItems} items on your list, and you already packed
//         ${packedItems.length} with ${packedPercentage}%`}
//       </em>
//     </footer>
//   )
// }
