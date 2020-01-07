import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {gameListSaga} from '../pages/games/view/redux/games-page-saga';

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([
    ...gameListSaga,
  ]);
};


