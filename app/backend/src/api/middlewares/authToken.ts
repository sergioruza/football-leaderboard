import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserToken } from '../../token/ITokenUser';
import { IRequest } from './interfaces/IRequest';

const { JWT_SECRET } = process.env;

export default (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const payload = verify(token, JWT_SECRET as string) as UserToken;
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
