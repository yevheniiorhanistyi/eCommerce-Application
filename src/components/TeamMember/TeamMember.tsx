import { Link, Container, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ITeamMember } from '../../types/types';
import styles from './TeamMember.styles';

const TeamMember: React.FC<ITeamMember> = ({
  name,
  role,
  bio,
  github,
  linkedin,
  photo,
}: ITeamMember) => (
  <Container sx={styles.container} disableGutters>
    <Box sx={styles.image}>
      <img
        src={photo}
        alt={name}
        loading="lazy"
        width="200px"
        style={styles.image}
      />
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
        <Typography sx={styles.bio} key={paragraph}>{paragraph}</Typography>
      ))}
    </Container>
  </Container>
);

export default TeamMember;
