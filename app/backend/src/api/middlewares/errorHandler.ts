import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  static handle(err: Error, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof Error && err.stack) {
      return res.status(+err.stack).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}
export default ErrorHandler;
