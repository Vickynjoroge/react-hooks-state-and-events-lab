import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleCartToggle (e){
    setIsInCart(!isInCart)
  };
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const itemClass = isInCart ? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
