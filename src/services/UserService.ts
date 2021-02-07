import Api from './Api';
import AsyncStorage from '@react-native-community/async-storage';

export const userSignIn = (params: any) => {
  console.log('params --->', params);
  return Api.post('/cihandler/api/emp/loginEmp', params);
};

export const logout = () => {
  return new Promise((resolve) => {
    try {
      // clear storage
      AsyncStorage.clear();
    } finally {
      resolve();
    }
  });
};

