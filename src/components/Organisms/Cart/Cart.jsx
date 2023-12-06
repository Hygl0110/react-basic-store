import Items from "../../molecules/Items/Items";

function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      <h3>Total: ${props.total}</h3>
      <Items {...props} text="dell" />
    </div>
  );
}

export default Cart;
