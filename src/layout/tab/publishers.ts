import {
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfig,
} from 'react-navigation';
import {
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import {PublishersPage} from '../../pages/publishers';
import {Helpers} from '../../helpers';

export const PublisherTab: NavigationRouteConfig<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>, any>>  = {
  screen: PublishersPage,
  navigationOptions: {
    title: "Publishers",
    tabBarIcon: ({ tintColor }) => Helpers.getIcon("building", 25,  tintColor)
  },
};
