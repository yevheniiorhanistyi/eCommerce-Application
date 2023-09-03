import { Button } from '@mui/material';
import {
  clothingCategories,
  clothingSizes,
  brands,
  colors,
} from '../../constants/constants';
import { FilterSidebarProps } from '../../types/types';
import CategoryAccordion from '../CategoryAccordion/CategoryAccordion';
import GenderCategory from '../GenderCategory/GenderCategory';
import PriceRange from '../PriceRange/PriceRange';

import styles from './FilterSidebar.styles';

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  prices,
  selectedGender,
  selectedColors,
  selectedSizes,
  selectedBrands,
  setPrices,
  setSelectedBrands,
  setSelectedGender,
  setSelectedSizes,
  setSelectedColors,
}: FilterSidebarProps) => {
  const resetFilters = () => {
    setPrices([10, 800]);
    setSelectedGender('');
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <>
      <GenderCategory
        isOpen
        genderList={clothingCategories}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />
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
