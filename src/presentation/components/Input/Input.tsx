import { HTMLInputTypeAttribute } from 'react';
import { InputStyles } from './styles';

interface IInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  onChange,
  type,
}) => {
  return (
    <InputStyles.Container
      placeholder={placeholder}
      onChange={onChange}
      type={type || 'text'}
    />
  );
};
