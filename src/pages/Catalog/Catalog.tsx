import { useState, useEffect, MouseEvent } from 'react';
import { Grid, Box, Container, SelectChangeEvent } from '@mui/material';
import { IProduct } from '../../types/productInterfaces';
import { getProducts } from '../../services/products/getProducts';
import CategoryPopover from '../../components/CategoryPopover/CategoryPopover';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import SortingSelect from '../../components/SortingSelect/SortingSelect';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductList from '../../components/ProductList/ProductList';

import styles from './Catalog.styles';

const Catalog: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('price-asc');

  const onChangeSortingValue = (value: string) => {};

  const handlePopoverClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElem(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorElem(null);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setSelectedOption(value);
    onChangeSortingValue(value);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      handleClosePopover();
    };
    const fetchData = async () => {
      try {
        getProducts().then((res) => {
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
  }, []);

  const searchItems = (items: IProduct[], term: string) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.masterData.current.name['en-US'].toLocaleLowerCase().includes(term));
  };

  const filterSize = windowWidth > 940 ? 3 : 12;
  const productListSize = windowWidth > 940 ? 9 : 12;

  const visibleItems = searchItems(productList, searchValue);

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
                <FilterSidebar />
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
                  onClose={handleClosePopover}
                  handleClick={handlePopoverClick}
                >
                  <FilterSidebar />
                </CategoryPopover>
              </Grid>
            )}
          </Grid>
          <Grid item xs={productListSize}>
            <Box sx={styles.innerBox}>
              <SearchInput
                value={searchValue}
                onChangeValue={handleSearchChange}
              />
              <SortingSelect
                selectedOption={selectedOption}
                onChangeValue={handleSelectChange}
              />
            </Box>
            <ProductList isLoading={isLoading} products={visibleItems} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Catalog;
