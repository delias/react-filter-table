import React from "react";

export default function FilterButtons({ filter }) {
  function handleClick(e) {
    // console.log(e.target);
    const value = e.target.dataset.sex;
    filter(value);
  }
  return (
    <div>
      <button onClick={handleClick} className="sex-filter" data-sex="M">
        Male
      </button>
      <button onClick={handleClick} className="sex-filter" data-sex="F">
        Female
      </button>
    </div>
  );
}
