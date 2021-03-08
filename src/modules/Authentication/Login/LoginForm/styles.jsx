import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import themeConfig from 'config/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutLogin: {
      height: '80%',
      marginTop: '15%',
      padding: '0 10%',
    },
    containerLogoLogin: {
      width: '100px',
      height: '100px',
      '& img': {
        width: '100%',
        borderRadius: '50%',
      }
    },
    formLogin: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
    },
    btnLogin: {
      margin: '20px 0 10px'
    },
    inputLogin: {
      margin: '20px 0',
    },
    textDescription: {
      color: themeConfig.bgButton,
      cursor: 'pointer'
    }
  })
);

export default useStyles;
