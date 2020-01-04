import {Service} from '../service';
import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from './model';
import {ServiceResposne} from '../model';

export class GameService extends Service {

  static path: string = "games";

  static getGames = (request: GameServiceRequestModel): Promise<ServiceResposne<GamesServiceResponseModel>> => {

    return GameService.makeGetRequest<GamesServiceResponseModel, GameServiceRequestModel>(GameService.path,  request);

  }

}
