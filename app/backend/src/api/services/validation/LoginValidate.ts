import GenericError from '../../../errors/genericError';
import { ILogin } from '../interfaces/IServiceLogin';
import login from './Schema';

const validateLogin = (info: ILogin) => {
  const { error } = login.validate(info);

  if (error) throw new GenericError('Invalid email or password', 401);

  return true;
};

export default validateLogin;
