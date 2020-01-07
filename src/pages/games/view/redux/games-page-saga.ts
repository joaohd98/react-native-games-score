import { put, takeEvery, call, all } from 'redux-saga/effects'
import {
  GamePageActionType, GamesPageAction,
  GamesPageActionConst,
} from './games-page-action';
import {GameService} from '../../../../services/games/service';

function *searchGames(action: GamePageActionType) {

  const result = yield call(() => GameService.getGames(action.payload.filters!));

  yield put(GamesPageAction.searchGamesFinished(result));

}

function *increaseGamesList(action: GamePageActionType) {

  const result = yield call(() => GameService.increaseGames(action.payload.games!));

  yield put(GamesPageAction.increaseGameListFinished(result));

}

export const gameListSaga = [
  takeEvery(GamesPageActionConst.GAMES_FETCH_REQUESTED, searchGames),
  takeEvery(GamesPageActionConst.INCREASE_GAMES_FETCH_REQUESTED, increaseGamesList)
];


