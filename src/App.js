import "./index.css"
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: false },
]
export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}
function Logo() {
  return <h1>🏝️ FAR AWAY 🧳</h1>
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        <option value={1}>1</option>
        <option value={1}>2</option>
        <option value={1}>3</option>
      </select>
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </div>
  )
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return (
            <Item
              key={item.id}
              description={item.description}
              quantity={item.quantity}
              packed={item.packed}
            />
          )
        })}
      </ul>
    </div>
  )
}
function Item(item) {
  // console.log(item)
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>&#x274C;</button>
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
