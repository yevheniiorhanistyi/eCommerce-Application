import { IImage } from '../DetailedProduct/services/parsingData';
import ProductImage from '../ProductImage/ProductImage';

interface ProductSliderProps {
  images: IImage[];
  keyProduct: string;
}
// TODO  Implement an image slider for product images
const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  keyProduct,
}: ProductSliderProps) => <ProductImage url={images[0].url} alt={keyProduct} />;

export default ProductSlider;
