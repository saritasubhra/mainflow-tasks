import React, { useState } from "react";
import Form from "./components/form";
import List from "./components/List";

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
      <List items={items} />
    </div>
  );
}

export default App;
