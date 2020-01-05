import {GamesPageModel} from '../pages/games/view/providers/games-page-model';
import {combineReducers} from 'redux';
import {GamesPageReducer} from '../pages/games/view/redux/games-page-reducer';

export interface StatesReducers {
  gamesPageReducer: GamesPageModel.Props
}

export const Reducers = combineReducers({
  gamesPageReducer: GamesPageReducer
});
