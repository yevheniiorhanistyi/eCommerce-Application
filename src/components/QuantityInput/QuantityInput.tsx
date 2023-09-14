import { useState } from 'react';
import { ButtonGroup, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './QuantityInput.styles';

interface IQuantityInputProps {
  startQuantity: number;
  onChange: (changeQuantity: number) => void;
}

const QuantityInput: React.FC<IQuantityInputProps> = ({
  startQuantity,
  onChange,
}: IQuantityInputProps) => {
  const minQuantity = 1;
  const maxQuantity = Infinity;
  const [quantity, setQuantity] = useState(startQuantity);
  const [valueField, setValueField] = useState(startQuantity);
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

  const processQuantity = (value: number) => {
    setQuantity(value);
    onChange(value);
  };

  const handleIncrement = () => {
    const value = valueField + 1;
    if (validation(value + 1)) {
      processQuantity(value);
      setValueField(value);
      setError(false);
    }
  };

  const handleDecrement = () => {
    const value = valueField - 1;
    if (validation(value)) {
      processQuantity(value);
      setValueField(value);
      setError(false);
    }
  };

  const handleBlur = async () => {
    const value = valueField;
    if (validation(value)) {
      processQuantity(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <ButtonGroup sx={styles.wraper}>
      <IconButton
        onClick={handleDecrement}
        disabled={!validation(quantity - 1) || valueField < minQuantity}
      >
        <RemoveIcon />
      </IconButton>
      <TextField
        value={valueField}
        onChange={(e) => setValueField(Number(e.target.value.replace(/\D/g, '')))}
        onBlur={handleBlur}
        error={error}
        sx={styles.textField}
        variant="standard"
      />
      <IconButton
        onClick={handleIncrement}
        disabled={!validation(quantity + 1) || valueField > maxQuantity}
      >
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default QuantityInput;
