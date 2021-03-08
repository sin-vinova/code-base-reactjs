import React, { lazy, Suspense } from 'react';
import { GridFullHeight } from 'components';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const Authentication = lazy(() => import('modules/Authentication'));
const Dashboard = lazy(() => import('modules/Dashboard'));

const Routes = props => (
  <Suspense
    fallback={
      <GridFullHeight
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <CircularProgress style={{ color: '#E9781C' }} />
      </GridFullHeight>
    }
  >
    <Switch>
      {/* <PrivateRoute
        path={routes.payment}
        component={Payment}
        isLoggedIn={Boolean(props.auth.CLIENTCODE)}
      /> */}
      {/* <PrivateRoute
        path={routes.payment}
        component={Payment}
        isLoggedIn={Boolean(localStorage.getItem('POLICYNUMBER'))}
      /> */}
      <Route exact path='/' component={Authentication} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </Suspense>
);

export default connect(null)(Routes);
