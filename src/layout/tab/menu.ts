import {
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfig,
} from 'react-navigation';
import {
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import {MenuPage} from '../../pages/menu';
import {Helpers} from '../../helpers';

export const MenuTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>, any>> ={
  screen: MenuPage,
  navigationOptions: {
    title: "Opções",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("bars", 25,  tintColor)
  },
};
