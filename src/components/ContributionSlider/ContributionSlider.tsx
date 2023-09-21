import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { IContributionSliderProps } from '../../types/types';

import ContributionImage from '../ContributionImage/ContributionImage';
import './_contribution_slider.scss';

const ContributionSlider: React.FC<IContributionSliderProps> = ({
  sliderData,
  startIndex = 0,
}: IContributionSliderProps) => {
  const [firstImgLoaded, setFirstImgLoaded] = useState(false);

  return (
    <>
      <img
        src={sliderData[0].image}
        onLoad={() => setFirstImgLoaded(true)}
        style={{ display: 'none' }}
        alt={sliderData[0].image}
      />
      {firstImgLoaded && (
        <Carousel
          autoPlay={false}
          animation="slide"
          navButtonsAlwaysVisible
          indicators={false}
          cycleNavigation={false}
          navButtonsWrapperProps={{ className: 'contribution' }}
          navButtonsProps={{ className: 'nav__button' }}
          index={startIndex}
        >
          {sliderData.map((item) => (
            <ContributionImage
              key={item.image}
              url={item.image}
              alt={item.description}
            />
          ))}
        </Carousel>
      )}
    </>
  );
};
export default ContributionSlider;
