import React from 'react';
import {
  Link,
  Grid,
  Hidden,
  IconButton,
  ListItem,
  List,
  Drawer,
  FormControl,
  Select, 
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import Images from '../../config/images'
import { useHistory } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [language, setLanguage] = React.useState(0);
  const history = useHistory();

  const handleDrawer = isOpen => {
    setIsOpenMenu(isOpen);
  };

  const options = [
    {
      label: 'Products',
      path: 'https://www.fwd.com',
    },
    {
      label: 'Claims',
      path: 'https://www.fwd.com',
    },
    {
      label: 'Support',
      path: 'https://www.fwd.com',
    },
    {
      label: 'Awards',
      path: 'https://www.fwd.com',
    }
  ];

  const subOptions = [
    {
      label: 'Group insurance',
      path: 'https://www.fwd.com',
    },
    {
      label: 'FWD MAX',
      path: 'https://www.fwd.com',
    },
    {
      label: 'About us',
      path: 'https://www.fwd.com',
    },
  ]

  const languageOptions = [
    {
      label: 'EN',
      value: 0,
    },
    {
      label: 'VN',
      value: 1,
    },
    {
      label: 'JP',
      value: 2,
    },
  ]

  const list = () => (
    <div
      className={classes.listMenu}
      role="presentation"
      onClick={() => {
        handleDrawer(false);
      }}
    >
      <List>
        {options.map((option, index) => (
          <ListItem button key={index} classes={{ root: classes.rootListItem }}>
            <Link
              href={option.path}
              key={option.label}
              className={classes.menu_option}
              underline="none"
            >
              {option.label}
            </Link>
          </ListItem>
        ))}
        {subOptions.map((option, index) => (
          <ListItem button key={index} classes={{ root: classes.rootListItem }}>
            <Link
              href={option.path}
              key={option.label}
              className={classes.menu_option}
              underline="none"
            >
              {option.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  let textGood ;
  const hours = new Date().getHours();
  if(hours < 12) {
    textGood = 'Good morning,'
  } else if(hours < 18){
    textGood = 'Good afternoon,'
  } else if(hours < 24){
    textGood = 'Good evening,'
  }

  const profileItem = {
    name: 'Marial',
    linkImage: 'https://doisong.vn/stores/news_dataimages/hothuy/042020/26/22/dieu-thu-vi-ve-hotgirl-ngoai-thuong-dong-me-don-than-nha-tro-balanha-45-.4302.jpg',
  }

  const handleChangeSelect = (event) => {
		setLanguage(event.target.value);
	};

  const clickLogo = () =>{
    history.push('/dashboard');
  }

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Grid container>
          <Grid item xs={8} className={classes.header}>
            <img
              onClick={() => clickLogo()}
              src={Images.icLogo}
              alt={Images.icLogo}
              className={clsx(classes.logo, classes.left_session)}
            />
            <div className={classes.menuCenter}>
              {options.map(el => (
                <Link
                  href={el.path}
                  key={el.label}
                  className={classes.header_optional}
                  target="_blank"
                >
                  {el.label}
                </Link>
              ))}
            </div>
            <div className={classes.subMenuCenter}>
              {subOptions.map(el => (
                <Link
                  href={el.path}
                  key={el.label}
                  className={classes.header_optional}
                  target="_blank"
                >
                  {el.label}
                </Link>
              ))}
            </div>
          </Grid>
          <Grid item xs={4} container>
            <Grid container justify="flex-end" className={classes.profile}>
              <Grid className={classes.customAvatar}>
                <Avatar alt="Remy Sharp" src={profileItem.linkImage} className={classes.avatar}/>
              </Grid>
              <div className={classes.profileAvatar}>
                <div>{textGood}</div>
                <div>{profileItem.name} !</div>
              </div>
              <img src={Images.icCallCenter} alt={Images.icCallCenter} className={classes.customIcon} />
              <img src={Images.icSearch} alt={Images.icSearch} className={classes.customIcon} />
              <FormControl classes={{root: classes.rootFormControl}}>
								<Select
                  disableUnderline
                  IconComponent={() => (
                    <img src={Images.icDropdown} alt={Images.icDropdown} />
                  )}
									classes={{root: classes.rootSelect}}
									onChange={handleChangeSelect}
									value={language}>
									{languageOptions && languageOptions.map((item, index) => (
										<MenuItem value={item.value} key={item.value}> {item.label} </MenuItem>
									))}
								</Select>
							</FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.menuHeader}>
          <img src={Images.icLogo} alt={Images.icLogo} className={classes.logo} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.nav_header}
            onClick={() => {
              handleDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={isOpenMenu}
            onClose={() => {
              handleDrawer(false);
            }}
            classes={{ paper: classes.paper }}
          >
            <div className={classes.drawerHeader}>
              <div className={classes.linkHeader}>
                <img src={Images.icLogo} alt={Images.icLogo} className={classes.logo} />
              </div>
              <IconButton
                onClick={() => {
                  handleDrawer(false);
                }}
              >
                <CloseIcon className={classes.menuIcon} />
              </IconButton>
            </div>
            {list()}
          </Drawer>
        </div>
      </Hidden>
    </div>
  );
}

export default Header
