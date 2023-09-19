import { Link, Container, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ITeamMember } from '../../types/types';
import styles from './TeamMember.styles';
import ContributionButton from '../buttons/ContributionButton/ContributionButton';
import { useModal } from '../ModalProvider/ModalProvider';

const TeamMember: React.FC<ITeamMember> = ({
  name,
  role,
  bio,
  github,
  linkedin,
  photo,
  sliderData,
}: ITeamMember) => {
  const modal = useModal();

  return (
    <Container sx={styles.container} disableGutters>
      <Box sx={styles.image}>
        <img src={photo} alt={name} loading="lazy" width="200px" />
      </Box>
      <Container>
        <Container sx={styles.links} disableGutters>
          <Link href={linkedin} target="_blank">
            <LinkedInIcon fontSize="large" sx={styles.icon} />
          </Link>
          <Link href={github} target="_blank">
            <GitHubIcon fontSize="large" sx={styles.icon} />
          </Link>
        </Container>
        <Typography sx={styles.name}>{name}</Typography>
        <Typography sx={styles.role}>{role}</Typography>
        {bio.map((paragraph) => (
          <Typography sx={styles.bio} key={paragraph}>
            {paragraph}
          </Typography>
        ))}
        <Container sx={styles.button} disableGutters>
          <ContributionButton
            callback={() => {
              modal.openModal('contribution', false);
              modal.setContent('contribution', { sliderData });
            }}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default TeamMember;
