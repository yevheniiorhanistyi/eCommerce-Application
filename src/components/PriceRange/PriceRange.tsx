import { useState } from 'react';
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PriceRangeProps } from '../../types/types';

import styles from './PriceRange.styles';

const PriceRange: React.FC<PriceRangeProps> = ({
  prices,
  setPrices,
}: PriceRangeProps) => {
  const minPrice = prices[0];
  const maxPrice = prices[1];

  const onChangeInputsPrice = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      let [min, max] = [...prices];

      if (index === 0) {
        min = newValue;
      } else {
        max = newValue;
      }
      const updatedValue = [min, max];
      if (min > max) {
        [updatedValue[0], updatedValue[1]] = [
          updatedValue[1],
          updatedValue[0],
        ];
      }
      setPrices(updatedValue);
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
              endAdornment={<InputAdornment position="end">€</InputAdornment>}
              value={minPrice}
              onChange={onChangeInputsPrice(0)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Min price',
              }}
            />
            <OutlinedInput
              endAdornment={<InputAdornment position="end">€</InputAdornment>}
              value={maxPrice}
              onChange={onChangeInputsPrice(1)}
              sx={styles.outlinedInput}
              inputProps={{
                'aria-label': 'Max price',
              }}
            />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default PriceRange;
