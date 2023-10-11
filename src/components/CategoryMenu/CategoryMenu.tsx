import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@commercetools/platform-sdk';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
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
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categoryData,
}: CategoryMenuProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const topLevelCategories = categoryData.filter((elem) => !('parent' in elem));

  const handleChangeAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChangeAccordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Categories</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ paddingTop: 0, '& ul': { paddingTop: 0, mb: 0 } }}
      >
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={styles.treeView}
        >
          {topLevelCategories.map((category, index) => (
            <TreeItem
              nodeId={index.toString()}
              key={category.id}
              label={(
                <Link to={`category/${category.slug[languageCode]}`}>
                  {category.name[languageCode]}
                </Link>
              )}
            >
              {categoryHasChildren(category, categoryData) && (
                <RecursiveMenu
                  data={getChildren(category, categoryData)}
                  fullData={categoryData}
                  linkTo={`category/${category.slug[languageCode]}`}
                  indexParent={index.toString()}
                />
              )}
            </TreeItem>
          ))}
        </TreeView>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryMenu;
