import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isHelper: state.authentication.isHelpers,
    isGetInfo: state.authentication.isGetInfo
  };
};


const Login = (props) => {
  const {  } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <p>Login</p>
    </Grid>
  );
}

export default connect(mapStateToProps)(Login)