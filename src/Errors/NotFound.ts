// Field not found, thrown usually when field is not present on server
export default class NotFound extends Error {
  message: string;
  details: any;

  constructor(message: string, details?: any) {
    super(message);
    this.message = message;
    this.details = details;
  }
}
