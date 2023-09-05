import { Category } from '@commercetools/platform-sdk';

export const categoryHasChildren = (
  category: Category,
  categories: Category[],
): boolean => categories.some((item) => item.parent && item.parent.id === category.id);

export const getChildren = (
  category: Category,
  categories: Category[],
): Category[] => categories.filter((item) => item.parent && item.parent.id === category.id);
