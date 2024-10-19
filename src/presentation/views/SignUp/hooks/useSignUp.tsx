import { useState } from 'react';
import { emailRegex, cpfRegex, phoneRegex } from '@/core/utils/regex';

export const useSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    cpf: '',
    phone: '',
    password: '',
  });

  const validateField = ({ name }: { name: string }) => {
    const { email, cpf, phone, password } = formData;
    let error = '';

    switch (name) {
      case 'email':
        if (!emailRegex.test(email)) {
          error = 'Email inválido';
        }
        break;
      case 'cpf':
        if (!cpfRegex.test(cpf)) {
          error = 'CPF inválido';
        }
        break;
      case 'phone':
        if (!phoneRegex.test(phone)) {
          error = 'Telefone inválido';
        }
        break;
      case 'password':
        if (password.length < 8) {
          error = 'A senha deve conter pelo menos 8 caracteres';
        }
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === '';
  };

  const validateForm = () => {
    const { email, cpf, phone, password } = formData;
    const isEmailValid = validateField('email', email);
    const isCpfValid = validateField('cpf', cpf);
    const isPhoneValid = validateField('phone', phone);
    const isPasswordValid = validateField('password', password);

    return isEmailValid && isCpfValid && isPhoneValid && isPasswordValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return {
    formData,
    errors,
    handleSubmit,
    handleInputChange,
    validateField,
    validateForm,
  };
};
