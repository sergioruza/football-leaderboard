import { Request, Response } from 'express';
import { UserToken } from '../../token/ITokenUser';
import { IRequest } from '../middlewares/interfaces/IRequest';
import { IServiceLogin } from '../services/interfaces/IServiceLogin';

export default class LoginController {
  private _service: IServiceLogin;

  constructor(service: IServiceLogin) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    const info = req.body;
    // console.log(info);

    const token = await this._service.login(info);
    res.status(200).json({ token });
  }

  async getRole(req: IRequest | IRequest, res: Response): Promise<Response> {
    const info: UserToken | undefined = req.user;
    const role = await this._service.getRole(info);
    console.log(role);
    return res.status(200).json({ role });
  }
}
