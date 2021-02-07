/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import styles from './Styles';

export interface Props {
  style?: any;
  children?: any;
}

class HeaderLeft extends React.PureComponent<Props> {
  render() {
    const { style, children } = this.props;
    return <Text style={[styles.left, style]}>{children}</Text>;
  }
}

export default HeaderLeft;
