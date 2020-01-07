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

export namespace GamesPageModel {

  export interface Props {
    games?: GamesServiceResponseModel | null ,
    filters?: GameServiceRequestModel
    status?: ServiceStatus,
    navigation?: NavigationScreenProp<Props>,
    functions?: {
      getGames: (filters: GameServiceRequestModel) => void,
      startTypingSearch: () => void,
      finishedTypingSearch: (filters: GameServiceRequestModel) => void,
      increaseGameList: (games: GamesServiceResponseModel) => void,
    }
  }

}
