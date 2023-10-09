import { useState, useEffect } from 'react';

import { getProductByParams } from '../services/products/getProductByParams';
import { IProduct } from '../types/productInterfaces';
import { ISearchParams } from '../types/types';

export const useProductData = (
  idCategory: string | undefined,
  searchParams: ISearchParams,
) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getProductByParams(idCategory, searchParams);
        setProductList(response.results);
        setTotalElements(response.total);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [idCategory, searchParams]);

  return { productList, totalElements, isLoading };
};

export default useProductData;
