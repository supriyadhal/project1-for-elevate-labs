import React, { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(text || "react");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 justify-center"
    >
      <input
        type="text"
        placeholder="Search GitHub repositories..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}

