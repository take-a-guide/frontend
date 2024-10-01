import { ChangeEvent } from 'react';
import { SearchBoxStyles } from './styles';
import { Input } from '@/presentation/components/Input/Input';
import { Button } from '@/presentation/components/Button/Button';

export const SearchBox: React.FC = () => {
  return (
    <SearchBoxStyles.Container>
      <SearchBoxStyles.Title>
        Conectando você ao guia perfeito para um passeio inesquecível.
      </SearchBoxStyles.Title>
      <SearchBoxStyles.InputsContainer>
        <Input
          placeholder="Digite o local de partida"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
        />
        <Input
          placeholder="Data de partida"
          type="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
        />
        <Input
          placeholder="Digite o tipo de passeio"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
        />
      </SearchBoxStyles.InputsContainer>

      <Button.Primary $width="100%" $height="3rem">
        Pesquisar
      </Button.Primary>
    </SearchBoxStyles.Container>
  );
};
