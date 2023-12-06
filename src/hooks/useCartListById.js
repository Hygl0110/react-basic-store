import { useState } from "react";

const useCartListById = (inputData) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(id) {
    const newCartItem = inputData[id];
    const { price } = newCartItem;
    const newTotalPrice = totalPrice + price;

    setTotalPrice(Number(newTotalPrice.toFixed(2)));
    setCartItems([...cartItems, newCartItem]);
  }

  function removeToCart(id) {
    const { price } = cartItems[id];
    const newTotalPrice = totalPrice - price;
    const newCartItems = [...cartItems];
    newCartItems.splice(id, 1);
    setTotalPrice(Number(newTotalPrice.toFixed(2)));
    setCartItems(newCartItems);
  }

  return [cartItems, totalPrice, addToCart, removeToCart];
};

export default useCartListById;
