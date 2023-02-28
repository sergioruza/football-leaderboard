import { Request, Response, Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controllers/TeamsController';

const service = new TeamsService();
const Teams = new TeamsController(service);
const router = Router();

router.get('/teams', (req: Request, res: Response) => Teams.getAll(req, res));
router.get('/teams/:id', (req: Request, res: Response) => Teams.getById(req, res));
export default router;
