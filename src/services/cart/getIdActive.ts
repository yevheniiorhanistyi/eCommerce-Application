import { getIdCart, setIdCart } from '../../utils/idCartUtils';
import getCartActive from './getCartActive';
import createCart from './createCart';
import createMeCart from './createMeCart';

const getIdCartActive = async (isAuthenticated: boolean): Promise<string> => {
  let idCart = '';
  if (isAuthenticated) {
    const dataCartActive = await getCartActive();
    if (dataCartActive) {
      idCart = dataCartActive.id;
    } else {
      const dataNewCart = await createMeCart();
      idCart = dataNewCart ? dataNewCart.id : '';
    }
  } else {
    idCart = getIdCart();
    if (!idCart) {
      const dataNewCart = await createCart();
      idCart = dataNewCart ? dataNewCart.id : '';
      setIdCart(idCart);
    }
  }

  return idCart;
};

export default getIdCartActive;
