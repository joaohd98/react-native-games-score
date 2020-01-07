import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  NavigationScreenProp, NavigationState,
} from 'react-navigation';
import {GamesPageModel} from '../../providers/games-page-model';
import {Routes} from '../../../../../router/routes';
import {HeaderSearchBar} from './search-bar';
import {GameServiceRequestModel} from '../../../../../services/games/model';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../../../theme/colors';

const getHeaderRight = (navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props>) => {

  const FilterIcon = styled(Icon) `
    font-size: 25px;
    color: ${Colors.blue}
  `;

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.gamesFilter)}>
      <FilterIcon name="filter"/>
    </TouchableOpacity>
  );

};

export const GamesHeaderComponent = (screenProp: { navigation: NavigationScreenProp<NavigationState, GamesPageModel.Props> }) => {

  if(!screenProp.navigation.state.params)
    return {};

  const {filters, functions} = screenProp.navigation.state.params!;
  const startTyping = () => functions?.startTypingSearch();
  const finishedTyping = (filters: GameServiceRequestModel) => functions?.finishedTypingSearch(filters);

  return ({
    headerTitle: <HeaderSearchBar
      navigation={screenProp.navigation}
      filters={filters!}
      startTyping={startTyping}
      finishedTyping={finishedTyping}
    />,
    headerRight: getHeaderRight(screenProp.navigation),
    headerTitleContainerStyle: {
      left: 10,
      right: 45,
    },
  });

};
