import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from '../../../../services/games/model';
import {ServiceStatus} from '../../../../services/model';
import {GamesPageAction} from '../redux/games-page-action';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export const GamePageConstants = {
  warningTitle: "Warning",
  warningStatusNoInternetConnection: "Something went wrong, try again later!",
  warningStatusException: "There is no internet connection, try again later!",
  warningButton: "Try Again"
};
