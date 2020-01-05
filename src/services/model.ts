export enum ServiceStatus {

  noAction,
  loading,
  success,
  exception,
  noInternetConnection,

}
export interface ServiceResponse<Type> {
  status: ServiceStatus;
  response?: Type;
}
