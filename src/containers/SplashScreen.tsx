/* eslint-disable prettier/prettier */
/**
 * Splash Screen
 */

import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Content} from '../components';
import {StyleSheet} from 'react-native';
import {
  initApp,
} from '../actions';

export interface Props {
  navigation: any;
  init: typeof initApp;
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 200,
    alignSelf: 'center',
    fontSize: 24,
  },
});
class SplashScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const {navigation, init} = this.props;
    // navigation.navigate('Login');
    init(true);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.loading}>loading...</Text>
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
    init: initApp,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
