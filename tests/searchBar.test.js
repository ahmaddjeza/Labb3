import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';

describe('SearchBar', () => {
  it('calls onSearch when input value changes', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(input, { target: { value: 'Test' } });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('Test');
  });
});
