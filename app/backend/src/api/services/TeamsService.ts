import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';

import { IServiceTeams } from './interfaces/IServiceTeams';
import { ITeam } from './interfaces/ITeam';

export default class TeamsService implements IServiceTeams {
  protected model: ModelStatic<Team> = Team;
  async getAll(): Promise<ITeam[]> {
    const result = this.model.findAll();
    if (!result) throw new Error();
    return result;
  }
}
