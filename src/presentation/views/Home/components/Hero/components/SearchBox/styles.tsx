import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  border: 1px solid #eaecf0;
  max-width: 30rem;
  padding: 2rem;
  min-height: 35rem;

  @media (max-width: 899px) {
    max-width: unset;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secondary['blue']};
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const SearchBoxStyles = {
  Container,
  Title,
  InputsContainer,
};
