interface IHeaderItemsProps {
  label: string;
  url: string;
  target: 'self' | '_blank';
}

export const items: IHeaderItemsProps[] = [
  {
    label: 'Como Funciona?',
    url: '#how-it-works',
    target: 'self',
  },
  {
    label: 'Conheça nossos guias',
    url: '/guides',
    target: 'self',
  },

  {
    label: 'Contate-nos',
    url: '/contact',
    target: 'self',
  },
];
