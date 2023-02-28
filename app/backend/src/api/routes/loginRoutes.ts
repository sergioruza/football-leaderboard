import { Request, Response, Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import validateLogin from '../middlewares/authLogin';

const router = Router();

const service = new LoginService();
const controller = new LoginController(service);

router.post(
  '/login',
  validateLogin.verifyBody,
  (req: Request, res: Response) => controller.login(req, res),
);

export default router;
