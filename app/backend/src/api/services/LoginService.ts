import { ModelStatic } from 'sequelize';
// import * as bcryp from 'bcryptjs';
import generateToken from '../../token/generateToken';
import { UserToken } from '../../token/ITokenUser';
// import GenericError from '../../errors/genericError';
import User from '../../database/models/UserModel';
import { ILogin, IServiceLogin } from './interfaces/IServiceLogin';
// import validateLogin from './validation/LoginValidate';

export default class Login implements IServiceLogin {
  protected model: ModelStatic<User> = User;
  async login(info: ILogin): Promise<string> {
    // validateLogin(info);

    const find = await this.model.findOne({ where: { email: info.email } });
    const payload: UserToken = {
      id: find?.id as number,
      email: find?.email as string,
      username: find?.email as string,
    };
    // const passwordIsValid = bcryp.compare(info.password, find?.password as string, (err, res) => {
    //   if (res) {

    //     return ;
    //   }
    //   if (err) {
    //     throw new GenericError('Invalid email or password', 401);
    //   }
    // });
    // console.log(passwordIsValid);
    return generateToken(payload);
    // if (!find) throw new GenericError('Invalid email or password', 404);
  }
}
