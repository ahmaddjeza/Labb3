import { render, screen } from '@testing-library/react';
import Cart from '../src/components/Cart';

const cartItems = [
  { id: 1, name: 'Test Product 1', price: '10.00', quantity: 1 },
  { id: 2, name: 'Test Product 2', price: '20.00', quantity: 2 },
];

describe('Cart', () => {
  it('renders cart items', () => {
    render(<Cart items={cartItems} />);

    const item1 = screen.getByText(/test product 1/i);
    const item2 = screen.getByText(/test product 2/i);
    const price1 = screen.getByText(/10.00/i);
    const price2 = screen.getByText(/20.00/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(price1).toBeInTheDocument();
    expect(price2).toBeInTheDocument();
  });
});
