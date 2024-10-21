'use client';

import { ChangeUserDataStyles } from './styles';
import { Input } from '@/presentation/components/Input/Input';
import { Button } from '@/presentation/components/Button/Button';
import { useUserDataState } from '@/core/recoil/states/user';
import { useChangeUserData } from './hooks/useChangeUserData';
import { ChangeEvent } from 'react';

export const ChangeUserData: React.FC = () => {
  const { userData } = useUserDataState();
  const { handleInputChange, handleSubmit } = useChangeUserData();

  return (
    <ChangeUserDataStyles.Container>
      <ChangeUserDataStyles.Title>Alterar dados</ChangeUserDataStyles.Title>

      <ChangeUserDataStyles.InputsContainer>
        <Input
          placeholder={userData.name}
          name="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        />
        <Input
          placeholder={userData.email}
          type="email"
          name="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        />
        <Input
          placeholder={userData.phone}
          name="phone"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        />
        <Input
          placeholder="********"
          name="password"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        />

        <Button.Primary onClick={() => handleSubmit()}>Salvar</Button.Primary>
      </ChangeUserDataStyles.InputsContainer>
    </ChangeUserDataStyles.Container>
  );
};
