import {Service} from '../index';
import {
  GameServiceRequestModel,
  GamesServiceResponseModel,
} from './model';

export class GameService {

  static path: string = "games";

  static request = () => {

    Service.makeGetRequest<GameServiceRequestModel, GamesServiceResponseModel >(GameService.path, {}).then(result => {

      console.log(result);

    }).catch(error => {

      console.log(error);

    })

  }

}
