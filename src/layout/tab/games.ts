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

export const GamesTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp>  = {
  screen: CreateStackNavigator([
    GamesPage
  ]),
  navigationOptions: {
    title: "Games",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("gamepad", 25, tintColor)
  },
};
