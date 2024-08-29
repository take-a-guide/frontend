import styled from '@emotion/styled';
import { roboto } from '@/configs/styles/globalStyles';

interface IInputStyleProps {
  $width?: string;
  $height?: string;
  $fontSize?: string;
  $color?: string;
  $borderColor?: string;
  $borderRadius?: string;
  $padding?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;

  > span {
    color: ${({ theme }) => theme.colors.secondary['red']};
    font-size: 0.75rem;
  }
`;

const Input = styled.input<IInputStyleProps>`
  width: ${({ $width }) => $width || '100%'};
  padding: ${({ $padding }) => $padding || '1rem 0.5rem'};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  color: ${({ $color, theme }) => $color || theme.colors.neutral['black']};
  border: 1px solid
    ${({ $borderColor, theme }) =>
      $borderColor || theme.colors.neutral['gray-1']};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.25rem'};
  font-family: ${roboto};

  &:hover {
    cursor: ${({ type }) => (type === 'date' ? 'pointer' : 'text')};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const InputStyles = {
  Container,
  Input,
};
