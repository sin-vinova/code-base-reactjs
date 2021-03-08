import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import createPersistReducer from 'redux/reducers/persist';
import { authenticationReducer, authenticationType } from './authentication';

const createRootReducer = (history) => {
  const reducers = combineReducers({
    authentication: authenticationReducer,
    router: connectRouter(history),
  });
  return createPersistReducer(reducers);
};

export default createRootReducer;
