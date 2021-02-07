/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/**
 *  Navigation Routes defind
 */
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../containers/Login/LoginScreen';
import SplashScreen from '../containers/SplashScreen';
import UserDashBoardScreen from '../containers/UserDashBoard/UserDashBoardScreen';

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: LoginScreen
    },
    UserDashBoard: {
      screen: UserDashBoardScreen
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigation;
