import {
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfig,
} from 'react-navigation';
import {
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import {GamesPage} from '../../pages/games/view';
import {Helpers} from '../../helpers';

export const GamesTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>, any>>  = {
  screen: GamesPage,
  navigationOptions: {
    title: "Games",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("gamepad", 25, tintColor)
  },
};
