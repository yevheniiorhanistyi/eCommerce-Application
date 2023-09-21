import { Button } from '@mui/material';

import styles from './ContributionButton.styles';

interface IContributionButtonProps {
  callback: () => void;
}

const ContributionButton: React.FC<IContributionButtonProps> = ({
  callback,
}: IContributionButtonProps) => {
  const handleClick = () => {
    callback();
  };

  return (
    <Button sx={styles.button} onClick={handleClick} variant="outlined">
      Contribution
    </Button>
  );
};

export default ContributionButton;
