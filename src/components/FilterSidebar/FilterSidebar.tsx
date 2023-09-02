import { Button } from '@mui/material';
import {
  clothingCategories,
  clothingSizes,
  brands,
  colors,
} from '../../constants/constants';
import CategoryAccordion from '../CategoryAccordion/CategoryAccordion';
import PriceRange from '../PriceRange/PriceRange';

import styles from './FilterSidebar.styles';

const FilterSidebar: React.FC = () => (
  <>
    <CategoryAccordion isOpen label="Gender" labelList={clothingCategories} />
    <PriceRange />
    <CategoryAccordion isOpen={false} label="Size" labelList={clothingSizes} />
    <CategoryAccordion isOpen={false} label="Brand" labelList={brands} />
    <CategoryAccordion isOpen={false} label="Color" labelList={colors} />
    <Button variant="contained" sx={styles.buttonSearch}>
      Search
    </Button>
    <Button variant="contained" sx={styles.buttonReset}>
      Reset Filters
    </Button>
  </>
);

export default FilterSidebar;
