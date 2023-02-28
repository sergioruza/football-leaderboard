export interface ILogin {
  email: string,
  password: string
}

export interface IServiceLogin {
  login(info: ILogin): Promise<string>;
}
