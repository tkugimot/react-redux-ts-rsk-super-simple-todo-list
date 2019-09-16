import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8', // 基本の色よりも明るい色
        main: '#3f50b5', // 基本の色
        dark: '#002884', // 基本の色よりも暗い色
        contrastText: '#fff', // テキストの色
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});
