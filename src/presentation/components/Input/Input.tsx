import { TextField } from '@mui/material';
import { InputStyles } from './styles';

interface IInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
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
        // label={placeholder}
        name={name}
        onChange={onChange}
        type={type || 'text'}
        required={required}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </InputStyles.Container>
  );
};
