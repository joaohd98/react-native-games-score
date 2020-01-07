import { put, takeEvery, call } from 'redux-saga/effects'
import {
  GamePageActionType, GamesPageAction,
  GamesPageActionConst,
} from './games-page-action';
import {GameService} from '../../../../services/games/service';

function *getGames(action: GamePageActionType) {

  const result = yield call(() => GameService.getGames(action.payload.filters!));

  yield put(GamesPageAction.getGamesFinished(result));

}

function *increaseGamesList(action: GamePageActionType) {

  const result = yield call(() => GameService.increaseGames(action.payload.games!));

  yield put(GamesPageAction.increaseGameListFinished(result));

}

export const gameListSaga = [
  takeEvery(GamesPageActionConst.GAMES_FETCH_REQUESTED, getGames),
  takeEvery(GamesPageActionConst.GAMES_SEARCH_FETCH_REQUESTED, getGames),
  takeEvery(GamesPageActionConst.INCREASE_GAMES_FETCH_REQUESTED, increaseGamesList),
];


