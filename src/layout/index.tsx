import React from 'react';
import { View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AllGamesPage} from '../pages/all-games';
import {BestGamesPage} from '../pages/best-games';
import {ConfigPage} from '../pages/config';
import {createAppContainer} from 'react-navigation';

const App = () => {

  const TabNavigator = createBottomTabNavigator({
    AllGames: AllGamesPage,
    BestGames: BestGamesPage,
    Config: ConfigPage,
  });

  return createAppContainer(TabNavigator);

};

export default App;
