import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }
}
