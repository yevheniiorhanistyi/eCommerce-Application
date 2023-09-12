import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Container } from '@mui/material';
import { IProduct } from '../../types/productInterfaces';
import { getProductByParams } from '../../services/products/getProductByParams';
import { useCategoryData } from '../../components/CategoryDataProvider/CategoryDataProvider';
import languageCode from '../../utils/languageCode';
import CategoryPopover from '../../components/CategoryPopover/CategoryPopover';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import SortingSelect from '../../components/SortingSelect/SortingSelect';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductList from '../../components/ProductList/ProductList';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';
import AppPagination from '../../components/AppPagination/AppPagination';

import styles from './Catalog.styles';
import BreadcrumbsCategory from '../../components/BreadcrumbsCategory/BreadcrumbsCategory';

const Catalog: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('price asc');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([10, 800]);
  const { key } = useParams<{ key: string }>();
  const categorySlug = key?.split(' ').pop();
  const { categoryData } = useCategoryData();
  const idCategory = categoryData.find(
    (item) => item.slug[languageCode] === categorySlug,
  )?.id;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setAnchorElem(null);
    };
    const fetchData = async () => {
      const [minPrice, maxPrice] = prices;
      setIsLoading(true);
      try {
        getProductByParams(
          offset,
          selectedOption,
          selectedColors,
          selectedSizes,
          selectedBrands,
          searchValue,
          idCategory,
          minPrice,
          maxPrice,
        ).then((response) => {
          setProductList(response.results);
          setTotalElements(response.total);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(true);
      }
    };
    fetchData();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    offset,
    idCategory,
    prices,
    selectedOption,
    selectedColors,
    selectedSizes,
    selectedBrands,
    searchValue,
  ]);

  const filterSize = windowWidth > 940 ? 3 : 12;
  const productListSize = windowWidth > 940 ? 9 : 12;

  return (
    <Box sx={styles.outerBox}>
      <Container component="main" maxWidth="lg">
        <BreadcrumbsCategory paramLink={key} />
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          container
          spacing={2}
        >
          <Grid item xs={filterSize}>
            {windowWidth > 940 ? (
              <Box sx={styles.filterSidebarBox}>
                <FilterSidebar
                  prices={prices}
                  selectedColors={selectedColors}
                  selectedSizes={selectedSizes}
                  selectedBrands={selectedBrands}
                  setPrices={setPrices}
                  setSelectedBrands={setSelectedBrands}
                  setSelectedSizes={setSelectedSizes}
                  setSelectedColors={setSelectedColors}
                />
              </Box>
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <CategoryPopover
                  anchorEl={anchorElem}
                  setAnchorElem={setAnchorElem}
                >
                  <FilterSidebar
                    prices={prices}
                    selectedColors={selectedColors}
                    selectedSizes={selectedSizes}
                    selectedBrands={selectedBrands}
                    setPrices={setPrices}
                    setSelectedBrands={setSelectedBrands}
                    setSelectedSizes={setSelectedSizes}
                    setSelectedColors={setSelectedColors}
                  />
                </CategoryPopover>
              </Grid>
            )}
          </Grid>
          <Grid item xs={productListSize}>
            <Box sx={styles.innerBox}>
              <SearchInput
                value={searchValue}
                setSearchValue={setSearchValue}
              />
              <SortingSelect
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </Box>
            {productList.length === 0 && isLoading === false ? (
              <NoResultsMessage />
            ) : (
              <ProductList isLoading={isLoading} products={productList} />
            )}
            {!isLoading && productList.length > 0 ? (
              <AppPagination
                currentPage={currentPage}
                totalElements={totalElements}
                setCurrentPage={setCurrentPage}
                setOffset={setOffset}
              />
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Catalog;
