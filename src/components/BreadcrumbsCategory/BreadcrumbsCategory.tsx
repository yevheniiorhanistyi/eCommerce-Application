import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import languageCode from '../../utils/languageCode';
import { useCategoryData } from '../CategoryDataProvider/CategoryDataProvider';

import styles from './BreadcrumbsCategory.styles';

type BreadcrumbsCategoryProps = {
  paramLink: string | undefined;
};

export const BreadcrumbsCategory: React.FC<BreadcrumbsCategoryProps> = ({
  paramLink,
}: BreadcrumbsCategoryProps) => {
  const { categoryData } = useCategoryData();
  if (paramLink) {
    const paramLinkArray = paramLink.split(' ').map((item) => ({
      address: item,
      caption: categoryData.find((elem) => elem.slug[languageCode] === item)
        ?.name[languageCode],
    }));

    return (
      <Breadcrumbs sx={styles.wrap}>
        {paramLinkArray.map((item, index, array) => {
          if (index < paramLinkArray.length - 1) {
            return (
              <Link
                key={item.address}
                to={`/category/${array
                  .map((obj) => obj.address)
                  .slice(0, index + 1)
                  .join(' ')}`}
              >
                {item.caption}
              </Link>
            );
          }
          return <Typography key={item.address}>{item.caption}</Typography>;
        })}
      </Breadcrumbs>
    );
  }
  return (
    <Breadcrumbs sx={styles.wrap}>
      <Typography>/</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsCategory;
