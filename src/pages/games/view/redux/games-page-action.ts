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
  GAMES_FETCH_REQUESTED = "GAMES_FETCH_REQUESTED",
  GAMES_FETCH_FINISHED = "GAMES_FETCH_FINISHED",
  GAMES_SEARCH_START_TYPING = "GAMES_SEARCH_START_TYPING",
  GAMES_SEARCH_FINISHED_TYPING_REQUEST = "GAMES_SEARCH_FINISHED_TYPING_REQUEST",
  GAMES_INCREASE_FETCH_REQUESTED = "GAMES_INCREASE_FETCH_REQUESTED",
  GAMES_INCREASE_FETCH_FINISHED = "GAMES_INCREASE_FETCH_FINISHED",
}

export interface GamePageActionType {
  type: GamesPageActionConst,
  payload: GamesPageModel.Props
}

export class GamesPageAction {

  static getGamesFetch = (filters: GameServiceRequestModel) => ({
    type: GamesPageActionConst.GAMES_FETCH_REQUESTED,
    payload: {
      status: ServiceStatus.loading,
      filters: filters
    }
  });

  static getGamesFinished = (result: ServiceResponse<GamesServiceResponseModel>) => ({
    type: GamesPageActionConst.GAMES_FETCH_FINISHED,
    payload: {
      status: result.status,
      games: result.response
    }
  });

  static startTypingSearch = () => ({
    type: GamesPageActionConst.GAMES_SEARCH_START_TYPING,
    payload: {
      status: ServiceStatus.loading
    }
  });

  static finishedTypingSearch = (filters: GameServiceRequestModel) => ({
    type: GamesPageActionConst.GAMES_SEARCH_FINISHED_TYPING_REQUEST,
    payload: {
      filters: filters,
      games: [],
    }
  });


  static increaseGameListFetch = (games: GamesServiceResponseModel) => ({
    type: GamesPageActionConst.GAMES_INCREASE_FETCH_REQUESTED,
    payload: {
      games: games
    }
  });

  static increaseGameListFinished = (result: ServiceResponse<GamesServiceResponseModel>) => ({
    type: GamesPageActionConst.GAMES_INCREASE_FETCH_FINISHED,
    payload: {
      status: result.status,
      games: result.response,
    }
  });




}
