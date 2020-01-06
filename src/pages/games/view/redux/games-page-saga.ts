import { put, takeLatest, call } from 'redux-saga/effects'
import {
  GamePageActionType, GamesPageAction,
  GamesPageActionConst,
} from './games-page-action';
import {GameService} from '../../../../services/games/service';

export function *gamesPageSearchGamesSaga() {
  yield takeLatest(GamesPageActionConst.GAMES_FETCH_REQUESTED, searchGames);
}

function *searchGames(action: GamePageActionType) {

  const result = yield call(() => GameService.getGames(action.payload.filters!));

  yield put(GamesPageAction.searchGamesFinished(result));

}



