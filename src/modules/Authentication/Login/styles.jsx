import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import themeConfig from 'config/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftForm: {
      position: 'relative'
    },
    rootBtnDialog: {
      lineHeight: '21px',
      fontSize: '14px',
      color: '#636566',
      '&:hover': {
        backgroundColor: themeConfig.bgHover
      }
    },
    customItemBtn: {
      cursor: 'pointer',
    },
  })
);

export default useStyles;
