import { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ICategoryAccordionProps } from '../../types/types';

import styles from './CategoryAccordion.styles';

export const CategoryAccordion: React.FC<ICategoryAccordionProps> = ({
  isOpen,
  label,
  labelList,
  searchParams,
  propertyToChange,
  setSearchParams,
}: ICategoryAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);
  const property = propertyToChange;
  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    if (Array.isArray(searchParams[property])) {
      const updatedValues = searchParams[property].includes(id)
        ? searchParams[property].filter((val) => val !== id)
        : [...searchParams[property], id];

      const updatedSearchParams = {
        ...searchParams,
        [property]: updatedValues,
      };

      setSearchParams(updatedSearchParams);
    }
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={styles.label}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {labelList.map((item) => (
            <FormControlLabel
              key={item.label}
              control={(
                <Checkbox
                  id={item.label}
                  checked={searchParams[property].includes(item.label)}
                  onChange={handleChangeValue}
                />
              )}
              label={item.label}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
