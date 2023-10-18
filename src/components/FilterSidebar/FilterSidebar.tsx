import { Button } from '@mui/material';
import {
  initialSearchParams,
  clothingSizes,
  brands,
  colors,
} from '../../constants/constants';
import { ICommonProps } from '../../types/types';
import { useCategoryData } from '../CategoryDataProvider/CategoryDataProvider';
import { CategoryAccordion } from '../CategoryAccordion/CategoryAccordion';
import { PriceRange } from '../PriceRange/PriceRange';
import CategoryMenu from '../CategoryMenu/CategoryMenu';

import styles from './FilterSidebar.styles';

export const FilterSidebar: React.FC<ICommonProps> = ({
  searchParams,
  setSearchParams,
}: ICommonProps) => {
  const { categoryData } = useCategoryData();
  const resetFilters = () => {
    setSearchParams({ ...initialSearchParams });
  };

  return (
    <>
      <CategoryMenu categoryData={categoryData} />
      <PriceRange
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <CategoryAccordion
        isOpen={false}
        label="Brand"
        labelList={brands}
        propertyToChange="brands"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <CategoryAccordion
        isOpen={false}
        label="Size"
        labelList={clothingSizes}
        propertyToChange="sizes"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <CategoryAccordion
        label="Color"
        labelList={colors}
        isOpen={false}
        propertyToChange="colors"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
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
