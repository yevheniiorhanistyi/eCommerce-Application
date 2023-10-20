import { useState, useEffect } from 'react';

import { getProductByParams } from '../services/products/getProductByParams';
import { IProduct } from '../types/productInterfaces';
import { ISearchParams } from '../types/types';

export const useProductData = (
  idCategory: string | undefined,
  searchParams: ISearchParams,
  setSearchParams: React.Dispatch<React.SetStateAction<ISearchParams>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getProductByParams(idCategory, searchParams);
        if (response.count <= 0 && response.total > 0) {
          setCurrentPage(0);
          setSearchParams({ ...searchParams, offset: 0 });
        }
        setProductList(response.results);
        setTotalElements(response.total);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [idCategory, searchParams]);

  return { productList, totalElements, isLoading };
};

export default useProductData;
