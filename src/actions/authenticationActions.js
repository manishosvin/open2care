// importing the index file exports constants
import * as types from './index';

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};