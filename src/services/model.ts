export enum ServiceStatus {

  noAction,
  success,
  exception,
  noInternetConnection,

}
export interface ServiceResposne<Type> {
  status: ServiceStatus;
  response?: Type;
}
