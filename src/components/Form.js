import React, { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  const handleSelectOnChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={handleSelectOnChange}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <input
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
