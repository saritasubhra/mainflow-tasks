import React, { useState } from "react";
import Form from "./components/form";

function App() {
  const [items, setItems] = useState([
    { name: "grocery", price: "2500" },
    { name: "shoes", price: "5000" },
  ]);
  console.log(items);

  return (
    <div className="w-80 space-y-10 pt-10 text-center">
      <h1 className="font-bold text-3xl">Expense Tracker</h1>
      <Form setItems={setItems} />
      <ul className="space-y-4 p-2">
        {items.map((item) => (
          <li
            key={item.itemName}
            className="capitalize flex justify-between border-b-2 "
          >
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
