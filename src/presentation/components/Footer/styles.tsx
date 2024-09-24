import styled from '@emotion/styled';

const Container = styled.div`
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  /* border-top: 1px solid #e5e5e5; */
  box-shadow: 0px -1px 2px -1px rgba(206, 206, 206, 0.75);
`;

const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    gap: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const FooterStyles = {
  Container,
  Content,
};
