import { put, call } from 'redux-saga/effects';
import { registerUserService } from '../services/authenticationService';

import * as types from '../actions'

//This function is responsible for calling registerUserService, which makes an ajax call to our server to register new user
export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}