import styled from '@emotion/styled';
import Image from 'next/image';

const Title = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary['blue']};
  text-align: left;
  margin: 0 0 0 0;
  line-height: 32px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TagLogo = styled(Image)`
  width: 7rem;
  height: auto;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 0.25rem;
  font-size: 1rem;
  font-weight: 700;
  margin: -0.25rem 0 0.25rem 0;
  color: ${({ theme }) => theme.colors.primary['01']};
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0 2rem 0;

  > input {
    width: 100%;
  }
`;

export const SignUpStyles = {
  Title,
  LogoContainer,
  TagLogo,
  Back,
  InputContainer,
};
