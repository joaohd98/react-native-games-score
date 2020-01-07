import {Service} from '../service';
import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from './model';
import {ServiceResponse} from '../model';
import Config from 'react-native-config';

export class GameService extends Service {

  static url: string = Config.API_URL + "games";

  static getGames = (request: GameServiceRequestModel): Promise<ServiceResponse<GamesServiceResponseModel>> => {

    return GameService.makeGetRequest<GamesServiceResponseModel, GameServiceRequestModel>(GameService.url,  request);

  };

  static increaseGames = (request: GamesServiceResponseModel): Promise<ServiceResponse<GamesServiceResponseModel>> => {

    console.log(request.next);

    return GameService.makeGetRequest<GamesServiceResponseModel>(request.next, null);

  };

}
