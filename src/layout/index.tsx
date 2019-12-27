import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createAppContainer,
} from 'react-navigation';
import {GamesTab} from './tab/games';
import {GenresTab} from './tab/genres';
import {MenuTab} from './tab/menu';
import {PublisherTab} from './tab/publishers';

const getBottomTabNavigation = () => {

  return createBottomTabNavigator({
    games: GamesTab,
    genres: GenresTab,
    publishers: PublisherTab,
    menu: MenuTab,
  });
};


const Layout = () => {

  const tabNavigation = getBottomTabNavigation();

  const AppContainer = createAppContainer(tabNavigation);

  return <AppContainer/>

};

export default Layout;
