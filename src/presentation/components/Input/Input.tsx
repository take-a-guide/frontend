import { HTMLInputTypeAttribute } from 'react';
import { InputStyles } from './styles';
import { error } from 'console';

interface IInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  name?: string;
  required?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  onChange,
  type,
  name,
  required,
  errorMessage,
}) => {
  return (
    <InputStyles.Container>
      <InputStyles.Input
        placeholder={placeholder}
        onChange={onChange}
        type={type || 'text'}
        name={name}
        required={required}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </InputStyles.Container>
  );
};
