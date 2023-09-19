import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { IContributionImageProps } from '../../types/types';
import styles from './ContributionImage.styles';

const ContributionImage: React.FC<IContributionImageProps> = ({
  url,
  alt,
}: IContributionImageProps) => (
  <Card sx={styles.imageWrap}>
    <CardMedia sx={styles.image} image={url} title={alt} component="img" />
    <CardContent>
      <Typography sx={{ paddingBottom: '30px' }}>{alt}</Typography>
    </CardContent>
  </Card>
);

export default ContributionImage;
