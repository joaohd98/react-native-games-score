import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from '../../../../services/games/model';
import {ServiceStatus} from '../../../../services/model';
import {GamesPageAction} from '../redux/games-page-action';

export namespace GamesPageModel {

  export interface Props {
    games?: GamesServiceResponseModel | null ,
    filters?: GameServiceRequestModel
    status?: ServiceStatus,
    functions?: {
      searchGames: (filters: GameServiceRequestModel) => void,
      increaseGameList: (games: GamesServiceResponseModel) => void,
    }
  }

}
