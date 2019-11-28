import { combineReducers } from 'redux';
import { user } from './Types';

function checkAction(state, action, typeCase) {
  switch (action.type) {
    case typeCase.success:
    case typeCase.failure:
    case typeCase.loading:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
};

const getUser = (state = {}, action) => checkAction(state, action, user);

export default combineReducers({
  getUser,
});
