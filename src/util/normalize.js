import {
  PixelRatio,
} from 'react-native';

export const normalizeFontSize = (size) => (size * PixelRatio.get());
