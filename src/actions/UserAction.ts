import AsyncStorage from '@react-native-community/async-storage';
import * as types from './types';
import SplashScreen from 'react-native-splash-screen';
import BackHandler from '../helpers/BackHandler';

export const initApp = (backHandler = false) => {
  // AsyncStorage.clear();
  return (dispatch: any) => {
    AsyncStorage.getItem('user', (error: any, data: any) => {
      if (error || !data) {
        dispatch(checkOnBoardingStatus());
      } else {
        const user = JSON.parse(data);
        dispatch(signInSuccess(user));
      }
    });
  }
};

export const checkOnBoardingStatus = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.INIT_ROUTE,
    });
    dispatch(hideSplashScreen());
  };
};

export const hideSplashScreen = () => {
  return () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  };
};

///////////////////////////////////////////////////////

export const signInRequest = (params: any) => ({
  type: types.SIGNIN_REQUEST,
  payload: params
});

export const signInSuccess = (user: any): any => {
  console.log('user', user);
  return (dispatch: any) => {
    dispatch({
      type: types.SIGNIN_SUCCESS,
      payload: { user }
    });
  };
};

export const signInFail = (errorMsg: string) => ({
  type: types.SIGNIN_FAIL,
  payload: { errorMsg }
});

/////////////////////////////////////////////////////

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = (): any => {
  return (dispatch: any) => {
    AsyncStorage.clear();
    dispatch(initApp());
    dispatch({
      type: types.LOGOUT_SUCCESS
    });
  };
};

export const logoutFail = (errorMsg: string) => ({
  type: types.LOGOUT_FAIL,
  payload: { errorMsg }
});
