import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MenuPage} from '../pages/menu';
import {createAppContainer} from 'react-navigation';
import {GamesPage} from '../pages/games';
import {GenresPage} from '../pages/genres';
import {PublishersPage} from '../pages/publishers';

const App = () => {

  const TabNavigator = createBottomTabNavigator({
    Games: GamesPage,
    Genres: GenresPage,
    Publishers: PublishersPage,
    Menu: MenuPage,
  });

  return createAppContainer(TabNavigator);

};

export default App;
