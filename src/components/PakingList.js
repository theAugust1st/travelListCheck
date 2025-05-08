import React from "react";

function PakingList({ items, onDelete, onChecked}) {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item key={item.id} onDelete={onDelete} item={item} onChecked={onChecked} />;
        })}
      </ul>
    </div>
  );
}
function Item({ item, onDelete,onChecked }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={()=>onChecked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {""}
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
export default PakingList;
