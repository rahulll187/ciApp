import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBoxSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10rem'
  },
  textBox: {
    height: '50rem',
    width: '86%',
    marginTop: '15rem',
    paddingLeft: '10rem',
    backgroundColor: 'red'
  },
  loginBtn: {
    height: '50rem',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: '30rem'
  },
  loginTxt: {
    color: Colors.white
  }
})