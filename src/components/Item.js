import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart":"";
  const buttonText = inCart ? "Remove from Cart":"Add to Cart"
  
  const handleDarkModeToggle = () => {
    setInCart ((prevInCart) =>!prevInCart);


  };

  

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleDarkModeToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
