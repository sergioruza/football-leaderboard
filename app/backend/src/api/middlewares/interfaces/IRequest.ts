import { Request } from 'express';
import { UserToken } from '../../../token/ITokenUser';

export interface IRequest extends Request {
  user?: UserToken;
}
