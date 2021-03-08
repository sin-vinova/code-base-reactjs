import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Routes from 'routers';
import { connect } from 'react-redux';
//require('dotenv').config({ path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production' });

const mapStateToProps = (state) => {
  return {
  };
};

const App = ({ history}) => {
  return (
    <div style={{height: '100%'}}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </div>
  );
};

export default connect(mapStateToProps)(App);
