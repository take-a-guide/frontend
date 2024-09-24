import { GuideBox } from '@/presentation/components/GuideBox/GuideBox';
import { GuidesStyles } from './styles';
import { guidesItems } from './utils/items';

export const Guides: React.FC = () => {
  return (
    <GuidesStyles.Container>
      <GuidesStyles.Title> Guias na sua região</GuidesStyles.Title>
      <GuidesStyles.Content>
        {guidesItems
          .slice(0, 10)
          .map(
            (
              { image, location, title, lowestTourPrice, score, profileUrl },
              index,
            ) => (
              <GuideBox
                key={index}
                image={image.src}
                location={location}
                title={title}
                lowestTourPrice={lowestTourPrice}
                score={score}
                profileUrl={profileUrl}
              />
            ),
          )}
      </GuidesStyles.Content>
    </GuidesStyles.Container>
  );
};
