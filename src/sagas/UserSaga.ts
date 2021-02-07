import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import * as UserAction from '../actions/UserAction';
import * as UserService from '../services/UserService';
import * as types from '../actions/types';

function* signIn(action: any) {
  try {
    const params = action.payload || {};
    const res = yield call(UserService.userSignIn, params);
    if (res.status && res.status === 'success') {
      yield AsyncStorage.setItem('user', JSON.stringify(res.result));
      yield put(UserAction.signInSuccess(res.result))
    } else {
      Alert.alert('Error', 'User not found!');
      yield put(UserAction.signInFail('User not found!'));
    }
  }
  catch (error) {
    Alert.alert('Error', 'Something went wrong!');
    yield put(UserAction.signInFail('Something went wrong!'));
  }
}

function* logout(action: any) {
  try {
    const params = action.payload || {};
    yield call(UserService.logout);
  } finally {
    yield put(UserAction.logoutSuccess());
  }
}


export default function* watchAuthRequests() {
  yield takeEvery(types.SIGNIN_REQUEST, signIn);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
}
