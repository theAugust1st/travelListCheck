import React, { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PakingList.js";
import Stats from "./Stats.js";
function App() {
  const [items, setItems] = useState([]);
  function handleOnAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearButton() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed)setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleOnAddItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onChecked={handleChecked}
        onReset={handleClearButton}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
