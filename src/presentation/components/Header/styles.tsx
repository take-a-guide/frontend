import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div<{
  $isScrolled: boolean;
}>`
  z-index: 1000;
  background: ${({ theme, $isScrolled }) =>
    $isScrolled ? theme.colors.neutral['gray-2'] : 'transparent'};
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1248px;
  padding: 0 1rem;
  height: 5rem;
  margin: 0 auto;
`;

const TagLogo = styled(Image)`
  width: 6.5rem;
  height: auto;
  object-fit: contain;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
`;

const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary['blue']};
  font-weight: 500;
  font-size: 0.875rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-left: 1rem;
`;

export const HeaderStyles = {
  Container,
  TagLogo,
  Content,
  ItemsContainer,
  Item,
  ButtonsContainer,
};
