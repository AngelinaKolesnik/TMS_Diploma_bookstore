export default class ApiError extends Error {
  status: number;
  errors: never[];

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User not authorized!");
  }

  static BadRequest(message: any, errors = []) {
    return new ApiError(400, message, errors);
  }
}
