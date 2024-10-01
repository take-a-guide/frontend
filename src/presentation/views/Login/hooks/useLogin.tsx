import { useState } from 'react';

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
