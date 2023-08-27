import React from 'react';
import { useStateValue } from '../context';
import ActionButton from '../components/ActionButton';

function CartPage() {
  const [{ cart }] = useStateValue();

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.product._id}>
            {item.product.name} - ${item.product.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <ActionButton className="checkout-button">Checkout</ActionButton>
    </div>
  );
}

export default CartPage;
