export default function Item(item) {
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
