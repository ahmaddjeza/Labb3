const CartItem = ({ item }) => (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </div>
  );
  
  export default CartItem;
  