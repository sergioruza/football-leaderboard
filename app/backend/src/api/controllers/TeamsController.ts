import { Request, Response } from 'express';
import { IServiceTeams } from '../services/interfaces/IServiceTeams';

export default class TeamsController {
  private _service: IServiceTeams;

  constructor(service: IServiceTeams) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }
}
