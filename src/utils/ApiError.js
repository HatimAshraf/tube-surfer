class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something is wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.status = statusCode;
    this.data = null;
    this.errors = errors;
    this.message = message;
    this.success = false;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
