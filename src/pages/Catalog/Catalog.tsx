import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Container } from '@mui/material';

import { ISearchParams } from '../../types/types';

import { useCategoryData } from '../../components/CategoryDataProvider/CategoryDataProvider';
import { useProductData } from '../../hooks/useProductData';
import { useDisplayState } from '../../hooks/useDisplayState';
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
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useState<ISearchParams>(initialSearchParams);
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);
  const { key } = useParams<{ key: string }>();
  const categorySlug = key?.split(' ').pop();
  const { categoryData } = useCategoryData();
  const idCategory = useMemo(
    () => categoryData.find((item) => item.slug[languageCode] === categorySlug)?.id,
    [categoryData, categorySlug],
  );
  const { windowWidth } = useDisplayState();
  const { productList, totalElements, isLoading } = useProductData(
    idCategory,
    searchParams,
    setSearchParams,
    setCurrentPage,
  );

  const elementsPerPage = 6;
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = ((page - 1) * 6) % totalElements;
    setCurrentPage(page - 1);
    setSearchParams({ ...searchParams, offset: newOffset });
  };

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
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Catalog;
