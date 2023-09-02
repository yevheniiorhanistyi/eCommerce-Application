import { useState } from 'react';
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        updatedValue[index] = Math.min(Math.max(newValue, -1), value[1]);
      } else {
        updatedValue[index] = Math.min(
          Math.max(newValue, value[0]),
          maxPrice,
        );
      }
      setValue(updatedValue);
    }
  };

  const [expanded, setExpanded] = useState<boolean>(true);

  const handleChangeAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChangeAccordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Price</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={styles.contentBox}>
          <Box sx={styles.inputBox}>
            <OutlinedInput
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
              value={value[0]}
              onChange={handleInputChange(0)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Min price',
              }}
            />
            <OutlinedInput
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
              value={value[1]}
              onChange={handleInputChange(1)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Max price',
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
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default PriceRange;
