/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors } from '../../../theme';
import FontHelper from '../../../helpers/FontHelper';

export default EStyleSheet.create({
  header: {
    width: '100%',
    height: '55rem',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 99999,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  transparent: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
      },
      android: {
        elevation: null,
      },
    }),
  },
  left: {
    flexDirection: 'row',
    height: '100%',
    position: 'absolute',
    left: '20rem',
    top: '15rem',
    fontSize: '20rem'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  title: {
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '70%',
    height: '100%',
    left: '15%',
  },
  titleTxt: {
    ...FontHelper.font({ fontWeight: '500' }),
    fontSize: '18rem',
    color: Colors.black,
    top: '5rem',
    '@media android': {
      top: 0,
    },
  },
  backBtn: {
    flex: 1,
    top: '5rem',
  },
});
