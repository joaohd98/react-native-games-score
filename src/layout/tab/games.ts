import {
  NavigationRouteConfig,
} from 'react-navigation';
import {
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import {GamesPage} from '../../pages/games/view';
import {Helpers} from '../../helpers';
import {CreateStackNavigator} from '../../router/stack-navigator';
import {FilterGamesPage} from '../../pages/games/sub-views/filter';

export const GamesTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp>  = {
  screen: CreateStackNavigator([
    FilterGamesPage,
    GamesPage,
  ]),
  navigationOptions: {
    title: "Games",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("gamepad", 25, tintColor)
  },
};
