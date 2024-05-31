import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Header', () => {
  it('renders navigation links', () => {
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    }));

    render(<Header />);

    const homeLink = screen.getByText(/home/i);
    const cartLink = screen.getByText(/cart/i);
    const loginLink = screen.getByText(/login/i);

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
