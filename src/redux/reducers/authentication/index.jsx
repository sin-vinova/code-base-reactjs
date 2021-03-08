import produce from 'immer';
import {
  IS_HELPERS,
  IS_NOT_HELPERS,
  IS_GET_INFO,
  IS_NOT_GET_INFO
} from './actionTypes';

const initial = {
  isHelpers: false,
  isGetInfo: false
};

export const authenticationReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case IS_HELPERS: {
        draft['isHelpers'] = true;
        break;
      }
      case IS_NOT_HELPERS: {
        draft['isHelpers'] = false;
        break;
      }
      case IS_GET_INFO: {
        draft['isGetInfo'] = true;
        break;
      }
      case IS_NOT_GET_INFO: {
        draft['isGetInfo'] = false;
        break;
      }
      default: break;
    }
  });

