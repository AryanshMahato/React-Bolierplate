// Error thrown if Environment variable setup is not configured Properly
export default class EnvVariableError extends Error {
  message = 'Environment Variable Not Found';
  variable: string;

  constructor(variable: string, message?: string) {
    super(message);
    this.message = message || this.message;
    this.variable = variable;
  }
}
