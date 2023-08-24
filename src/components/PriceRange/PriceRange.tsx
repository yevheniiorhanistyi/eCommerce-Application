import { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  Box,
  OutlinedInput,
  InputAdornment,
  Slider,
  Button,
} from '@mui/material';

import styles from './PriceRange.styles';

const PriceRange: React.FC = () => {
  const minPrice = 10;
  const maxPrice = 800;
  const [value, setValue] = useState<number[]>([minPrice, maxPrice]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      const updatedValue = [...value];
      if (index === 0) {
        updatedValue[index] = Math.min(Math.max(newValue, 0), maxPrice);
      } else {
        updatedValue[index] = Math.min(Math.max(newValue, 0), maxPrice);
      }
      setValue(updatedValue);
    }
  };

  return (
    <FormControl sx={styles.formControl}>
      <Select
        value=""
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" sx={styles.menuItem}>
          Price
        </MenuItem>
        <Box sx={styles.contentBox}>
          <Box sx={styles.inputBox}>
            <OutlinedInput
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
              value={value[0]}
              onChange={handleInputChange(0)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Price',
              }}
            />
            <OutlinedInput
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
              value={value[1]}
              onChange={handleInputChange(1)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Price',
              }}
            />
          </Box>
          <Box sx={styles.sliderBox}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={minPrice}
              max={maxPrice}
            />
          </Box>
          <Button sx={styles.button} variant="contained">
            Save
          </Button>
        </Box>
      </Select>
    </FormControl>
  );
};

export default PriceRange;
