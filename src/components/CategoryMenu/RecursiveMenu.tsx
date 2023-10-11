import { Link } from 'react-router-dom';
import { Category } from '@commercetools/platform-sdk';
import TreeItem from '@mui/lab/TreeItem';
import { categoryHasChildren, getChildren } from './utils/dataProcessing';
import languageCode from '../../utils/languageCode';

type RecursiveMenuProps = {
  data: Category[];
  fullData: Category[];
  linkTo: string;
  indexParent: string;
};

const RecursiveMenu: React.FC<RecursiveMenuProps> = ({
  data,
  fullData,
  linkTo,
  indexParent,
}: RecursiveMenuProps) => (
  <div>
    {data.map((category, index) => (
      <TreeItem
        nodeId={`${indexParent}${index.toString()}`}
        key={category.id}
        label={(
          <Link to={`${linkTo} ${category.slug[languageCode]}`}>
            {category.name[languageCode]}
          </Link>
        )}
      >
        {categoryHasChildren(category, fullData) && (
          <RecursiveMenu
            data={getChildren(category, fullData)}
            fullData={fullData}
            linkTo={`${linkTo} ${category.slug[languageCode]}`}
            indexParent={`${indexParent}${index.toString()}`}
          />
        )}
      </TreeItem>
    ))}
  </div>
);

export default RecursiveMenu;
