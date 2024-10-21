import React from 'react';

import Link from 'next/link';
import { Button } from '@/presentation/components/Button/Button';

import { Profile } from '@/presentation/assets/Profile';
import { ArrowDown } from '@/presentation/assets/ArrowDown';

import { UserDropdownStyles } from './styles';

interface IUserDropdownProps {
  $ref: React.RefObject<HTMLDivElement>;
  $isOpen?: boolean | undefined;
  onClick: () => void;
}

export const UserDropdown: React.FC<IUserDropdownProps> = ({
  $isOpen,
  $ref,
  onClick,
}) => {
  return (
    <UserDropdownStyles.GeneralContainer ref={$ref}>
      <UserDropdownStyles.ButtonContainer $isOpen={$isOpen} onClick={onClick}>
        <span>
          <Profile />

          <ArrowDown />
        </span>
      </UserDropdownStyles.ButtonContainer>
      <UserDropdownStyles.OptionsContainer $isOpen={$isOpen}>
        <div>
          <h1>{'Ola, Joao'}</h1>

          <Link href="/account">Conta</Link>
          <Link href="profile">Perfil</Link>

          <div>
            <Button.Primary onClick={() => {}}>Sair</Button.Primary>
          </div>
        </div>
      </UserDropdownStyles.OptionsContainer>
    </UserDropdownStyles.GeneralContainer>
  );
};
