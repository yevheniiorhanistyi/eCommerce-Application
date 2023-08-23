import { enqueueSnackbar } from 'notistack';
import { createCustomer } from '../../../services/customers';
import { ICustomer } from '../../../types/types';
import { ModalContextType } from '../../ModalProvider/type';
import { authenticateClient } from '../../../services/authenticateClient';

const handleSubmit = async (
  customerData: ICustomer,
  modal: ModalContextType,
  onSignInSuccess: () => void,
): Promise<void> => {
  const isCreate = await createCustomer(customerData, modal);
  if (isCreate) {
    enqueueSnackbar('You have successfully registered!', {
      variant: 'success',
    });
    try {
      await authenticateClient({
        email: customerData.email,
        password: customerData.password,
      });
      onSignInSuccess();
    } catch (error) {
      modal.openModal();
      modal.setContent({
        title: 'Sorry',
        text: 'Sing in failed, please try again later',
      });
    }
  } else {
    modal.openModal();
    modal.setContent({
      title: 'Sorry',
      text: 'Registration failed, please try again later',
    });
  }
};

export default handleSubmit;
