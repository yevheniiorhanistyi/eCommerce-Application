import { Link } from 'react-router-dom';
import { Category } from '@commercetools/platform-sdk';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecursiveMenu from './RecursiveMenu';
import { categoryHasChildren, getChildren } from './utils/dataProcessing';
import languageCode from '../../utils/languageCode';

import styles from './CategoryMenu.styles';

type CategoryMenuProps = {
  categoryData: Category[];
  onClose: () => void;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categoryData,
  onClose,
}: CategoryMenuProps) => {
  const topLevelCategories = categoryData.filter((elem) => !('parent' in elem));

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={styles.treeView}
    >
      <TreeItem
        nodeId="500"
        label={(
          <Link to="/catalog" onClick={onClose}>
            All categories
          </Link>
        )}
      />
      {topLevelCategories.map((category, index) => (
        <TreeItem
          nodeId={index.toString()}
          key={category.id}
          label={(
            <Link
              to={`/category/${category.slug[languageCode]}`}
              onClick={onClose}
            >
              {category.name[languageCode]}
            </Link>
          )}
        >
          {categoryHasChildren(category, categoryData) && (
            <RecursiveMenu
              data={getChildren(category, categoryData)}
              fullData={categoryData}
              linkTo={`/category/${category.slug[languageCode]}`}
              indexParent={index.toString()}
              onClick={onClose}
            />
          )}
        </TreeItem>
      ))}
    </TreeView>
  );
};

export default CategoryMenu;
