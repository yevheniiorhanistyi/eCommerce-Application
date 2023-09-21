import { Box, Link, Typography } from '@mui/material';

import TeamMember from '../../components/TeamMember/TeamMember';
import { ITeamMember } from '../../types/types';

import skillEuhenii from '../../assets/skillEuhenii.png';
import reactYevhenii from '../../assets/reactYevhenii.png';
import styleAlexander from '../../assets/styleAlexander.png';
import grammarAlexander from '../../assets/grammarAlexander.png';
import clearCodeKonstantin from '../../assets/clearCodeKonstantin.png';
import themeKonstantin from '../../assets/themeKonstantin.png';

import styles from './AboutUs.styles';

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
        {
          image: `${skillEuhenii}`,
          description:
            'Yevhenii made a valuable contribution to the project by consistently ensuring that the code met quality standards and was functionally correct. Yevhenii also demonstrated himself to be a responsive and responsible team player. He quickly responded to feedback and apologized for the mistake. This is indicative of the fact that Yevhenii is open to constructive criticism and strives for continuous improvement.',
        },
        {
          image: `${reactYevhenii}`,
          description:
            'Yevhenii demonstrates his deep understanding of React and his commitment to writing clean and readable code. He suggests simplifying the import of React in components, which will make the code more concise and maintainable.',
        },
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
        {
          image: `${styleAlexander}`,
          description:
            "Alexander is proactive team member suggesting improvements, considerate of other developers, and thoughtful in their feedback. Alexander's comments benefits the developing process by improving readability, consistency, and the user experience.",
        },
        {
          image: `${grammarAlexander}`,
          description:
            'His attention to detail and commitment to grammatical correctness are valuable assets to the development team. He is always on the lookout for errors in grammar and spelling, and he is not afraid to point them out. This helps to ensure that the application is easy to understand.',
        },
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
        {
          image: `${clearCodeKonstantin}`,
          description:
            "Konstantin's commitment to clean code is evident in his work at every stage of creating the application. From the initial design phase to the final testing and deployment, Konstantin ensures that the code is readable, maintainable, and extensible.",
        },
        {
          image: `${themeKonstantin}`,
          description:
            'His attention to details ensures that components use styles from the application theme is a valuable contribution to the project. He helped team maintain a consistent and cohesive user experience throughout the application.',
        },
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
