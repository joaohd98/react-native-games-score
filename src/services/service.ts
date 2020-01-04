import Config from 'react-native-config';
import {ServiceResposne, ServiceStatus} from './model';

export class Service {

  static makeGetRequest  = async <Response, Request = {}>(path: string, parameters: Request, header: HeadersInit_ = {}): Promise<ServiceResposne<Response>> => {

    let pathGet = `${path}?`;

    for(let index in parameters) {
      pathGet += `${index}=${parameters[index]}`
    }

    return Service.makeRequest(pathGet, "GET", header, parameters)

  };

  static makePostRequest = async <Response, Request = {}>(path: string, parameters: Request, header: HeadersInit_ = {}): Promise<ServiceResposne<Response>> => {

    return Service.makeRequest(path, "POST", header, parameters)

  };

  private static makeRequest = async <Response>(path: string, method: "POST" | "GET", headers: HeadersInit_, body: BodyInit_): Promise<ServiceResposne<Response>> => {

    const url = Config.API_URL + path;

    try {

      let init: any = {
        method,
        headers,
      };

      if(method !== "GET")
        init = {...init, body};

      let response = await fetch(url, init);

      return {
        status: ServiceStatus.success,
        response: await response.json(),
      }

    } catch (error) {

      return {
        status: Service.hasConnection(error) ? ServiceStatus.exception : ServiceStatus.noInternetConnection,
      }

    }

  };

  private static hasConnection = (error: {message: string}): boolean => {
    return error.message !== "Network request failed";
  }

}
