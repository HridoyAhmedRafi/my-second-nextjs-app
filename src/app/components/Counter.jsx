"use client";
import { useState } from "react";

const Counter = () => {
  console.log("counter compoenent rendered");

  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="text-4xl">Counter : {count}</h1>
      <button
        onClick={handleCounter}
        className="bg-fuchsia-600 px-3 py-1 rounded-2xl cursor-pointer"
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
