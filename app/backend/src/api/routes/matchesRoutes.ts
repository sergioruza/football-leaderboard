import { Request, Response, Router } from 'express';

import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';

const router = Router();

const service = new MatchesService();

const matchesController = new MatchesController(service);

router.get('/matches', (req: Request, res: Response) => matchesController.getAll(req, res));

export default router;
