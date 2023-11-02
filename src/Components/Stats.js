export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding your Items into your bag , for your new journey ✈</em>
      </footer>
    )

  const numOfItems = items.length
  const packedItems = items.filter((item) => item.packed === true)
  const packedPercentage = Math.round((packedItems.length / numOfItems) * 100)
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "✈ Ready to Go ... !"
          : `💼 You have ${numOfItems} items on your list, and you already packed
          ${packedItems.length} with ${packedPercentage}%`}
      </em>
    </footer>
  )
}
