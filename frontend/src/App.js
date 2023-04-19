import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
