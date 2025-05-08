import React, { useEffect, useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PakingList.js"; // Corrected import
import Stats from "./Stats.js";
function App() {
  const [items, setItems] = useState([]);
  function handleOnAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleOnAddItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onChecked={handleChecked}
      />
      <Stats />
    </div>
  );
}

export default App;
