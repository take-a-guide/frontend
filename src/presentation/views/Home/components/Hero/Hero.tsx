import { HeroStyles } from './styles';
import { Grid } from '@mui/material';
import Image from 'next/image';
import tripCouple from './assets/trip-couple.png';
import { SearchBox } from './components/SearchBox/SearchBox';

export const Hero: React.FC = () => {
  return (
    <HeroStyles.Container>
      <Grid
        container
        justifyContent="space-between"
        maxWidth={1248}
        padding="0 1rem"
      >
        <Grid item md={5} xs={12}>
          <SearchBox />
        </Grid>
        <Grid item md={5} xs={12}>
          <HeroStyles.TripCoupleImage
            src={tripCouple}
            alt="Couple Travelling"
          />
        </Grid>
      </Grid>
    </HeroStyles.Container>
  );
};
