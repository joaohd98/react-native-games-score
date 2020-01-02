import Config from 'react-native-config';

export class Service {

  static makeGetRequest  = async <Request, Response>(path: string, parameters: Request, header: HeadersInit_ = {}): Promise<Response> => {

    let pathGet = `${path}?`;

    for(let index in parameters) {
      pathGet += `${index}=${parameters[index]}`
    }

    return Service.makeRequest(pathGet, "GET", header, parameters)

  };

  static makePostRequest = async <Request, Response>(path: string, parameters: Request, header: HeadersInit_ = {}): Promise<Response> => {

    return Service.makeRequest(path, "POST", header, parameters)

  };

  private static makeRequest = async <Response>(path: string, method: "POST" | "GET", headers: HeadersInit_, body: BodyInit_): Promise<Response> => {

    const url = Config.API_URL + path;

    try {

      let init: any = {
        method,
        headers,
      };

      if(method !== "GET")
        init['body'] = body;

      let response = await fetch(url, init);

      return await response.json();

    } catch (error) {
      return error;
    }

  };

}
