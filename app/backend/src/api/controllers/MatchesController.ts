import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress) {
      const result = await this._service.getByQuery(inProgress as string);

      return res.status(200).json(result);
    }

    const result = await this._service.getAll();
    return res.status(200).json(result);
  }

  async finishMatches(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this._service.finishMatches(Number(id));

    return res.status(200).json({ message: result });
  }

  async putGoals(req: Request, res: Response) {
    const { id } = req.params;
    const info = req.body;
    const result = await this._service.putGoals(info, Number(id));
    res.status(200).json(result);
  }

  async createMatches(req: Request, res: Response) {
    const info = req.body;
    const result = await this._service.createMatches(info);

    res.status(201).json(result);
  }
}
