/* eslint-disable prettier/prettier */
/**
 * Helper class for font
 */
import _ from 'lodash';

// use post script names for font families
const Roboto: any = {
  '100': {fontFamily: 'Roboto-Thin'},
  '100italic': {fontFamily: 'Roboto-ThinItalic'},
  '200': {fontFamily: 'Roboto-Light'},
  '200italic': {fontFamily: 'Roboto-LightItalic'},
  '300': {fontFamily: 'Roboto-Regular'},
  '300italic': {fontFamily: 'Roboto-Italic'},
  '400': {fontFamily: 'Roboto-Medium'},
  '400italic': {fontFamily: 'Roboto-MediumItalic'},
  // '500': {fontFamily: 'Roboto-Bold'},
  '500italic': {fontFamily: 'Roboto-BoldItalic'},
  '600': {fontFamily: 'Roboto-Black'},
  '600italic': {fontFamily: 'Roboto-BlackItalic'},
  '700': {fontFamily: 'Roboto-Black'},
  '700italic': {fontFamily: 'Roboto-BlackItalic'},
};

const FONTS: any = {
  Roboto,
};

/**
 * Helper class for cross-platform font styles
 */
class FontHelper {
  static font(fontParams: {
    fontFamily?: any;
    fontStyle?: any;
    fontWeight?: string;
  }) {
    const fontFamily = fontParams.fontFamily || 'Roboto';
    const fontWeight = fontParams.fontWeight || '300';
    const fontStyle = fontParams.fontStyle || '';

    return {
      ..._.omit(fontParams, [fontFamily, fontFamily, fontStyle]),
      ...FONTS[fontFamily][fontWeight + fontStyle],
    };
  }
}

export default FontHelper;
