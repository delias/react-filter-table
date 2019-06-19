import React from "react";

export default function FilterInput({ filterInput }) {
  function handleChange(e) {
    const value = e.target.value;
    // console.log(value);
    filterInput(value);
  }
  return (
    <div>
      <input
        type="text"
        name="text"
        id="textFilter"
        placeholder="Search..."
        onKeyUp={handleChange}
      />
    </div>
  );
}
