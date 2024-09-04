'use client';

import { ToursStyles } from './styles';
import { TourBox } from '@/presentation/components/TourBox/TourBox';
import { toursItems } from './utils/items';

export const Tours: React.FC = () => {
  return (
    <ToursStyles.Container>
      <ToursStyles.Title>Escolha o seu Tour</ToursStyles.Title>
      <ToursStyles.Content>
        {toursItems.map(({ category, image, url }) => (
          <TourBox key={category} category={category} image={image} url={url} />
        ))}
      </ToursStyles.Content>
    </ToursStyles.Container>
  );
};
