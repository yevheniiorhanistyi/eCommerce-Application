import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { sortingOptions } from '../../constants/constants';
import { ISortingSelect } from '../../types/types';

import styles from './SortingSelect.styles';

interface ISortingSelectProps extends ISortingSelect {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const SortingSelect: React.FC<ISortingSelectProps> = ({
  selectedOption,
  setSelectedOption,
}: ISortingSelectProps) => {
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel id="simple-sorting-label">Sort By</InputLabel>
      <Select
        labelId="simple-sorting-label"
        value={selectedOption}
        onChange={handleSelectChange}
        label="Sort By"
      >
        {sortingOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortingSelect;
