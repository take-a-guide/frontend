import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  padding: 5rem 1rem 8rem 1rem;
  max-width: 1248px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary['blue']};
`;

export const GuidesStyles = {
  Container,
  Content,
  Title,
};
