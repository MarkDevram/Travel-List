import { useState } from "react"
export default function Form({ addNewItem }) {
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
