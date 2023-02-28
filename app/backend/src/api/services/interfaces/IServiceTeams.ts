import { ITeam } from './ITeam';

export interface IServiceTeams {
  getAll(): Promise<ITeam[]>
  getById(id: number): Promise<ITeam>
}
