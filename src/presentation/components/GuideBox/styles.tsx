import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem 0;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.neutral['gray-3']};
  border: 1px solid ${({ theme }) => theme.colors.neutral['gray-2']};
  width: 19rem;
  transition: box-shadow 0.2s ease-in;
  box-shadow: -1px 2px 2px -1px rgba(206, 206, 206, 0.75);
`;

const Content = styled.div`
  width: 100%;

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;

  > span {
    text-transform: uppercase;
    font-size: 0.825rem;
    font-weight: bold;
    color: #5a5a5a;
  }

  > h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary['900']};
  }

  > small {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.primary['01']};
    font-weight: 700;

    > img {
      margin-top: -0.075rem;
    }
  }
`;

export const GuideBoxContainer = {
  Container,
  Content,
  Description,
};
