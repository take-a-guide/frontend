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

  const validateForm = () => {
    const { email, cpf, phone, password } = formData;
    const validatedErrors = {
      email: '',
      cpf: '',
      phone: '',
      password: '',
    };

    if (!emailRegex.test(email)) {
      validatedErrors.email = 'Email inválido';
    }

    if (!cpfRegex.test(cpf)) {
      validatedErrors.cpf = 'CPF inválido';
    }

    if (!phoneRegex.test(phone)) {
      validatedErrors.phone = 'Telefone inválido';
    }

    if (password.length < 8) {
      validatedErrors.password = 'A senha deve conter pelo menos 8 caracteres';
    }

    setErrors(validatedErrors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  };
};
