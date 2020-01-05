import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import {gamesPageSearchGamesSaga} from '../pages/games/view/redux/games-page-saga';

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([fork(
    gamesPageSearchGamesSaga
  )]);
};

