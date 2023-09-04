import { render, screen, fireEvent } from '@testing-library/react';
import PriceRange from '../components/PriceRange/PriceRange';

type PriceRangeProps = {
  prices: number[];
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

const mockSetPrices = jest.fn();
const prices: PriceRangeProps['prices'] = [50, 100];

describe('<PriceRange />', () => {
  it('should display a blank login form, with remember me checked by default', async () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Min price')).toBeInTheDocument();
    expect(screen.getByLabelText('Max price')).toBeInTheDocument();
    expect(screen.getByDisplayValue('50')).toBeInTheDocument();
    expect(screen.getByDisplayValue('100')).toBeInTheDocument();
  });

  it('should call setPrices when min price input changes', () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const minPriceInput = screen.getByLabelText('Min price');
    fireEvent.change(minPriceInput, { target: { value: '75' } });

    expect(mockSetPrices).toHaveBeenCalledWith([75, 100]);
  });

  it('should call setPrices when max price input changes', () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const maxPriceInput = screen.getByLabelText('Max price');
    fireEvent.change(maxPriceInput, { target: { value: '150' } });

    expect(mockSetPrices).toHaveBeenCalledWith([50, 150]);
  });

  it('should update prices when min price input changes', () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const minPriceInput = screen.getByLabelText('Min price');
    fireEvent.change(minPriceInput, { target: { value: '75' } });

    expect(mockSetPrices).toHaveBeenCalledWith([75, 100]);
  });

  it('should update prices when max price input changes', () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const maxPriceInput = screen.getByLabelText('Max price');
    fireEvent.change(maxPriceInput, { target: { value: '150' } });

    expect(mockSetPrices).toHaveBeenCalledWith([50, 150]);
  });

  it('should update prices when min price is greater than max price', async () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const minPriceInput = screen.getByLabelText('Min price');
    const maxPriceInput = screen.getByLabelText('Max price');

    fireEvent.change(minPriceInput, { target: { value: '150' } });
    fireEvent.change(maxPriceInput, { target: { value: '50' } });

    expect(mockSetPrices).toHaveBeenCalledWith([50, 150]);
  });

  it('should toggle the accordion when clicked', () => {
    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    const accordionSummary = screen.getByText('Price');
    const initialExpandedValue = true;

    expect(initialExpandedValue).toBe(true);

    fireEvent.click(accordionSummary);

    expect(mockSetPrices).toHaveBeenCalledWith([50, 150]);
  });
});
