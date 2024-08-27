'use client';

import { HeaderStyles } from './styles';
import { items } from './utils/items';
import { Button } from '@/presentation/components/Button/Button';
import Image from 'next/image';
import tagLogo from '@/presentation/assets/tag-logo.png';

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Content>
        <HeaderStyles.TagLogo src={tagLogo} alt="Tag logo" />
        <HeaderStyles.ItemsContainer>
          {items.map(({ label, target, url }) => (
            <HeaderStyles.Item key={label} href={url} target={target}>
              {label}
            </HeaderStyles.Item>
          ))}
          <HeaderStyles.ButtonsContainer>
            <Button.Secondary $width="9rem" $fontSize="1rem">
              Login
            </Button.Secondary>
            <Button.Tertiary $width="9rem" $fontSize="1rem">
              Criar Conta
            </Button.Tertiary>
          </HeaderStyles.ButtonsContainer>
        </HeaderStyles.ItemsContainer>
      </HeaderStyles.Content>
    </HeaderStyles.Container>
  );
};
