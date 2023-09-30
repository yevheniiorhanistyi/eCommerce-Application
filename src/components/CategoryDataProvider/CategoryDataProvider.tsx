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
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  const modal = useModal();

  useEffect(() => {
    const fetchData = async () => {
      const category = await getCategory(modal);
      if (category) setCategoryData(category);
    };

    fetchData();
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
