import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderboardController {
  private _service: LeaderBoardService;

  constructor(service: LeaderBoardService) {
    this._service = service;
  }

  async getLeaderBoard(req: Request, res: Response) {
    const leaderboard = await this._service.classification();
    return res.status(200).json(leaderboard);
  }
}
