import React, { useState, useEffect } from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import useStyles from './styles';
import useForm from 'react-hook-form';
import Images from 'config/images'
import { Dispatch } from 'redux';
import { useDispatch, connect } from 'react-redux';
import { IS_HELPERS } from 'redux/reducers/authentication/actionTypes'


const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);
  const getHelpers = () => {
    dispatch({
      type: IS_HELPERS
    })
  }

  return (
      <Grid 
        container 
        alignItems="center" 
        direction="column" 
        classes={{ root: classes.layoutLogin }}
      >
        <Grid item container justify="center">
          <Grid classes={{ root: classes.containerLogoLogin }}>
            <img src={Images.logo}/>
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <Grid container alignItems="center" justify="center">
            <form 
              className={classes.formLogin}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                placeholder="Username"
                name="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Images.icUser}/>
                    </InputAdornment>
                  ),
                }}
                classes={{ root: classes.inputLogin }}
                inputRef={register({
                  required: "Required"
                })}
              />
              {errors.username && errors.username.type === 'required' && <div>Required</div>}

              <TextField
                placeholder="Password"
                name="password"
                classes={{ root: classes.inputLogin }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Images.iclock}/>
                    </InputAdornment>
                  ),
                }}
                inputRef={register({
                  required: "Required",
                  validate: value => value !== "admin" || "Nice try!"
                })}
              />
              {errors.password && errors.password.type === 'required' && <div>Required</div>}
              <div className={classes.btnLogin}>
              </div>
            </form>
          </Grid>
        </Grid>
        <Grid>
          <p>Don't know your login details? <span className={classes.textDescription} onClick={getHelpers}>Get Help</span></p>
        </Grid>
      </Grid>
  );
}

export default connect()(LoginForm);