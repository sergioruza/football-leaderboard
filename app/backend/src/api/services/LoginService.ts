import { ModelStatic } from 'sequelize';
import * as bcryp from 'bcryptjs';
import generateToken from '../../token/generateToken';
import { UserToken } from '../../token/ITokenUser';
// import GenericError from '../../errors/genericError';
import User from '../../database/models/UserModel';
import { ILogin, IServiceLogin } from './interfaces/IServiceLogin';
import validateLogin from './validation/LoginValidate';
import GenericError from '../../errors/genericError';

export default class Login implements IServiceLogin {
  protected model: ModelStatic<User> = User;
  async login(info: ILogin): Promise<string> {
    validateLogin(info);

    const find = await this.model.findOne({ where: { email: info.email } });
    if (!find) throw new GenericError('Invalid email or password', 401);

    const payload: UserToken = {
      id: find.id as number,
      email: find.email as string,
      username: find.email as string,
    };

    const passwordValid = await bcryp.compare(info.password, find.password as string);
    if (!passwordValid) throw new GenericError('Invalid email or password', 401);
    return generateToken(payload);
  }
}
