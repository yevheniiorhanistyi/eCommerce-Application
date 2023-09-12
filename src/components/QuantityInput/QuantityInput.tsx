import { useState } from 'react';
import { ButtonGroup, IconButton, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import styles from './QuantityInput.styles';

interface IQuantityInputProps {
  produstId: string;
  onChange: () => void;
}
const QuantityInput: React.FC<IQuantityInputProps> = ({
  produstId,
  onChange,
}: IQuantityInputProps) => {
  const minQuantity = 1;
  const maxQuantity = Infinity;
  const [quantity, setQuantity] = useState(minQuantity);
  const [valueField, setValueField] = useState(minQuantity);
  const [error, setError] = useState(false);

  const validation = (value: number): boolean => {
    if (value < minQuantity) {
      return false;
    }
    if (value > maxQuantity) {
      return false;
    }
    return true;
  };

  const handleIncrement = () => {
    const value = valueField + 1;
    if (validation(value + 1)) {
      setQuantity(value);
      setValueField(value);
    }
  };

  const handleDecrement = () => {
    const value = valueField - 1;
    if (validation(value)) {
      setQuantity(value);
      setValueField(value);
    }
  };

  const handleBlur = () => {
    const value = valueField;
    if (validation(value)) {
      setQuantity(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <ButtonGroup sx={styles.wraper}>
      <IconButton
        color="primary"
        onClick={handleDecrement}
        disabled={!validation(quantity - 1)}
      >
        <IndeterminateCheckBoxIcon />
      </IconButton>
      <TextField
        label="Quantity"
        value={valueField}
        onChange={(e) => setValueField(Number(e.target.value.replace(/\D/g, '')))}
        onBlur={handleBlur}
        error={error}
        sx={styles.textField}
      />
      <IconButton
        color="primary"
        onClick={handleIncrement}
        disabled={!validation(quantity + 1)}
      >
        <AddBoxIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default QuantityInput;
