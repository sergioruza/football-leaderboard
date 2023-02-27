import { ITeam } from './ITeam';

export interface IServiceTeams {
  getAll(): Promise<ITeam[]>
}
