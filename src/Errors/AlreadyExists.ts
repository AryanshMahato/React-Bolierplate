export default class AlreadyExists extends Error {
  message: string;
  details: any;

  constructor(message: string, details?: any) {
    super(message);
    this.message = message;
    this.details = details;
  }
}
