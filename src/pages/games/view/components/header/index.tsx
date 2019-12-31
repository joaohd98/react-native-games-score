import React from 'react';
import {TouchableOpacity} from 'react-native';
import {GamesHeaderComponentStyle} from './styles';

export const GamesHeaderComponent = () => {

  const {
    Input,
    SearchIcon,
    CloseIcon,
    BarIcon,
  } = GamesHeaderComponentStyle;

  return ({
    headerTitle: (
      <>
        <SearchIcon name="search" />
        <Input/>
        <TouchableOpacity>
          <CloseIcon name="times-circle" />
        </TouchableOpacity>
      </>
    ),
    headerRight: (
      <TouchableOpacity>
        <BarIcon name="filter"/>
      </TouchableOpacity>
    ),
    headerTitleContainerStyle: {
      left: 10,
      right: 45,
    },
  });

};
