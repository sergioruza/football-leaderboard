import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserToken } from '../../token/ITokenUser';

const { JWT_SECRET } = process.env;
interface req extends Request {
  user: UserToken
}

export default (req: req, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const payload = verify(token, JWT_SECRET as string) as UserToken;

  if (!payload) {
    return res.status(401).json({ message: '"Invalid token"' });
  }
  req.user = payload;
  next();
};
