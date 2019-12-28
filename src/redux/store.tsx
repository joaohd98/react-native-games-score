import {applyMiddleware, combineReducers, createStore} from "redux";
import {GamesPageReducer} from '../pages/games/view/redux/games-page-reducer';

export interface StatesReducers {
  gamesPageReducer: any
}

const reducers = combineReducers({
  gamesPageReducer: GamesPageReducer
});

const store = createStore(reducers, applyMiddleware());

export { store };
