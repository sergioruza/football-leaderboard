import { Request, Response, Router } from 'express';

import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';
import authToken from '../middlewares/authToken';

const router = Router();

const service = new MatchesService();

const matchesController = new MatchesController(service);

router.get('/matches', (req: Request, res: Response) => matchesController.getAll(req, res));

router.patch(
  '/matches/:id/finish',
  authToken,
  (req: Request, res: Response) => matchesController.finishMatches(req, res),
);

router.patch(
  '/matches/:id',
  authToken,
  (req: Request, res: Response) => matchesController.putGoals(req, res),
);

export default router;
