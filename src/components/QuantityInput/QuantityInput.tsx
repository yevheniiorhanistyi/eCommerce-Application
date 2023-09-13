import { useEffect, useState } from 'react';
import { ButtonGroup, IconButton, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { enqueueSnackbar } from 'notistack';
import { useAuth } from '../AuthProvider/AuthProvider';
import getIdCartActive from '../../services/cart/getIdCartActive';
import getQuantityProduct from '../../services/cart/getQuantityProduct';
import styles from './QuantityInput.styles';
import setQuantityProduct from '../../services/cart/setQuantityProduct';

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
  const [idCartActive, setIdCartActive] = useState('');
  const [error, setError] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    const QuantityProduct = await getQuantityProduct(idCart, produstId);
    setIdCartActive(idCart);
    if (QuantityProduct) {
      setValueField(QuantityProduct);
      setQuantity(QuantityProduct);
    } else {
      enqueueSnackbar('Сould not find the quantity of the product!', {
        variant: 'error',
      });
    }
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

  const processQuantity = async (value: number): Promise<boolean> => {
    const isSetQuantity = await setQuantityProduct({
      cartId: idCartActive,
      productId: produstId,
      quantity: value - quantity,
    });
    if (isSetQuantity) {
      setQuantity(value);
      onChange();
      enqueueSnackbar('Quantity set successfully!', {
        variant: 'success',
      });
      return true;
    }
    enqueueSnackbar('Failed to set quantity!', {
      variant: 'error',
    });
    return false;
  };

  const handleIncrement = async () => {
    const value = valueField + 1;
    if (validation(value + 1)) {
      const isSetQuantity = await processQuantity(value);
      if (isSetQuantity) {
        setValueField(value);
        setError(false);
      }
    }
  };

  const handleDecrement = async () => {
    const value = valueField - 1;
    if (validation(value)) {
      const isSetQuantity = await processQuantity(value);
      if (isSetQuantity) {
        setValueField(value);
        setError(false);
      }
    }
  };

  const handleBlur = async () => {
    const value = valueField;
    if (validation(value)) {
      const isSetQuantity = await processQuantity(value);
      if (isSetQuantity) {
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  return (
    <ButtonGroup sx={styles.wraper}>
      <IconButton
        color="primary"
        onClick={handleDecrement}
        disabled={!validation(quantity - 1) || valueField < minQuantity}
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
        disabled={!validation(quantity + 1) || valueField > maxQuantity}
      >
        <AddBoxIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default QuantityInput;
