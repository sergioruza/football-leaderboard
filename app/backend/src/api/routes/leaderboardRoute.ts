import { Request, Response, Router } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import LeaderboardController from '../controllers/Leaderboard';

const router = Router();

const service = new LeaderBoardService();
const controller = new LeaderboardController(service);

router.get(
  '/leaderboard/home',
  (req: Request, res: Response) => controller.getLeaderBoardHome(req, res),
);

router.get(
  '/leaderboard/away',
  (req: Request, res: Response) => controller.getLeaderBoardAway(req, res),
);

router.get(
  '/leaderboard',
  (req: Request, res: Response) => controller.getLeaderBoard(req, res),
);

export default router;
