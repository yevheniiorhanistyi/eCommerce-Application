import { useState } from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import { ZoomOutMap } from '@mui/icons-material';
import { IProductImageProps } from '../../types/types';
import styles from './ProductImage.styles';
// eslint-disable-next-line import/no-cycle
import { useModal } from '../ModalProvider/ModalProvider';

const ProductImage: React.FC<IProductImageProps> = ({
  url,
  alt,
  isButtondDisabled = false,
  index = 0,
  images,
}: IProductImageProps) => {
  const [hovered, setHovered] = useState(false);
  const modal = useModal();

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  const handleClick = () => {
    modal.openModal('imageView');
    if (images) {
      const contentModal = {
        images,
        title: alt,
        index,
      };
      modal.setContent('imageView', contentModal);
    }
  };

  return (
    <Card sx={styles.imageWrap}>
      <CardActionArea
        sx={styles.imageWrap}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={handleClick}
        disabled={isButtondDisabled}
      >
        <CardMedia sx={styles.image} image={url} title={alt} />
        <ZoomOutMap
          sx={{
            ...styles.hover,
            opacity: hovered ? 0.5 : 0,
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default ProductImage;
