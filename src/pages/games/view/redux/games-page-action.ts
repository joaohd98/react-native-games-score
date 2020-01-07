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
  INCREASE_GAMES_FETCH_REQUESTED = "GAMES_PAGE_INCREASE_GAMES_REQUESTED",
  INCREASE_GAMES_FETCH_FINISHED = "GAMES_PAGE_INCREASE_GAMES_FINISHED",
}

export interface GamePageActionType {
  type: GamesPageActionConst,
  payload: GamesPageModel.Props
}

export class GamesPageAction {

  static searchGamesFetch = (filters: GameServiceRequestModel) => ({
    type: GamesPageActionConst.GAMES_FETCH_REQUESTED,
    payload: {
      status: ServiceStatus.loading,
      filters: filters
    }
  });

  static searchGamesFinished = (result: ServiceResponse<GamesServiceResponseModel>) => ({
    type: GamesPageActionConst.GAMES_FETCH_FINISHED,
    payload: {
      status: result.status,
      games: result.response
    }
  });

  static increaseGameListFetch = (games: GamesServiceResponseModel) => ({
    type: GamesPageActionConst.INCREASE_GAMES_FETCH_REQUESTED,
    payload: {
      games: games
    }
  });

  static increaseGameListFinished = (result: ServiceResponse<GamesServiceResponseModel>) => ({
    type: GamesPageActionConst.INCREASE_GAMES_FETCH_FINISHED,
    payload: {
      status: result.status,
      games: result.response,
    }
  });




}
