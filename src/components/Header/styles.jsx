import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import themeConfig from '../../config/theme';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: '4px 4px 10px rgba(216, 237, 239, 0.3)',
      marginLeft: 100,
      background: 'white',
      borderBottomLeftRadius: '32px',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    header: {
      color: '#CCCCCC',
      height: '72px',
      display: 'flex',
      padding: '17px 0 15px 35px',
    },
    left_session: {
      float: 'left',
    },
    menuCenter: {
      height: 35,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      borderRight: `1px solid ${themeConfig.grey1}`,
    },
    header_optional: {
      margin: '0 15px',
      color: '#183028',
    },
    subMenuCenter: {
      height: 35,
      display: 'flex',
      alignItems: 'center'
    },
    profile: {
      right: 0,
      height: 72,
    },
    customIcon: {
      padding: '17px 0',
      marginLeft: 25
    },
    customAvatar: {
      padding: '20px 0'
    },
    avatar: {
      height: '32px',
      width: '32px',
    },
    right_session: {
      float: 'right',
    },
    nav_header: {
      height: 50,
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px 0 20px',
        position: 'relative',
      },
    },
    session: {
      color: '#CCCCCC',
      margin: '0 15px',
    },
    logo: {
      width: 98,
      height: 33,
      marginRight: '30px',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        width: '60px',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
      },
      '&&:hover':{
        opacity: 0.7
      },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    paper: {
      width: '100%',
      backgroundColor: '#222222',
    },
    menuButton: {
      color: 'red',
    },
    menuHeader: {
      height: '50px',
      display: 'flex',
      alignItems: 'center',
    },
    linkHeader: {
      paddingLeft: '15px',
      paddingBottom: '15px',
    },
    listMenu: {
      padding: '0px',
      marginTop: '-10px',
    },
    menu_option: {
      paddingBottom: '14px',
      color: '#F68B1F',
      fontSize: '16px',
      display: 'block',
      width: '100%',
    },
    header_option: {
      fontWeight: 'bold',
      paddingRight: '10px',
      color: '#CCCCCC',
      fontSize: '16px',
    },
    rootListItem: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
    menuIcon: {
      color: '#CCCCCC',
    },
    profileAvatar: {
      fontSize: 13,
      color: '#183028',
      marginLeft: 10,
      fontWeight: 'bold',
      padding: '20px 0'
    },
    rootFormControl: {
      borderLeft: '1px solid #ff7700',
      marginLeft: 25,
      padding: '20px 10px',
      '& > div > div': {
        color: '#8B8E8F',
      },
      '& > div > img': {
        position: 'absolute',
        left: '28px',
        pointerEvents: 'none',
      }
    },
    rootSelect: {
      paddingRight: '15px !important',
      '&:focus': {
        backgroundColor: 'unset',
      },
    }
  })
);

export default useStyles;
