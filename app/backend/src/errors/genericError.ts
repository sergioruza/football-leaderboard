export default class GenericError extends Error {
  constructor(message: string, code: number) {
    super(message);
    this.stack = code.toString();
  }
}
