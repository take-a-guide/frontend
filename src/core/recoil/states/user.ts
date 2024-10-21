import { atom, useRecoilState } from 'recoil';
import { UserData } from '@/core/interfaces/user';

const userAtom = atom<UserData>({
  key: 'user',
  default: {
    cpf: '',
    name: '',
    email: '',
    phone: '',
    user_type_id: 1,
    isLogged: false,
  },
});

export const useUserDataState = () => {
  const [userData, setUserData] = useRecoilState(userAtom);

  return { userData, setUserData };
};
