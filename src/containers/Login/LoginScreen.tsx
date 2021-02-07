/* eslint-disable prettier/prettier */
/**
 * First Screen
 */

import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Loader } from '../../components';
import styles from './Styles/LoginScreenStyle';
import { signInRequest } from '../../actions/UserAction';

export interface Props {
  navigation: any;
  signIn: any;
  loading: boolean;
}

export interface State {
  email: any;
  password: any;
}

class FirstScreen extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn = () => {
    const { signIn } = this.props;
    const { email, password } = this.state;
    if (email.trim().length > 0 && password.trim().length > 0) {
      let params = {
        emailId: email,
        password: password
      }
      signIn(params)
    } else {
      Alert.alert('Required', 'All field Required')
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <Container>
        <Header title={'Login'} />
        <Content contentContainerStyle={styles.container} bounces={false}>
          <View style={styles.inputBoxSection}>
            <TextInput
              style={styles.textBox}
              placeholder={'Email'}
              onChangeText={(value: any) => this.setState({ email: value })}
              autoCapitalize={false}
            />
            <TextInput
              style={styles.textBox}
              placeholder={'Password'}
              onChangeText={(value: any) => this.setState({ password: value })}
              autoCapitalize={false}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.signIn()}>
            <Text style={styles.loginTxt}>LOGIN</Text>
          </TouchableOpacity>
        </Content>
        <Loader show={loading} />
      </Container>
    );
  }
}

function mapStateToProps(user: any) {
  return {
    loading: user.user.loading
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    signIn: signInRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
