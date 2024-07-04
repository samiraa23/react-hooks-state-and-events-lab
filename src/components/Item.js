import React, { useState } from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handCartToggle = () => {
    setIsInCart(!isInCart);
  };
  return (
    <li className={isInCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handCartToggle}className="add">{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}


export default Item;
