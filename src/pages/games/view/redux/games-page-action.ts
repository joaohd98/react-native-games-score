import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from '../../../../services/games/model';
import {GamesPageModel} from '../providers/games-page-model';
import {Dispatch} from 'redux';
import {
  ServiceResponse,
  ServiceStatus,
} from '../../../../services/model';

export enum GamesPageActionConst {
  GAMES_FETCH_REQUESTED = "GAMES_PAGE_FETCH_REQUESTED",
  GAMES_FETCH_FINISHED = "GAMES_PAGE_FETCH_FINISHED",
}

export interface GamePageActionType {
  type: GamesPageActionConst,
  payload: GamesPageModel.Props
}

export class GamesPageAction {

  static searchGamesFetch = (filter: GameServiceRequestModel) => {

    return (dispatch: Dispatch<GamePageActionType>) => {

      dispatch({
        type: GamesPageActionConst.GAMES_FETCH_REQUESTED,
        payload: {
          status: ServiceStatus.loading,
        }
      });

    }

  };

  static searchGamesFinished = (result: ServiceResponse<GamesServiceResponseModel>) => {

    return (dispatch: Dispatch<GamePageActionType>) => {

      dispatch({
        type: GamesPageActionConst.GAMES_FETCH_FINISHED,
        payload: {
          status: result.status,
          games: result.response
        }
      });

    }

  }

}
