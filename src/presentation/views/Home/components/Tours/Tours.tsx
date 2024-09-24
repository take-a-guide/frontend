'use client';

import { ToursStyles } from './styles';
import { TourBox } from '@/presentation/components/TourBox/TourBox';
import { toursItems } from './utils/items';
import { Grid } from '@mui/material';

export const Tours: React.FC = () => {
  return (
    <ToursStyles.Container>
      <ToursStyles.Title>Escolha o seu Tour</ToursStyles.Title>
      <Grid container gap={3} width="100%">
        {toursItems.map(({ category, image, url }) => (
          <Grid item md={5.85} xs={12} key={category}>
            <TourBox category={category} image={image} url={url} />
          </Grid>
        ))}
      </Grid>
    </ToursStyles.Container>
  );
};
