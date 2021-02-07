import * as types from '../actions/types';

const initialState = {
  loading: false
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
    case types.SIGNIN_SUCCESS:
      return { ...state, ...action.payload, loading: true };
    case types.SIGNIN_FAIL:
    case types.LOGOUT_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
