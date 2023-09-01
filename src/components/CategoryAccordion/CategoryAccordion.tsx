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
}: CategoryAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={styles.label}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {labelList.map((item) => (
            <FormControlLabel key={item} control={<Checkbox />} label={item} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
