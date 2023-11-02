import { useState } from "react"
import Item from "./Item"
export default function PackingList({
  items,
  deleteItem,
  packedHandler,
  setItem,
}) {
  const [sortBy, setSortby] = useState("input")
  let sortedItems
  if (sortBy === "input") sortedItems = items

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed)
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
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
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort Items by Input</option>
          <option value="description">Sort Items by description</option>
          <option value="packed">Sort Items by packed status</option>
        </select>
        <button
          onClick={() => {
            if (sortedItems.length) {
              const confirm = window.confirm("Want to Clear your Items ? ")
              if (confirm) setItem([])
            } else {
              alert("No Items ☹ Start Adding your Items into your bag 🎒 ")
            }
          }}
        >
          Clear List 🚮
        </button>
      </div>
    </div>
  )
}
