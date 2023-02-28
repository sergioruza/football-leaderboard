import { Request, Response } from 'express';
import { IServiceLogin } from '../services/interfaces/IServiceLogin';

export default class LoginController {
  private _service: IServiceLogin;

  constructor(service: IServiceLogin) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    const info = req.body;

    const token = await this._service.login(info);
    res.status(200).json({ token });
  }
}
