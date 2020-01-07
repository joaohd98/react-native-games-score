import {GamesPageModel} from '../providers/games-page-model';
import {ServiceStatus} from '../../../../services/model';
import {
  GamePageActionType, GamesPageAction, GamesPageActionConst,
} from './games-page-action';

export const GamesPageInitialState: GamesPageModel.Props = {
  games: null,
  filters: {
    search: "",
    platforms: null,
    publishers: null,
    genres: null,
    dates: null,
    ordering: null,
    page_size: 10,
  },
  status: ServiceStatus.noAction,
  functions: {
    getGames: (filters) => GamesPageAction.getGamesFetch(filters),
    changeSearchText: (filters) => GamesPageAction.changeSearchText(filters),
    increaseGameList: (games) => GamesPageAction.increaseGameListFetch(games),
  }
};

export const GamesPageReducer = (state = GamesPageInitialState, action: GamePageActionType): GamesPageModel.Props => {

  switch (action.type) {

    case GamesPageActionConst.GAMES_FETCH_REQUESTED: {
      return {
        ...state,
        status: action.payload.status,
      }
    }

    case GamesPageActionConst.GAMES_FETCH_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        games: action.payload.games
      }
    }

    case GamesPageActionConst.GAMES_SEARCH_FETCH_REQUESTED: {
      console.log(action.payload);
      return {
        ...state,
        status: action.payload.status,
        filters: action.payload.filters,
        games: action.payload.games
      }
    }

    case GamesPageActionConst.INCREASE_GAMES_FETCH_FINISHED: {
      return {
        ...state,
        games: {
          next: action.payload.games?.next!,
          results: [...state.games?.results!, ...action.payload.games?.results!],
        }
      }
    }

    default: return state;
  }
};
