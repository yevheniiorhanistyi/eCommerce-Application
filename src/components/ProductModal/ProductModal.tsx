import { Box, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';

import { TImageViewContent } from '../ModalProvider/type';
import ProductSlider from '../ProductSlider/ProductSlider';
import ProductImage from '../ProductImage/ProductImage';

import styles from './ProductModal.styles';

type ProductModalProps = {
  open: boolean;
  content: TImageViewContent;
  onClose: () => void;
};

const ProductModal = ({ open, content, onClose }: ProductModalProps) => {
  const renderImageView = (data: TImageViewContent) => {
    if (data.images.length === 1) {
      return (
        <ProductImage
          url={data.images[0].url}
          alt={data.title}
          isButtondDisabled
        />
      );
    }
    return (
      <ProductSlider
        images={data.images}
        title={data.title}
        startIndex={data.index}
        isButtondDisabled
      />
    );
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.box}>
        {renderImageView(content)}
        <IconButton onClick={onClose} sx={styles.buttonClose}>
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ProductModal;
