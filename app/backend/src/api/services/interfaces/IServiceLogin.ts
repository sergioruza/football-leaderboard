import { UserToken } from '../../../token/ITokenUser';

export interface ILogin {
  email: string,
  password: string
}

export interface IServiceLogin {
  login(info: ILogin): Promise<string>;
  getRole(info: UserToken | undefined): Promise<string>
}
