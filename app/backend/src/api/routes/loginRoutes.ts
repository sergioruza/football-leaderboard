import { Request, Response, Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import validateLogin from '../middlewares/authLogin';
import { IRequest } from '../middlewares/interfaces/IRequest';
import authToken from '../middlewares/authToken';

const router = Router();

const service = new LoginService();
const controller = new LoginController(service);

router.post(
  '/login',
  validateLogin.verifyBody,
  (req: Request, res: Response) => controller.login(req, res),
);

router.get(
  '/login/role',
  authToken,
  (req: IRequest, res: Response) => controller.getRole(req, res),
);

export default router;
