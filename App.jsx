import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setItems((prev) => [...prev, value]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Item"
      />
      <button type="submit">Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </form>
  );
}
