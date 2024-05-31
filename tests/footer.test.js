import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer />);

    const footerText = screen.getByText(/© 2024 My Webshop/i);

    expect(footerText).toBeInTheDocument();
  });
});
