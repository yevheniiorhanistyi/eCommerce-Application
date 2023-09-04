import { render, screen } from '@testing-library/react';
import PriceRange from '../components/PriceRange/PriceRange';

type PriceRangeProps = {
  prices: number[];
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

const mockSetPrices = jest.fn();

describe('<PriceRange />', () => {
  it('should display a blank login form, with remember me checked by default', async () => {
    const prices: PriceRangeProps['prices'] = [50, 100];

    render(<PriceRange prices={prices} setPrices={mockSetPrices} />);

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Min price')).toBeInTheDocument();
    expect(screen.getByLabelText('Max price')).toBeInTheDocument();
  });
});
