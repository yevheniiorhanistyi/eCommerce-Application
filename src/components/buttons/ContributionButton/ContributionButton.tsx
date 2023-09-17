import { Button } from '@mui/material';
import styles from './ContributionButton.styles';

interface IContributionButtonProps {
  name: string;
}

const ContributionButton: React.FC<IContributionButtonProps> = ({
  name,
}: IContributionButtonProps) => (
  <Button sx={styles.button} variant="outlined">Contribution</Button>
);

export default ContributionButton;
