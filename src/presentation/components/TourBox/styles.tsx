import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background: #ededed;
  box-shadow: 1.25rem 1.25rem 3.75rem #ababab,
    -1.25rem -1.25rem 3.75rem ${({ theme }) => theme.colors.neutral['white']};
  overflow: hidden;
  min-width: 18.75rem;
  border: 2px solid ${({ theme }) => theme.colors.neutral['gray-1']};
  transition: box-shadow 0.2s ease-in-out;

  @media (max-width: 310px) {
    min-width: unset;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0.5rem 0.5rem 1.5rem #cac9c9,
      -1.25rem -1.25rem 3.75rem ${({ theme }) => theme.colors.neutral['white']};
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
