import {GamesPageModel} from '../providers/games-page-model';
import {
  GameServiceRequestModel,
} from '../../../../services/games/model';
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
    ordering: null
  },
  status: ServiceStatus.noAction,
  functions: {
    searchGames: (filters: GameServiceRequestModel) => GamesPageAction.searchGamesFetch(filters)
  }
};

export const GamesPageReducer = (state = GamesPageInitialState, action: GamePageActionType) => {

  switch (action.type) {

    case GamesPageActionConst.GAMES_FETCH_REQUESTED: {
      return {
        ...state,
        status: ServiceStatus.loading,
      }
    }

    case GamesPageActionConst.GAMES_FETCH_FINISHED: {
      return {
        ...state,
        status: action.payload.status,
        games: action.payload.games
      }
    }

    default: return state;
  }
};
