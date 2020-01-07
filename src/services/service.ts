import {ServiceResponse, ServiceStatus} from './model';

export class Service {

  static makeGetRequest  = async <Response, Request = null>(url: string, parameters: Request, header: HeadersInit_ = {}): Promise<ServiceResponse<Response>> => {

    if(parameters) {

      let firstTry = true;

      for(let index in parameters) {

        if (parameters[index]) {

          if(firstTry) {
            url += `?${index}=${parameters[index]}`;
            firstTry = false
          }

          else
            url += `&${index}=${parameters[index]}`;

        }

      }

    }

    return Service.makeRequest(url, "GET", header, parameters)

  };

  static makePostRequest = async <Response, Request = null>(url: string, parameters: Request, header: HeadersInit_ = {}): Promise<ServiceResponse<Response>> => {

    return Service.makeRequest(url, "POST", header, parameters)

  };

  private static makeRequest = async <Response>(url: string, method: "POST" | "GET", headers: HeadersInit_, body: BodyInit_): Promise<ServiceResponse<Response>> => {

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
