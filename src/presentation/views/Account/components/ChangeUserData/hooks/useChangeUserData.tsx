import { useUserDataState } from '@/core/recoil/states/user';
import { useState, useCallback } from 'react';
import { userServices } from '@/core/services/user';
import { useToast } from '@/core/hooks/useToast';

interface ChangeUserData {
  cpf: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
}

export const useChangeUserData = () => {
  const { userData } = useUserDataState();
  const { toast } = useToast();

  const [dataToBeSent, setDataToBeSent] = useState<ChangeUserData>({
    cpf: userData.cpf,
    name: null,
    email: null,
    phone: null,
    password: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataToBeSent(prevData => ({
      ...prevData,
      [name]: value,
    }));
    console.log('dataToBeSent', dataToBeSent);
  };

  const handleSubmit = async () => {
    console.log('dataToBeSentInsub', dataToBeSent);

    try {
      await userServices.update(dataToBeSent);
      //TODO: Fix this
      //  await userServices.login({email: dataToBeSent.email !== null ? dataToBeSent.email || userData.email, password: dataToBeSent.passwor
      //   );

      toast({
        title: 'Dados alterados com sucesso',
        type: 'success',
      });
    } catch (error) {
      toast({
        title: 'Erro ao alterar dados',
        type: 'error',
      });
      return;
    }
  };

  return {
    handleInputChange,
    handleSubmit,
  };
};
