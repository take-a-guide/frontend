import styled from '@emotion/styled';
import { roboto } from '@/configs/styles/globalStyles';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${roboto};
  gap: 0 0.5rem;
  background: ${({ theme }) => theme.colors.primary['01']};
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
`;

const ValidateAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  max-width: 20rem;

  button {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;

  > div {
    display: flex;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral['black']};
  font-size: 1.25rem;
`;

export const HeroStyles = {
  Container,
  Content,
  Title,
  ValidateAddress,
  ButtonsContainer,
};
