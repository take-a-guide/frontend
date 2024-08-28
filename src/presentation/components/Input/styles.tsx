import styled from '@emotion/styled';

interface IInputStyleProps {
  $width?: string;
  $height?: string;
  $fontSize?: string;
  $color?: string;
  $borderColor?: string;
  $borderRadius?: string;
  $padding?: string;
}

const Container = styled.input<IInputStyleProps>`
  width: ${({ $width }) => $width || '100%'};
  padding: ${({ $padding }) => $padding || '1rem 0.5rem'};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize || '1rem'};
  color: ${({ $color, theme }) => $color || theme.colors.neutral['black']};
  border: 1px solid
    ${({ $borderColor, theme }) =>
      $borderColor || theme.colors.neutral['gray-1']};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.25rem'};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary['blue']};
  }
`;

export const InputStyles = {
  Container,
};
