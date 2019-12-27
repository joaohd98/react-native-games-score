import {
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfig,
} from 'react-navigation';
import {
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import {GenresPage} from '../../pages/genres';
import {Helpers} from '../../helpers';

export const GenresTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>, any>> = {
  screen: GenresPage,
  navigationOptions: {
    title: "Gêneros",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("book", 25, tintColor)
  },
};
