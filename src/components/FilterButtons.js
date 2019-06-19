import React from "react";

export default function FilterButtons() {
  return (
    <div>
      <button className="sex-filter" data-sex="M">
        Male
      </button>
      <button className="sex-filter" data-sex="F">
        Female
      </button>
    </div>
  );
}
