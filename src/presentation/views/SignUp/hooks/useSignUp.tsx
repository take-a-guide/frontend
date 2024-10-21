import { useState } from 'react';
import { emailRegex, cpfRegex, phoneRegex } from '@/core/utils/regex';
import { useRouter } from 'next/navigation';
import { userServices } from '@/core/services/user';

export const useSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    type: 1,
  });

  const [errors, setErrors] = useState({
    email: '',
    cpf: '',
    phone: '',
    password: '',
  });

  const [isFirstStep, setIsFirstStep] = useState(true);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      fullName: `${prevFormData.name} ${prevFormData.lastName}`,
    }));
  };

  const validateField = ({ name }: { name: string }) => {
    const { email, cpf, phone, password } = formData;
    let error = '';

    switch (name) {
      case 'name':
        if (formData.name.length < 3) {
          error = 'Nome inválido';
        }
        break;

      case 'lastName':
        if (formData.lastName.length < 3) {
          error = 'Sobrenome inválido';
        }
        break;

      case 'cpf':
        if (!cpfRegex.test(cpf)) {
          error = 'CPF inválido';
        }
        break;

      case 'email':
        if (!emailRegex.test(email)) {
          error = 'Email inválido';
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

  const validateFirstStep = () => {
    const isNameValid = validateField({ name: 'name' });
    const isLastNameValid = validateField({ name: 'lastName' });
    const isCpfValid = validateField({ name: 'cpf' });

    return isNameValid && isLastNameValid && isCpfValid;
  };

  const handleFirstStep = () => {
    if (validateFirstStep()) {
      setIsFirstStep(false);
      setFormData(prevFormData => ({
        ...prevFormData,
        fullName: `${prevFormData.name} ${prevFormData.lastName}`,
      }));
    }
  };

  const validateSecondStep = () => {
    const isEmailValid = validateField({ name: 'email' });
    const isPhoneValid = validateField({ name: 'phone' });
    const isPasswordValid = validateField({ name: 'password' });

    return isEmailValid && isPhoneValid && isPasswordValid;
  };

  const handleSubmit = async () => {
    const dataTobeSent = {
      cpf: formData.cpf,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      type: formData.type,
    };

    if (validateSecondStep()) {
      try {
        const response = await userServices.signUp(dataTobeSent);
        router.push('/login');
        return response;
      } catch (error) {
        console.log('error', error);
        return;
      }
    } else {
      console.log('form invalid');
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateField,
    validateSecondStep,
    handleFirstStep,
    handleSubmit,
    isFirstStep,
  };
};
