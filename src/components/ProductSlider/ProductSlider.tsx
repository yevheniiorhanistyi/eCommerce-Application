import Carousel from 'react-material-ui-carousel';
import ProductImage from '../ProductImage/ProductImage';
import { IProductSliderProps } from '../../types/types';

import './_product_slider.scss';

const ProductSlider: React.FC<IProductSliderProps> = ({
  images,
  keyProduct,
}: IProductSliderProps) => (
  <Carousel
    autoPlay={false}
    animation="slide"
    navButtonsAlwaysVisible
    cycleNavigation={false}
    navButtonsWrapperProps={{ className: 'nav__wrap' }}
    navButtonsProps={{ className: 'nav__button' }}
    indicatorContainerProps={{ className: 'indicator__container' }}
    indicatorIconButtonProps={{ className: 'indicator__button' }}
    activeIndicatorIconButtonProps={{ className: 'indicator__button-active' }}
    height="100%"
    sx={{ height: '100%' }}
  >
    {images.map((item) => (
      <ProductImage key={item.url} url={item.url} alt={keyProduct} />
    ))}
  </Carousel>
);

export default ProductSlider;
