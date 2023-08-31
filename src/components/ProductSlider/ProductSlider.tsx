import { IProductSliderProps } from '../../types/types';
import ProductImage from '../ProductImage/ProductImage';

// TODO  Implement an image slider for product images
const ProductSlider: React.FC<IProductSliderProps> = ({
  images,
  keyProduct,
}: IProductSliderProps) => <ProductImage url={images[0].url} alt={keyProduct} />;

export default ProductSlider;
