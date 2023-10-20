import Slider from 'react-slick';
import { Container, Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import promoImg1 from '../../assets/promo_1.png';
import promoImg2 from '../../assets/promo_2.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import styles from './PromoSlider.styles';

export const PromoSlider: React.FC = () => {
  const images = [
    { imgSrc: promoImg1, alt: 'Promo code: REALLYGREATESITE' },
    { imgSrc: promoImg2, alt: 'Promo code: RSSCHOOL' },
  ];

  return (
    <Container>
      <Box sx={styles.sliderWrapper}>
        <Slider
          dots
          infinite
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={6000}
          arrows={false}
        >
          {images.map((item) => (
            <Box sx={styles.imgWrapper} key={item.alt}>
              <LazyLoadImage
                alt={item.alt}
                src={item.imgSrc}
                effect="opacity"
                style={styles.img}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default PromoSlider;
