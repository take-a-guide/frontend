import { createTheme } from '@mui/material';

export const theme = {
  colors: {
    primary: {
      '01': '#F58014',
      '900': '#003F59',
    },
    secondary: {
      '01': '#5AFFF3',
      red: '#ff0000',
      green: '#1acc5f',
    },
    neutral: {
      white: '#FFF',
      'grey-1': '#E7E7E7',
      'grey-2': '#C6C6C6',
      black: '#000',
      bottom: '#211D28',
    },
    gradient: {
      title: ` linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)`,
    },
  },
};

export const themeMUI = createTheme({});
