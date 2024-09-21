import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  overflow: hidden;
  min-width: 18.75rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral['gray-2']};
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);

  @media (max-width: 310px) {
    min-width: unset;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    &:hover {
      ${({ theme }) => theme.colors.neutral['gray-3']};
    }
  }

  img {
    max-width: 9.5rem;
    height: auto;
    object-fit: contain;
    z-index: 3;
  }
`;

const RightSide = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const TourBoxStyles = {
  Container,
  RightSide,
};
