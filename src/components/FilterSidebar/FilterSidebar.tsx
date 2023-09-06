import { Button } from '@mui/material';
import { clothingSizes, brands, colors } from '../../constants/constants';
import { FilterSidebarProps } from '../../types/types';
import CategoryAccordion from '../CategoryAccordion/CategoryAccordion';
import PriceRange from '../PriceRange/PriceRange';

import styles from './FilterSidebar.styles';

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  prices,
  selectedColors,
  selectedSizes,
  selectedBrands,
  setPrices,
  setSelectedBrands,
  setSelectedSizes,
  setSelectedColors,
}: FilterSidebarProps) => {
  const resetFilters = () => {
    setPrices([10, 800]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <>
      <PriceRange prices={prices} setPrices={setPrices} />
      <CategoryAccordion
        isOpen={false}
        label="Brand"
        labelList={brands}
        selectedValues={selectedBrands}
        setSelectedValues={setSelectedBrands}
      />
      <CategoryAccordion
        isOpen={false}
        label="Size"
        labelList={clothingSizes}
        selectedValues={selectedSizes}
        setSelectedValues={setSelectedSizes}
      />
      <CategoryAccordion
        label="Color"
        labelList={colors}
        isOpen={false}
        selectedValues={selectedColors}
        setSelectedValues={setSelectedColors}
      />
      <Button
        onClick={resetFilters}
        variant="contained"
        sx={styles.buttonReset}
      >
        Reset Filters
      </Button>
    </>
  );
};
export default FilterSidebar;
