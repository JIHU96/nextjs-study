"use client";

import { useState } from "react";
import NavBar from "./components/NavBar";

export default function main() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <h2>NextJS</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
