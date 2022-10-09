import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type dataType = {
  id: number;
  name: string;
};

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())   
      .then((data) => console.log(data));
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
