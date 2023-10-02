import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Container } from '@mui/material';
import { IProduct } from '../../types/productInterfaces';
import { ISearchParams } from '../../types/types';
import { getProductByParams } from '../../services/products/getProductByParams';
import { useCategoryData } from '../../components/CategoryDataProvider/CategoryDataProvider';
import {
  initialSearchParams,
  CATALOG_PAGE_WINDOW_BREAKPOINT,
} from '../../constants/constants';
import languageCode from '../../utils/languageCode';
import {
  AppPagination,
  FilterSidebar,
  SortingSelect,
  SearchInput,
  CategoryPopover,
  ProductList,
  NoResultsMessage,
  BreadcrumbsCategory,
} from '../../components';

import styles from './Catalog.styles';

const Catalog: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useState<ISearchParams>(initialSearchParams);
  const [totalElements, setTotalElements] = useState(0);
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { key } = useParams<{ key: string }>();
  const categorySlug = key?.split(' ').pop();
  const { categoryData } = useCategoryData();
  const idCategory = useMemo(
    () => categoryData.find((item) => item.slug[languageCode] === categorySlug)?.id,
    [categoryData, categorySlug],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setAnchorElem(null);
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        getProductByParams(idCategory, searchParams).then((response) => {
          setProductList(response.results);
          setTotalElements(response.total);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [idCategory, searchParams]);

  const filterSize = windowWidth > CATALOG_PAGE_WINDOW_BREAKPOINT ? 3 : 12;
  const productListSize = windowWidth > CATALOG_PAGE_WINDOW_BREAKPOINT ? 9 : 12;

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
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
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
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                  />
                </CategoryPopover>
              </Grid>
            )}
          </Grid>
          <Grid item xs={productListSize}>
            <Box sx={styles.innerBox}>
              <SearchInput
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
              <SortingSelect
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </Box>
            {productList.length === 0 && !isLoading ? (
              <NoResultsMessage />
            ) : (
              <ProductList isLoading={isLoading} products={productList} />
            )}
            {!isLoading && productList.length > 0 ? (
              <AppPagination
                searchParams={searchParams}
                currentPage={currentPage}
                totalElements={totalElements}
                setCurrentPage={setCurrentPage}
                setSearchParams={setSearchParams}
              />
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Catalog;
