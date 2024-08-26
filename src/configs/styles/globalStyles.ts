import { injectGlobal } from '@emotion/css';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const GlobalStyles = injectGlobal`
  
  html, body {
    font-family: ${roboto.style['fontFamily']};
  }

  /* Handle */
  ::scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8);
  }

  ::-webkit-scrollbar-thumb:horizontal{
    display: none;
  }

  /* Handle on hover */
  ::scrollbar-thumb:hover {
    background: rgba(2, 85, 85, 0.5);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(24, 24, 24, 0.62);
  }  

  .Toastify__toast-container {
    z-index: 1000000;
  }
`;
