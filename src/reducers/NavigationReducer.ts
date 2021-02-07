/* eslint-disable prettier/prettier */
import { NavigationActions, SwitchActions } from 'react-navigation';

import AppNavigator from '../navigation/AppNavigation';
import * as types from '../actions/types';

let Navigator: any = AppNavigator;

if (!AppNavigator) {
  Navigator = {
    router: {
      getStateForAction: (data: any) => data,
      getActionForPathAndParams: () => null,
    },
  };
}

const initialState = AppNavigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams('Splash'),
);

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate(action),
        state,
      );
    case 'Navigation/BACK':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(action),
        state,
      );
    case types.INIT_ROUTE:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
    case types.SIGNIN_SUCCESS:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'UserDashBoard' })
      )
    default:
      return state;
  }
};

export default reducer;
