import CartItem from './CartItem';

const Cart = ({ items }) => (
  <div>
    {items.map(item => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
);

export default Cart;
