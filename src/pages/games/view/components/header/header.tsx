import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {GamesHeaderComponentStyle} from './header-styles';
import {
  NavigationScreenProp, NavigationState,
} from 'react-navigation';
import {GamesPageModel} from '../../providers/games-page-model';
import {Routes} from '../../../../../router/routes';
import {HeaderSearchBar} from './search-bar';
import {GameServiceRequestModel} from '../../../../../services/games/model';

const getHeaderRight = (navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props>) => {

  const {
    BarIcon,
  } = GamesHeaderComponentStyle;

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.gamesFilter)}>
      <BarIcon name="filter"/>
    </TouchableOpacity>
  );

};

export const GamesHeaderComponent = (screenProp: { navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props> }) => {

  if(!screenProp.navigation.state.params)
    return {};

  const {filters, functions} = screenProp.navigation.state.params!;
  const changeText = (filters: GameServiceRequestModel) => functions?.changeSearchText(filters);

  return ({
    headerTitle: <HeaderSearchBar
      navigation={screenProp.navigation}
      filters={filters!}
      changeText={changeText} />,
    headerRight: getHeaderRight(screenProp.navigation),
    headerTitleContainerStyle: {
      left: 10,
      right: 45,
    },
  });

};
