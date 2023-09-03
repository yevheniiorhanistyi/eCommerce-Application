import { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IGenderCategoryProps } from '../../types/types';

import styles from './GenderCategory.styles';

const GenderCategory: React.FC<IGenderCategoryProps> = ({
  isOpen,
  genderList,
  selectedGender,
  setSelectedGender,
}: IGenderCategoryProps) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);

  const onChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setSelectedGender(id);
  };

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={styles.label}>Gender</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {genderList.map((item) => (
            <FormControlLabel
              key={item.label}
              control={(
                <Radio
                  id={item.id}
                  checked={selectedGender.includes(item.id)}
                  onChange={onChangeGender}
                />
              )}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default GenderCategory;
