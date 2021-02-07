/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button } from 'react-native';
import styles from './Styles';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import { TouchableOpacity } from './../';
import HeaderTitle from './Title';

export interface Props {
  style?: any;
  children?: any;
  transparent?: boolean;
  title?: string;
  titleStyle?: any;
  hasBackBtn?: boolean;
  onBackPress?: any;
  navigation?: any;
  rightBtnImg?: any;
  rightBtnPress?: any;
}

export default class Header extends React.PureComponent<Props> {
  static TITLE = HeaderTitle;

  static LEFT = HeaderLeft;

  static RIGHT = HeaderRight;

  render() {
    const {
      style,
      children,
      transparent,
      hasBackBtn,
      navigation,
      title,
      titleStyle,
      onBackPress,
      rightBtnImg,
      rightBtnPress
    } = this.props;
    return (
      <View style={[styles.header, style, transparent && styles.transparent]}>
        {title && (
          <HeaderLeft style={titleStyle}>{title}</HeaderLeft>
        )}
        {rightBtnImg && (
          <HeaderRight>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() => {
                if (rightBtnPress) {
                  rightBtnPress();
                }
              }}>
              {rightBtnImg}
            </TouchableOpacity>
          </HeaderRight>
        )}
        {/* {title && <HeaderTitle style={titleStyle}>{title}</HeaderTitle>} */}
        {children}
      </View>
    );
  }
}
