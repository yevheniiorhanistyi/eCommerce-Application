import { useState, useEffect } from 'react';
import { Grid, Box, Container } from '@mui/material';
import { IProduct } from '../../types/productInterfaces';
import { getProductByParams } from '../../services/products/getProductByParams';
import CategoryPopover from '../../components/CategoryPopover/CategoryPopover';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import SortingSelect from '../../components/SortingSelect/SortingSelect';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductList from '../../components/ProductList/ProductList';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';

import styles from './Catalog.styles';

const Catalog: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('price asc');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([10, 800]);

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
          selectedOption,
          selectedColors,
          selectedSizes,
          selectedBrands,
          selectedGender,
          minPrice,
          maxPrice,
        ).then((res) => {
          setProductList(res);
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
    selectedGender,
    prices,
    selectedOption,
    selectedColors,
    selectedSizes,
    selectedBrands,
  ]);

  const filterSize = windowWidth > 940 ? 3 : 12;
  const productListSize = windowWidth > 940 ? 9 : 12;

  return (
    <Box sx={styles.outerBox}>
      <Container component="main" maxWidth="lg">
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
                  selectedGender={selectedGender}
                  selectedColors={selectedColors}
                  selectedSizes={selectedSizes}
                  selectedBrands={selectedBrands}
                  setPrices={setPrices}
                  setSelectedBrands={setSelectedBrands}
                  setSelectedSizes={setSelectedSizes}
                  setSelectedColors={setSelectedColors}
                  setSelectedGender={setSelectedGender}
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
                    selectedGender={selectedGender}
                    selectedColors={selectedColors}
                    selectedSizes={selectedSizes}
                    selectedBrands={selectedBrands}
                    setPrices={setPrices}
                    setSelectedBrands={setSelectedBrands}
                    setSelectedSizes={setSelectedSizes}
                    setSelectedColors={setSelectedColors}
                    setSelectedGender={setSelectedGender}
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
            {productList.length === 0 ? (
              <NoResultsMessage />
            ) : (
              <ProductList isLoading={isLoading} products={productList} />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Catalog;
