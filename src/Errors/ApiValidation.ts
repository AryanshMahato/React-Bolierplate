// Required fields are not sent to the server
export default class ApiValidation extends Error {
  message: string;
  details: any;

  constructor(message: string, details: any) {
    super(message);
    this.message = message;
    this.details = details;
  }
}
