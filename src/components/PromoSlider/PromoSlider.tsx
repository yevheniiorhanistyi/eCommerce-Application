import Slider from 'react-slick';
import { Container, Box } from '@mui/material';

import promoImg1 from '../../assets/promo_1.png';
import promoImg2 from '../../assets/promo_2.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PromoSlider.styles';

const PromoSlider = () => {
  const images = [
    { imgSrc: promoImg1, alt: 'Promo code: REALLYGREATESITE' },
    { imgSrc: promoImg2, alt: 'Promo code: RSSCHOOL' },
  ];

  return (
    <Container>
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
            <img style={styles.img} src={item.imgSrc} alt={item.alt} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PromoSlider;
