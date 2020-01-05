import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';

export class Helpers {

  static getIcon = (iconName: string, size: number, tintColor: string | undefined) => {
    return <Icon name={iconName} size={size} color={tintColor} />;
  };

}
