'use client';

import { HomeStyles } from '@/presentation/views/Home/styles';
import { Hero, Tours, Guides } from '@/presentation/views/Home/components';

export const Home: React.FC = () => {
  return (
    <HomeStyles.Container>
      <Hero />
      <Tours />
      <Guides />
    </HomeStyles.Container>
  );
};
