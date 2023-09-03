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

import { CategoryAccordionProps } from '../../types/types';

import styles from './CategoryAccordion.styles';

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({
  isOpen,
  label,
  labelList,
  selectedValues,
  setSelectedValues,
}: CategoryAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    const updatedSelectedValues = selectedValues.includes(id)
      ? selectedValues.filter((val) => val !== id)
      : [...selectedValues, id];

    setSelectedValues(updatedSelectedValues);
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
                  checked={selectedValues.includes(item.label)}
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
