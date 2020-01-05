import {Service} from '../service';
import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from './model';
import {ServiceResponse} from '../model';

export class GameService extends Service {

  static path: string = "games";

  static getGames = (request: GameServiceRequestModel): Promise<ServiceResponse<GamesServiceResponseModel>> => {

    return GameService.makeGetRequest<GamesServiceResponseModel, GameServiceRequestModel>(GameService.path,  request);

  }

}
