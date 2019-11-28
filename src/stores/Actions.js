import { get } from './Services';
import { user } from './Types';

const urlUser = 'https://api.github.com/users/lllllllll';
export const fetchUser = () => dispatch => { get(dispatch, user, urlUser); };