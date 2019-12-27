import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MenuPage} from '../pages/menu';
import {
  createAppContainer,
} from 'react-navigation';
import {GamesPage} from '../pages/games';
import {GenresPage} from '../pages/genres';
import {PublishersPage} from '../pages/publishers';
import Icon from 'react-native-vector-icons/FontAwesome';


const getBottomTabNavigation = () => {

  const getIcon = (iconName: string, tintColor: string | undefined) => <Icon name={iconName} size={25} color={tintColor} />;

  return createBottomTabNavigator({
    games: {
      screen: GamesPage,
      navigationOptions: {
        title: "Games",
        tabBarIcon: ({ tintColor }) => getIcon("gamepad",  tintColor)
      },
    },
    genres: {
      screen: GenresPage,
      navigationOptions: {
        title: "Gêneros",
        tabBarIcon: ({ tintColor }) => getIcon("book",  tintColor)
      },
    },
    publishers: {
      screen: PublishersPage,
      navigationOptions: {
        title: "Publishers",
        tabBarIcon: ({ tintColor }) => getIcon("building",  tintColor)
      },
    },
    menu: {
      screen: MenuPage,
      navigationOptions: {
        title: "Opções",
        tabBarIcon: ({ tintColor }) => getIcon("bars",  tintColor)
      },
    },
  });
};


const Layout = () => {

  const tabNavigation = getBottomTabNavigation();

  const AppContainer = createAppContainer(tabNavigation);

  return <AppContainer/>

};

export default Layout;
