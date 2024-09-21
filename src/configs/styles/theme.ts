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
      blue: '#0F2B54',
    },
    neutral: {
      white: '#FFF',
      'gray-1': '#E7E7E7',
      'gray-2': '#eaecf0',
      black: '#000',
    },
    gradient: {
      title: ` linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)`,
    },
  },
};

export const themeMUI = createTheme({});
