import { useState } from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import { ZoomOutMap } from '@mui/icons-material';
import { IProductImageProps } from '../../types/types';
import styles from './ProductImage.styles';

const ProductImage: React.FC<IProductImageProps> = ({
  url,
  alt,
}: IProductImageProps) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  const handleClick = () => {};

  return (
    <Card sx={styles.imageWrap}>
      <CardActionArea
        sx={styles.imageWrap}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={handleClick}
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
