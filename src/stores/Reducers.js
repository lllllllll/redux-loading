import { combineReducers } from 'redux';
import { user, userAll } from './Types';

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
const getUserAll = (state = {}, action) => checkAction(state, action, userAll);

export default combineReducers({
  getUser, getUserAll
});
