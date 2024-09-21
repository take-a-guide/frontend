import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 0 2rem 0;
  max-width: 1248px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 899px) {
    gap: 1.5rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary['blue']};
`;

export const ToursStyles = {
  Container,
  Content,
  Title,
};
