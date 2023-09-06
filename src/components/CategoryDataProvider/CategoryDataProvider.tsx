import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Category } from '@commercetools/platform-sdk';
import { useModal } from '../ModalProvider/ModalProvider';
import getCategory from '../../services/apiIntegration/category';

interface ICategoryDataProvider {
  children: ReactNode;
}

const CategoryDataContext = createContext<{ categoryData: Category[] }>({
  categoryData: [],
});

export const CategoryDataProvider = ({ children }: ICategoryDataProvider) => {
  const modal = useModal();
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = await getCategory(modal);
      if (category) setCategoryData(category);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(
    () => ({
      categoryData,
    }),
    [categoryData],
  );

  return (
    <CategoryDataContext.Provider value={contextValue}>
      {children}
    </CategoryDataContext.Provider>
  );
};

export const useCategoryData = () => {
  const context = useContext(CategoryDataContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
