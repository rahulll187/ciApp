/* eslint-disable prettier/prettier */
import { all } from 'redux-saga/effects';
import UserSaga from './UserSaga';

export default function* sagas() {
  yield all([UserSaga()]);
}
