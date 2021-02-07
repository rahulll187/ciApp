/* eslint-disable prettier/prettier */
import { TouchableOpacity as TouchableOpacityClass } from 'react-native';
import { WithPreventDoubleClick } from './TouchableOpacity/WithPreventDoubleClick';


import Container from './Container';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

const TouchableOpacity = WithPreventDoubleClick(TouchableOpacityClass);

export {Container, Content, Loader, Header, Footer, TouchableOpacity};
