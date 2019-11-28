import { get } from './Services';
import { user, userAll } from './Types';

const urlUser = 'https://api.github.com/users/lllllllll';
export const fetchUser = () => dispatch => get(dispatch, user, urlUser);
const urlAllUser = 'https://api.github.com/users';
export const fetchUserAll = () => dispatch => get(dispatch, userAll, urlAllUser);
