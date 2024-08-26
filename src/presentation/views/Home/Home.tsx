'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import { useGoogleMaps } from '@/core/hooks/useGoogleMaps';
import { Section1Styles } from '@/presentation/views/Home/styles';
import { Button } from '@/presentation/components/Button/Button';

export const Home: React.FC = () => {
  const [address, setAddress] = useState('');
  const { validateAddress, validAddressData } = useGoogleMaps();

  return (
    <Section1Styles.Container>
      <Section1Styles.Content>
        <Section1Styles.ValidateAddress>
          <Section1Styles.Title>
            Validate address through Google Maps API:
          </Section1Styles.Title>
          <TextField
            label="Address"
            value={address}
            style={{ width: '20rem' }}
            onChange={(e: any) => setAddress(e.target.value)}
          />
          <Button.Primary onClick={() => validateAddress({ address: address })}>
            Validate Address
          </Button.Primary>
          <div>
            <p>{`${validAddressData?.status || ''}:  ${
              validAddressData?.address || ''
            }`}</p>
          </div>
        </Section1Styles.ValidateAddress>

        <Section1Styles.ButtonsContainer>
          <Section1Styles.Title>
            Reusable Buttons and their variants:
          </Section1Styles.Title>
          <Button.Primary>Primary Variant</Button.Primary>
          <Button.Secondary>Secondary Variant</Button.Secondary>
          <Button.Tertiary>Tertiary Variant</Button.Tertiary>
        </Section1Styles.ButtonsContainer>
      </Section1Styles.Content>
    </Section1Styles.Container>
  );
};
