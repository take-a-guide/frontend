'use client';

import { HeaderStyles } from './styles';
import { items } from './utils/items';
import { Button } from '@/presentation/components/Button/Button';
import Image from 'next/image';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Header: React.FC<{ noHeaderPaths: string[] }> = ({
  noHeaderPaths,
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 60 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {noHeaderPaths.includes(pathname) ? null : (
        <HeaderStyles.Container $isScrolled={isScrolled}>
          <HeaderStyles.Content>
            <Link href="/">
              <HeaderStyles.TagLogo src={tagLogoOrange} alt="Tag logo" />
            </Link>
            <HeaderStyles.ItemsContainer>
              {items.map(({ label, target, url }) => (
                <HeaderStyles.Item key={label} href={url} target={target}>
                  {label}
                </HeaderStyles.Item>
              ))}
              <HeaderStyles.ButtonsContainer>
                <Link href="/login">
                  <Button.Primary $width="9rem" $fontSize="1rem">
                    Login
                  </Button.Primary>
                </Link>
                <Link href="/sign-up">
                  <Button.Secondary $width="9rem" $fontSize="1rem">
                    Criar Conta
                  </Button.Secondary>
                </Link>
              </HeaderStyles.ButtonsContainer>
            </HeaderStyles.ItemsContainer>
          </HeaderStyles.Content>
        </HeaderStyles.Container>
      )}
    </>
  );
};
