import { useEffect, useState } from 'react';
import { ButtonGroup, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { enqueueSnackbar } from 'notistack';

import { useAuth } from '../AuthProvider/AuthProvider';
import setQuantityProduct from '../../services/cart/setQuantityProduct';
import getIdCartActive from '../../services/cart/getIdCartActive';

import styles from './QuantityInput.styles';

interface IQuantityInputProps {
  startQuantity: number;
  produstId: string;
  onChange: () => void;
}

const QuantityInput: React.FC<IQuantityInputProps> = ({
  startQuantity,
  produstId,
  onChange,
}: IQuantityInputProps) => {
  const [quantity, setQuantity] = useState(startQuantity);
  const [valueField, setValueField] = useState(startQuantity);
  const [error, setError] = useState(false);
  const [idCartActive, setIdCartActive] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const { isAuthenticated } = useAuth();
  const minQuantity = 1;
  const maxQuantity = Infinity;

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    setIdCartActive(idCart);
  };

  const validation = (value: number): boolean => {
    if (value < minQuantity) {
      return false;
    }
    if (value > maxQuantity) {
      return false;
    }
    return true;
  };

  const processQuantity = async (value: number) => {
    const isSetQuantity = await setQuantityProduct({
      cartId: idCartActive,
      productId: produstId,
      quantity: value - quantity,
    });
    if (isSetQuantity) {
      setQuantity(value);
      setError(false);
      enqueueSnackbar('Quantity set successfully!', {
        variant: 'success',
      });
      onChange();
    } else {
      enqueueSnackbar('Failed to set quantity!', {
        variant: 'error',
      });
      setValueField(quantity);
    }
  };

  const debouncedProcessQuantity = (value: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(async () => {
      processQuantity(value);
      setTimeoutId(null);
    }, 500);

    setTimeoutId(id);
  };

  const handleIncrement = () => {
    const value = valueField + 1;
    if (validation(value + 1)) {
      setValueField(value);
      debouncedProcessQuantity(value);
    }
  };

  const handleDecrement = () => {
    const value = valueField - 1;
    if (validation(value)) {
      setValueField(value);
      debouncedProcessQuantity(value);
    }
  };

  const handleBlur = () => {
    const value = valueField;
    if (validation(value)) {
      processQuantity(value);
    } else {
      setError(true);
      setValueField(quantity);
      setError(false);
    }
  };

  return (
    <ButtonGroup sx={styles.wraper}>
      <IconButton
        onClick={handleDecrement}
        disabled={!validation(quantity - 1) || valueField < minQuantity}
        sx={styles.button}
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
        sx={styles.button}
      >
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default QuantityInput;
