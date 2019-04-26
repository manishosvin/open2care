import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './authenticationSaga';

import * as types from '../actions';

//exporting a generator function which basically watches for the REGISTER_USER action and makes a call to registerSaga.
export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
}