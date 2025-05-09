import React, { useState } from "react";

function PakingList({ items, onDelete, onChecked,onReset }) {
  const [sortBy, setSortBy] = useState("input");
  function handleSelect(e) {
    setSortBy(e.target.value);
  }
  let sortedList;
  if (sortBy === "input") sortedList = items;
  if (sortBy === "description") {
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => {
          return (
            <Item
              key={item.id}
              onDelete={onDelete}
              item={item}
              onChecked={onChecked}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSelect}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed </option>
        </select>
        <button className="btn" onClick={()=>onReset()}>
          Clear list
        </button>
      </div>
    </div>
  );
}
function Item({ item, onDelete, onChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {""}
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
export default PakingList;
