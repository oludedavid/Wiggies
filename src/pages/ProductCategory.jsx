import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function ProductCategory(props) {
  let category = props.category;

  return (
    <li>
      <button onClick={() => props.onSelect(category.name)}>
        <img
          className="side-menu-icon"
          src={category.icon}
          alt={category.name}
        />
        {category.name}
      </button>
    </li>
  );
}
