import { Box, Link, Typography } from '@mui/material';

import styles from './AboutUs.styles';
import TeamMember from '../../components/TeamMember/TeamMember';
import { ITeamMember } from '../../types/types';

const AboutUs: React.FC = () => {
  const teamMembers: ITeamMember[] = [
    {
      name: 'Yevhenii Orhanistyi',
      role: 'Frontend Developer',
      bio: [
        'Yevhenii Orhanistyi is web developer with practical knowledge of creating websites and applications using the React framework.',
        'He cares about the experience, architecture and code quality of the things he builds. Creating applications is his greatest passion, which inspires him to constantly improve his skills.',
      ],
      github: 'https://github.com/yevheniiorhanistyi',
      linkedin: 'https://www.linkedin.com/in/yevhenii-orhanistyi-819094224',
      photo: 'https://avatars.githubusercontent.com/u/88982441?v=4',
      sliderData: [
        { image: '/src/assets/1.png', description: 'He cares about the experience, architecture and code quality of the things he builds. Creating applications is his greatest passion, which inspires him to constantly improve his skills' },
        { image: '/src/assets/2.png', description: 'He cares about the experience, architecture and code quality of the things he builds. Creating applications is his greatest passion, which inspires him to constantly improve his skills' },
      ],
    },
    {
      name: 'Alexander Samak',
      role: 'Frontend Developer',
      bio: [
        'Alexander Samak is an aspiring web developer with excellent communication skills and willing to learn new programming languages.',
        'He enjoy learning Javascript and work well in a team. Always glad to learn something new and really interesting.',
      ],
      github: 'https://github.com/AlxndrSmk',
      linkedin: 'https://www.linkedin.com/in/alexander-samak-0141a6235',
      photo: 'https://avatars.githubusercontent.com/u/106277870?v=4',
      sliderData: [
        { image: '/src/assets/1.png', description: 'Alexander 11111' },
        { image: '/src/assets/2.png', description: 'Alexander 22222' },
      ],
    },
    {
      name: 'Konstantin Kikinov',
      role: 'Frontend Developer',
      bio: [
        "Web development has been Konstantin Kikinov's hobby for three years. He is an excellent example of a team player, but is also capable of working alone.",
        'He is detail-oriented, very hard-working and has extensive technical knowledge, while always being open to learning new tools and technologies.',
      ],
      github: 'https://github.com/KikinovK',
      linkedin: 'https://www.linkedin.com/in/kostiantyn-kikinov-505387b3',
      photo:
        'https://raw.githubusercontent.com/KikinovK/rsschool-cv/gh-pages/img/avatar_800.jpg',
      sliderData: [
        { image: '/src/assets/1.png', description: 'Konstantin 11111' },
        { image: '/src/assets/2.png', description: 'Konstantin 22222' },
      ],
    },
  ];

  return (
    <Box sx={styles.outerBox}>
      <Box sx={styles.innerBox}>
        <Box sx={styles.title}>
          <Typography variant="h3" align="center" sx={styles.titleText}>
            Meet our
          </Typography>
          <Link
            sx={styles.rsschoolLogo}
            href="https://rs.school/index.html"
            target="_blank"
          >
            <img
              alt="RSSchool"
              width="80"
              src="https://rolling-scopes-school.github.io/alxndrsmk-JSFEPRESCHOOL2022Q2/travel/assets/images/svg/rs_logo.svg"
            />
          </Link>
          <Typography variant="h3" align="center" sx={styles.titleText}>
            team
          </Typography>
        </Box>

        {teamMembers.map((member) => (
          <TeamMember
            name={member.name}
            role={member.role}
            bio={member.bio}
            github={member.github}
            linkedin={member.linkedin}
            photo={member.photo}
            key={member.name}
            sliderData={member.sliderData}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;
