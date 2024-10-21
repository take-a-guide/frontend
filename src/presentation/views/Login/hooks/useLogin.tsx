import { useState } from 'react';
import { api } from '@/configs/rest/api';
import { useUserDataState } from '@/core/recoil/states/user';
import { userServices } from '@/core/services/user';

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { setUserData } = useUserDataState();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const data = await userServices.login(formData);

      setUserData(prevData => ({
        ...prevData,
        cpf: data.cpf,
        email: data.email,
        name: data.name,
        phone: data.phone,
        isLogged: true,
      }));
    } catch (error) {
      console.log('error', error);
      return;
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
    handleSubmit,
    handleInputChange,
  };
};
