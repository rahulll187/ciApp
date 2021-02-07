/* eslint-disable prettier/prettier */
/**
 * User DashBoard Screen
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import styles from './Styles/UserDashBoardScreenStyle';
import { signInRequest, logoutRequest } from '../../actions/UserAction';

export interface Props {
  navigation: any;
  signIn: any;
  logout: any;
}

export interface State {
  email: any;
  password: any;
}

class UserDashBoardScreen extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { logout } = this.props;
    return (
      <Container>
        <Header title={'User Dashboard'} />
        <Content bounces={false}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => logout()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    signIn: signInRequest,
    logout: logoutRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashBoardScreen);
